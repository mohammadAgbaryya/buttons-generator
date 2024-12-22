import fs from 'fs/promises';
import path from 'path';

/** Paths */
const badgeFiles = [
  'badge-branches.svg',
  'badge-functions.svg',
  'badge-lines.svg',
  'badge-statements.svg',
];

const sourceFolder = path.resolve(process.cwd(), 'coverage');
const destinationFolder = path.resolve(process.cwd(), 'coverage-badges');

/**
 * Moves specific SVG badges from the coverage folder to the badges folder.
 */
async function moveBadges() {
  try {
    // Ensure the destination folder exists
    await fs.mkdir(destinationFolder, { recursive: true });

    // Move each badge directly
    await Promise.all(
      badgeFiles.map(async (file) => {
        const srcPath = path.join(sourceFolder, file);
        const destPath = path.join(destinationFolder, file);
        await fs.rename(srcPath, destPath);
        console.log(`Moved: ${file}`);
      })
    );

    console.log('All badges moved successfully.');
  } catch (error) {
    console.error('Error moving badges:', error);
    process.exit(1);
  }
}

// Run the script
moveBadges();
