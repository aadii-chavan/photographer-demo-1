import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.join(process.cwd(), 'public');

async function optimizeImages() {
  const files = await fs.readdir(publicDir);
  const jpgs = files.filter(f => f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.jpeg'));

  console.log(`Found ${jpgs.length} images to optimize...`);

  for (const file of jpgs) {
    const inputPath = path.join(publicDir, file);
    const filename = path.parse(file).name;
    const outputPath = path.join(publicDir, `${filename}.webp`);

    console.log(`Optimizing ${file}...`);
    try {
      await sharp(inputPath)
        .resize({ width: 1200, withoutEnlargement: true }) // Resize to a max width of 1200px to save massive amounts of mobile RAM
        .webp({ quality: 80 })
        .toFile(outputPath);
      console.log(`✅ Created ${filename}.webp`);
    } catch (err) {
      console.error(`❌ Error optimizing ${file}:`, err);
    }
  }
}

optimizeImages();
