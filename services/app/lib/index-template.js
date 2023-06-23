// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
function defaultIndexTemplate(filePaths) {
  const exportEntries = filePaths.map(({ path: filePath }) => {
    const basename = path.basename(filePath, path.extname(filePath));
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
    return `${exportName}: dynamic(() => import('./${basename}'), {
      loading: () => <svg className="icon"></svg>,
    })`;
  });
  return `
import dynamic from 'next/dynamic';

const Icons = {
  ${exportEntries.join(',\n')}
};

export default Icons;    
`;
}

module.exports = defaultIndexTemplate;
