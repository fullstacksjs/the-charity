import * as path from 'node:path';

import type { RollupWatcher } from 'rollup';
import { build } from 'vite';

const cache: Record<string, string> = {};

export async function processFile(file: Cypress.FileObject): Promise<string> {
  const { outputPath, filePath, shouldWatch } = file;
  const cached = cache[filePath];
  if (cached) return cached;

  const fileName = path.basename(outputPath);
  const filenameWithoutExtension = path.basename(
    outputPath,
    path.extname(outputPath),
  );

  const watcher = await build({
    configFile: path.resolve(__dirname, '../../vite.config.ts'),
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    },
    logLevel: 'silent',
    build: {
      emptyOutDir: false,
      minify: false,
      outDir: path.dirname(outputPath),
      sourcemap: false,
      write: true,
      watch: shouldWatch ? {} : null,
      lib: {
        entry: filePath,
        fileName: () => fileName,
        formats: ['umd'],
        name: filenameWithoutExtension,
      },
    },
  });

  if (shouldWatch && isWatcher(watcher)) {
    watcher.on('event', event => {
      if (event.code === 'END') file.emit('rerun');
      if (event.code === 'ERROR') console.error(event);
    });

    file.on('close', () => {
      Reflect.deleteProperty(cache, filePath);
      void watcher.close();
    });
  }

  cache[filePath] = outputPath;
  return outputPath;
}

function isWatcher(watcher: object): watcher is RollupWatcher {
  return Reflect.get(watcher, 'on') != null;
}
