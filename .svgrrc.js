const iconTemplate = require('./lib/icon-template');
const indexTemplate = require('./lib/index-template');

module.exports = {
  svgo: true,
  svgoConfig: {
    plugins: ['removeDimensions'],
  },
  replaceAttrValues: {
    '#000': 'currentColor',
  },
  titleProp: true,
  typescript: true,
  ext: 'tsx',
  jsx: {
    babelConfig: {
      plugins: [
        [
          '@svgr/babel-plugin-remove-jsx-attribute',
          {
            elements: ['svg'],
            attributes: ['isHidden'],
          },
        ],
        [
          '@svgr/babel-plugin-add-jsx-attribute',
          {
            elements: ['svg'],
            attributes: [
              {
                name: 'aria-hidden',
                value: "isHidden ? 'true' : 'false'",
                literal: true,
                position: 'start',
              },
              {
                name: 'role',
                value: "title ? 'img' : undefined",
                literal: true,
                position: 'start',
              },
              {
                name: 'className',
                value: "clsx('icon', modifierClasses)",
                literal: true,
              },
            ],
          },
        ],
      ],
    },
  },
  template: iconTemplate,
  indexTemplate,
};
