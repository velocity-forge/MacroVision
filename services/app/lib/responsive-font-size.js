// PostCSS plugin to calculate responsive font size using clamp()
// https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/

/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = (
  opts = {
    minWidth: 360,
    maxWidth: 1600,
    baseFontSize: 16,
  },
) => {
  return {
    postcssPlugin: 'responsive-font-size',
    Declaration(decl) {
      if (decl.value.trim().indexOf('responsive-font-size') === 0) {
        let [_fullMatch, minFontSize, maxFontSize] =
          /responsive-font-size\((\S+),? (\S+)\)/di.exec(decl.value);
        if (!minFontSize || !maxFontSize) {
          throw decl.error(
            'Both minimum and maximum font size must be specified. Example usage: `responsive-font-size(12px 16px)`',
          );
        }

        // Check that the minimum and maximum font sizes are values we can work
        // with: rems, px, or unitless (in which case, we'll assume that's a px
        // value). If it is in px, convert it to rem.
        if (minFontSize.includes('rem')) {
          minFontSize = parseFloat(minFontSize);
        } else if (minFontSize.includes('px') || !isNaN(Number(minFontSize))) {
          minFontSize = parseFloat(minFontSize) / opts.baseFontSize;
        } else {
          throw decl.error(
            'Minimum and maximum font size must be given in px or rem.',
          );
        }

        if (maxFontSize.includes('rem')) {
          maxFontSize = parseFloat(maxFontSize);
        } else if (maxFontSize.includes('px') || !isNaN(Number(maxFontSize))) {
          maxFontSize = parseFloat(maxFontSize) / opts.baseFontSize;
        } else {
          throw decl.error(
            'Minimum and maximum font size must be given in px or rem.',
          );
        }

        let minWidth = opts.minWidth / opts.baseFontSize;
        let maxWidth = opts.maxWidth / opts.baseFontSize;

        // If the font sizes are identical, nothing more to do here.
        if (minFontSize === maxFontSize) {
          decl.value = `${minFontSize}rem`;
          return;
        }

        // Calculate the viewport-width based value.
        const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth);
        const intersection = -1 * minWidth * slope + minFontSize;
        decl.value = `clamp(${minFontSize.toFixed(
          4,
        )}rem, ${intersection.toFixed(4)}rem + ${(slope * 100).toFixed(
          4,
        )}vw, ${maxFontSize.toFixed(4)}rem)`;
      }
    },
  };
};

module.exports.postcss = true;
