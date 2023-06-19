// eslint-disable-next-line @typescript-eslint/no-var-requires
const t = require('@babel/core').types;

const iconTemplate = (variables, { tpl }) => {
  if (t.isObjectPattern(variables.props[0])) {
    variables.props[0].properties.unshift(
      t.objectProperty(
        t.identifier('isHidden'),
        t.identifier('isHidden'),
        false,
        true,
      ),
    );
    variables.props[0].properties.unshift(
      t.objectProperty(
        t.identifier('modifierClasses'),
        t.identifier('modifierClasses'),
        false,
        true,
      ),
    );
  }

  return tpl`
${variables.imports};
import clsx from 'clsx';

${variables.interfaces};

const ${variables.componentName} = (${variables.props}) => {
  return (${variables.jsx});
};
 
${variables.exports};
`;
};

module.exports = iconTemplate;
