import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 3000;

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const modelPage = await vite.transformIndexHtml(
        url,
        await readFile(path.resolve(__dirname, 'index.html'), 'utf-8')
      );
      const [shell, app] = modelPage.split('<!--ssr-body-->');
      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');

      await new Promise((resolve) =>
        render(url, {
          onShellReady() {
            res.write(shell);
            res.once('drain', resolve);
          },
          onAllReady() {
            res.write(app);
            res.end();
          },
        })
      );
    } catch (e) {
      console.error(e);
      next(e);
    }
  });

  app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
  });
}

createServer();
