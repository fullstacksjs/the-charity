import fs from 'node:fs';
import path from 'node:path';

import type ts from 'typescript';
import type { Plugin } from 'vite';

const loadJSON = <T>(filePath: string): T =>
  JSON.parse(fs.readFileSync(filePath, 'utf-8'));

function transformAliases(aliases: Map<string, string>, file: string) {
  // eslint-disable-next-line fp/no-let
  let code = file;

  aliases.forEach((v, k) => {
    const regex = new RegExp(`import {(.*?)} from ["']${k}["'];?`, 'g');
    code = code.replace(regex, `import { $1 } from '../../${v}'`);
  });

  return code;
}

export function cypressAliases(): Plugin {
  const aliases = new Map<string, string>();

  return {
    name: 'cypress-aliases-plugin',
    enforce: 'pre',

    configResolved({ root }) {
      const project = path.resolve(root, 'tsconfig.json');
      const config = loadJSON<ts.TranspileOptions>(project);
      const tsAliases = config.compilerOptions?.paths;
      if (tsAliases == null) return;
      Object.entries(tsAliases).forEach(([key, value]) => {
        aliases.set(key, value[0]);
      });
    },

    transform(src: string, id: string) {
      if (/.*cypress\/e2e\//.test(id)) {
        const code = transformAliases(aliases, src);
        return { code, map: null };
      }
    },
  };
}
