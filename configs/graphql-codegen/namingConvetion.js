const { pascalCase } = require('change-case');
/**
 * @param {string*} str
 * @return {string}
 */

// NOTE: for some reasons duplicate prefixes occur
//       the startsWith check is to prevent that
//       from happening
const toCorrectNaming = str =>
  str.startsWith('Api') ? str : `Api${pascalCase(str)}`;
module.exports = toCorrectNaming;
