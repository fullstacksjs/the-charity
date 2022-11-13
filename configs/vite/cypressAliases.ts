function compileFileToJS(file: string) {
  return file.replace(
    /import { (.*?) } from ["']@camp\/test["'];/g,
    "import { $1 } from '../../lib/test'",
  );
}

const fileRegex = /cypress\/[e2e|support]/;

export function cypressAliases() {
  return {
    name: 'cypress-aliases-plugin',
    transform(src: string, id: string) {
      if (fileRegex.test(id)) {
        const code = compileFileToJS(src);
        return { code, map: null };
      }
    },
  };
}
