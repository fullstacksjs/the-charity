const { pascalCase } = require('change-case-all');
/**
 * @param {string} str
 * @return {string}
 * NOTE: for some reasons duplicate prefixes occur
 *       the startsWith check is to prevent that
 *       from happening
 */
const toCorrectNaming = str => {
  if (str.startsWith('Api')) return str;

  if (str.includes('enum')) return pascalCase(str);

  return `Api${pascalCase(str)}`;
};

module.exports = toCorrectNaming;
