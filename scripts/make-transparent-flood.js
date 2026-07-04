import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.join(__dirname, '../src/assets/images');
const BACKUP_DIR = path.join(__dirname, '../src/assets/images-backup');

const filesToConvert = [
    { name: 'cup-of-wine.png', out: 'cup-of-wine.png', type: 'flood', tolerance: 25 },
    { name: 'candels.png', out: 'candels.png', type: 'flood', tolerance: 25 },
    { name: 'chair.jpeg', out: 'chair.png', type: 'flood', tolerance: 25 },
    { name: 'champage.png', out: 'champage.png', type: 'flood', tolerance: 25 },
    { name: 'table-icon.jpeg', out: 'table-icon.png', type: 'flood', tolerance: 25 },
    { name: 'dress-code-frame.jpeg', out: 'dress-code-frame.png', type: 'threshold', threshold: 210 },
    { name: 'bola-disco.jpeg', out: 'bola-disco.png', type: 'flood', tolerance: 25 },
    { name: 'bulbs-icons.jpeg', out: 'bulbs-icons.png', type: 'flood', tolerance: 25, refPixel: { x: 10, y: 758 } },
    { name: 'guest-frame.jpeg', out: 'guest-frame.png', type: 'flood', tolerance: 35, extraSeeds: [{ x: 384, y: 688 }, { x: 384, y: 1200 }, { x: 100, y: 1200 }, { x: 668, y: 1200 }] },
    { name: 'dress-code-humans.jpeg', out: 'dress-code-humans.png', type: 'flood', tolerance: 30 },
    { name: 'line-balls.jpeg', out: 'line-balls.png', type: 'flood', tolerance: 30 },
];

async function removeBackgroundFloodFill(data, info, colorTolerance, refPixel, extraSeeds) {
    const { width, height } = info;
    const visited = new Uint8Array(width * height);
    const queue = [];

    // Get reference background color (default to top-left corner)
    let refR = data[0];
    let refG = data[1];
    let refB = data[2];

    if (refPixel) {
        // Handle coordinate safety
        const rx = Math.min(Math.max(0, refPixel.x), width - 1);
        const ry = Math.min(Math.max(0, refPixel.y), height - 1);
        const refIdx = (ry * width + rx) * 4;
        refR = data[refIdx];
        refG = data[refIdx + 1];
        refB = data[refIdx + 2];
    }

    console.log(`    Ref color: R=${refR}, G=${refG}, B=${refB}`);

    // Helper to calculate color distance
    function getColorDistance(r, g, b) {
        return Math.sqrt((r - refR) ** 2 + (g - refG) ** 2 + (b - refB) ** 2);
    }

    // Helper to add pixel to queue
    function enqueue(x, y) {
        const idx = y * width + x;
        if (!visited[idx]) {
            visited[idx] = 1;
            queue.push({ x, y });
        }
    }

    // Add all border pixels to start the flood fill
    for (let x = 0; x < width; x++) {
        enqueue(x, 0);
        enqueue(x, height - 1);
    }
    for (let y = 0; y < height; y++) {
        enqueue(0, y);
        enqueue(width - 1, y);
    }

    // Add extra seeds (like the center of a frame)
    if (extraSeeds) {
        for (const seed of extraSeeds) {
            enqueue(seed.x, seed.y);
        }
    }

    let head = 0;
    while (head < queue.length) {
        const { x, y } = queue[head++];
        const pixelIdx = (y * width + x) * 4;
        
        const r = data[pixelIdx];
        const g = data[pixelIdx + 1];
        const b = data[pixelIdx + 2];

        if (getColorDistance(r, g, b) < colorTolerance) {
            // Make transparent
            data[pixelIdx + 3] = 0;

            // Enqueue 4-neighbors
            if (x > 0) enqueue(x - 1, y);
            if (x < width - 1) enqueue(x + 1, y);
            if (y > 0) enqueue(x, y - 1);
            if (y < height - 1) enqueue(x, y + 1);
        }
    }
}

async function removeBackgroundThreshold(data, info, threshold) {
    for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // If R, G, and B are all above the threshold, make the pixel transparent
        if (r > threshold && g > threshold && b > threshold) {
            data[i + 3] = 0;
        }
    }
}

async function main() {
    for (const file of filesToConvert) {
        // Read from backup (high-res original) if available, otherwise direct images folder
        const backupPath = path.join(BACKUP_DIR, file.name);
        const inputPath = fs.existsSync(backupPath) ? backupPath : path.join(IMAGES_DIR, file.name);
        const outputPath = path.join(IMAGES_DIR, file.out);

        if (!fs.existsSync(inputPath)) {
            console.error(`File not found: ${inputPath}`);
            continue;
        }

        console.log(`Processing ${file.name} (${file.type})...`);
        try {
            const image = sharp(inputPath);
            const { data, info } = await image
                .ensureAlpha()
                .raw()
                .toBuffer({ resolveWithObject: true });

            if (file.type === 'flood') {
                await removeBackgroundFloodFill(data, info, file.tolerance, file.refPixel, file.extraSeeds);
            } else if (file.type === 'threshold') {
                await removeBackgroundThreshold(data, info, file.threshold);
            }

            // Write raw data back as PNG
            await sharp(data, {
                raw: {
                    width: info.width,
                    height: info.height,
                    channels: 4
                }
            })
            .png()
            .toFile(outputPath);

            console.log(`  Saved transparent image to: ${file.out}`);
        } catch (error) {
            console.error(`  Error processing ${file.name}:`, error);
        }
    }
}

main();
