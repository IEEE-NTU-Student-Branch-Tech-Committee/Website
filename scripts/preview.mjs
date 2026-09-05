import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('out');
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
};

const server = http.createServer(async (request, response) => {
  try {
    let url = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    if (basePath && !url.startsWith(`${basePath}/`) && url !== basePath) {
      response.writeHead(404).end('Not found');
      return;
    }
    url = url.slice(basePath.length) || '/';
    let file = path.resolve(root, `.${url}`);
    if (file !== root && !file.startsWith(`${root}${path.sep}`)) {
      response.writeHead(403).end();
      return;
    }
    if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html');
    const body = await readFile(file);
    response.writeHead(200, {
      'Content-Type': types[path.extname(file)] || 'application/octet-stream',
      'Cache-Control': 'no-store',
    });
    response.end(body);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(await readFile(path.join(root, '404.html')));
  }
});
server.listen(Number(process.env.PORT || 4173), '127.0.0.1', () =>
  console.log(`Static preview: http://127.0.0.1:${process.env.PORT || 4173}${basePath}/`),
);
