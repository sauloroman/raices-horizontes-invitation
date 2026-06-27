import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.join(__dirname, '../src/assets/images');
const BACKUP_DIR = path.join(__dirname, '../src/assets/images-backup');

async function optimize() {
    if (!fs.existsSync(IMAGES_DIR)) {
        console.error(`Images directory does not exist: ${IMAGES_DIR}`);
        return;
    }

    if (!fs.existsSync(BACKUP_DIR)) {
        fs.mkdirSync(BACKUP_DIR, { recursive: true });
        console.log(`Created backup directory at: ${BACKUP_DIR}`);
    }

    const files = fs.readdirSync(IMAGES_DIR);
    console.log(`Found ${files.length} items in images directory.`);

    for (const file of files) {
        const filePath = path.join(IMAGES_DIR, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) continue;

        const ext = path.extname(file).toLowerCase();
        if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
            console.log(`Skipping non-image file: ${file}`);
            continue;
        }

        const backupPath = path.join(BACKUP_DIR, file);
        
        // Backup the original image if not already backed up
        if (!fs.existsSync(backupPath)) {
            fs.copyFileSync(filePath, backupPath);
            console.log(`Backed up original: ${file}`);
        } else {
            console.log(`Backup already exists for: ${file}`);
        }

        const backupStat = fs.statSync(backupPath);
        console.log(`Optimizing ${file} (Original: ${(backupStat.size / (1024 * 1024)).toFixed(2)} MB, Current: ${(stat.size / (1024 * 1024)).toFixed(2)} MB)...`);

        const tempOutPath = path.join(IMAGES_DIR, `temp-${file}`);

        try {
            let pipeline = sharp(backupPath);
            
            // Get metadata to check dimensions
            const metadata = await pipeline.metadata();
            
            // Resize if dimensions are larger than 1920px (full HD limit)
            const MAX_DIMENSION = 1920;
            if ((metadata.width && metadata.width > MAX_DIMENSION) || (metadata.height && metadata.height > MAX_DIMENSION)) {
                console.log(`  Resizing image down to max dimension ${MAX_DIMENSION}px (original: ${metadata.width}x${metadata.height})`);
                pipeline = pipeline.resize({
                    width: metadata.width > metadata.height ? MAX_DIMENSION : undefined,
                    height: metadata.height >= metadata.width ? MAX_DIMENSION : undefined,
                    fit: 'inside',
                    withoutEnlargement: true
                });
            }

            // Apply optimization depending on format
            if (ext === '.png') {
                pipeline = pipeline.png({
                    quality: 80,
                    palette: true,
                    compressionLevel: 9
                });
            } else if (['.jpg', '.jpeg'].includes(ext)) {
                pipeline = pipeline.jpeg({
                    quality: 80,
                    mozjpeg: true
                });
            }

            await pipeline.toFile(tempOutPath);

            // Replace original with optimized version
            fs.unlinkSync(filePath);
            fs.renameSync(tempOutPath, filePath);

            const newStat = fs.statSync(filePath);
            const savings = ((1 - (newStat.size / backupStat.size)) * 100).toFixed(1);
            console.log(`  Optimized: ${file} -> New size: ${(newStat.size / (1024 * 1024)).toFixed(2)} MB (${savings}% total reduction from original)`);

        } catch (error) {
            console.error(`  Error optimizing ${file}:`, error);
            if (fs.existsSync(tempOutPath)) {
                fs.unlinkSync(tempOutPath);
            }
        }
    }

    console.log('Optimization complete! Original high-resolution backups can be found in src/assets/images-backup');
}

optimize();
