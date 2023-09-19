// eslint-disable-next-line @typescript-eslint/no-var-requires
const t = require('@babel/core').types;

const iconTemplate = (
  { imports, interfaces, componentName, props, jsx, exports },
  { tpl, options },
) => {
  // Add custom props: isHidden and modifierClasses
  if (t.isObjectPattern(props[0])) {
    props[0].properties.unshift(
      t.objectProperty(
        t.identifier('isHidden'),
        t.identifier('isHidden'),
        false,
        true,
      ),
    );
    props[0].properties.unshift(
      t.objectProperty(
        t.identifier('modifierClasses'),
        t.identifier('modifierClasses'),
        false,
        true,
      ),
    );
  } else {
    props.unshift(t.identifier('isHidden'));
    props.unshift(t.identifier('modifierClasses'));
  }

  // If we're using typescript (which we probably are), add the
  // custom props to the interface as well.
  if (options.typescript && t.isTSInterfaceDeclaration(interfaces[0])) {
    interfaces[0].body.body.push({
      ...t.tsPropertySignature(
        t.identifier('isHidden'),
        t.tsTypeAnnotation(t.tsBooleanKeyword()),
      ),
      optional: true,
    });
    interfaces[0].body.body.push({
      ...t.tsPropertySignature(
        t.identifier('modifierClasses'),
        t.tsTypeAnnotation(
          t.tsUnionType([
            t.tsStringKeyword(),
            t.tsArrayType(t.tsStringKeyword()),
          ]),
        ),
      ),
      optional: true,
    });
  }

  return tpl`
// This component is automatically generated.
// SVGs should be added to icon/svgs.
// See the project documentation for more information.
// tslint:disable:ordered-imports
import clsx from 'clsx';
${imports};

${interfaces};

const ${componentName} = (${props}) => {
  return (${jsx});
};
 
${exports};
`;
};

module.exports = iconTemplate;
