// PostCSS plugin to add inline content if first parameter is true.
// Needs to be used *after* postcss-advanced-variables.

/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = () => {
  return {
    postcssPlugin: 'iff',
    Declaration(decl) {
      if (decl.value.includes('iff(')) {
        decl.value = decl.value.replace(
          /iff\(([^\s,]+),? ([^)]+)\)/di,
          (_match, p1, p2) =>
            p1.toLowerCase().trim() === 'true' ? p2.trim() : '',
        );
      }
    },
  };
};

module.exports.postcss = true;
