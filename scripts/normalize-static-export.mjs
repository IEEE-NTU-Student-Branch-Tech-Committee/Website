import { copyFile, readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

// Next.js #92339: Windows writes some segment-cache files into nested folders
// while the client requests dot-separated names. Add the canonical files to the
// static artifact itself; preview and production need no special URL rewrites.
// https://github.com/vercel/next.js/issues/92339
const root = path.resolve('out');

async function filesUnder(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await filesUnder(absolute)));
    else if (entry.isFile()) files.push(absolute);
  }
  return files;
}

let count = 0;
for (const source of await filesUnder(root)) {
  const parts = path.relative(root, source).split(path.sep);
  const index = parts.findIndex((part) => part.startsWith('__next.'));
  if (index < 0 || index === parts.length - 1 || !source.endsWith('.txt')) continue;
  const destination = path.resolve(root, ...parts.slice(0, index), parts.slice(index).join('.'));
  if (!destination.startsWith(`${root}${path.sep}`)) throw new Error('Invalid export target');
  try {
    const existing = await readFile(destination);
    if (!existing.equals(await readFile(source)))
      throw new Error(`Conflicting export: ${destination}`);
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
    await copyFile(source, destination);
    count++;
  }
}
console.log(`Static export: ${count} Windows segment paths normalised.`);
