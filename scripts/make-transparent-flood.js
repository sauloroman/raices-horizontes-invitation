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
    { name: 'base-flower.jpeg', out: 'base-flower.png', type: 'flood', tolerance: 30 },
    { name: 'base-flower-2.jpeg', out: 'base-flower-2.png', type: 'flood', tolerance: 30 },
    { name: 'itinerary-frame.jpeg', out: 'itinerary-frame.png', type: 'flood', tolerance: 40, extraSeeds: [{ x: 384, y: 688 }, { x: 384, y: 1200 }, { x: 100, y: 1200 }, { x: 668, y: 1200 }] },
    { name: 'bola-disco-2.jpeg', out: 'bola-disco-2.png', type: 'circle', cx: 527, cy: 480.5, r: 359 },
];

async function removeBackgroundFloodFill(data, info, colorTolerance, refPixel, extraSeeds) {
    const { width, height } = info;
    const visited = new Uint8Array(width * height);

    // Helper to perform a flood fill pass from specific starting seeds/pixels
    function runFloodFill(seeds, defaultRefColor) {
        const queue = [];
        
        function enqueue(x, y) {
            const idx = y * width + x;
            if (!visited[idx]) {
                visited[idx] = 1;
                queue.push({ x, y });
            }
        }

        // Determine reference color
        let refR, refG, refB;
        if (defaultRefColor) {
            refR = defaultRefColor.r;
            refG = defaultRefColor.g;
            refB = defaultRefColor.b;
        } else {
            // Sample from first seed point
            const firstSeed = seeds[0];
            const idx = (firstSeed.y * width + firstSeed.x) * 4;
            refR = data[idx];
            refG = data[idx + 1];
            refB = data[idx + 2];
        }

        // Enqueue seeds
        for (const seed of seeds) {
            enqueue(seed.x, seed.y);
        }

        let head = 0;
        while (head < queue.length) {
            const { x, y } = queue[head++];
            const pixelIdx = (y * width + x) * 4;
            
            const r = data[pixelIdx];
            const g = data[pixelIdx + 1];
            const b = data[pixelIdx + 2];

            const dist = Math.sqrt((r - refR) ** 2 + (g - refG) ** 2 + (b - refB) ** 2);
            if (dist < colorTolerance) {
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

    // Pass 1: Border pixels
    const borderSeeds = [];
    for (let x = 0; x < width; x++) {
        borderSeeds.push({ x, y: 0 });
        borderSeeds.push({ x, y: height - 1 });
    }
    for (let y = 0; y < height; y++) {
        borderSeeds.push({ x: 0, y });
        borderSeeds.push({ x: width - 1, y });
    }

    let outerRefColor = null;
    if (refPixel) {
        const rx = Math.min(Math.max(0, refPixel.x), width - 1);
        const ry = Math.min(Math.max(0, refPixel.y), height - 1);
        const refIdx = (ry * width + rx) * 4;
        outerRefColor = { r: data[refIdx], g: data[refIdx + 1], b: data[refIdx + 2] };
    } else {
        outerRefColor = { r: data[0], g: data[1], b: data[2] };
    }

    console.log(`    Outer Ref color: R=${outerRefColor.r}, G=${outerRefColor.g}, B=${outerRefColor.b}`);
    runFloodFill(borderSeeds, outerRefColor);

    // Pass 2: Extra seeds (each gets its own reference color based on its position!)
    if (extraSeeds) {
        for (const seed of extraSeeds) {
            const rx = Math.min(Math.max(0, seed.x), width - 1);
            const ry = Math.min(Math.max(0, seed.y), height - 1);
            const idx = (ry * width + rx) * 4;
            const seedColor = { r: data[idx], g: data[idx + 1], b: data[idx + 2] };
            console.log(`    Seed (${seed.x}, ${seed.y}) Ref color: R=${seedColor.r}, G=${seedColor.g}, B=${seedColor.b}`);
            runFloodFill([seed], seedColor);
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

async function removeBackgroundCircle(data, info, cx, cy, r) {
    const { width, height } = info;
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 4;
            const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
            if (dist > r + 1.5) {
                data[idx + 3] = 0;
            } else if (dist > r - 0.5) {
                // Anti-aliasing (feather edge)
                const factor = 1 - (dist - (r - 0.5)) / 2;
                data[idx + 3] = Math.max(0, Math.min(255, Math.round(data[idx + 3] * factor)));
            }
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
            } else if (file.type === 'circle') {
                await removeBackgroundCircle(data, info, file.cx, file.cy, file.r);
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
