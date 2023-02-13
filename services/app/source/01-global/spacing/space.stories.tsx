import { Meta, Story } from '@storybook/react';
import getCssVariables from '../../06-utility/storybook/getCssVariables';

const settings: Meta = {
  title: 'Global/Spacing',
};

const allVars = getCssVariables();

const basefontsize = allVars.reduce((BaseFontSize, [key, value]) => {
  if (key.indexOf('--base-font-size') === 0) {
    BaseFontSize = value;
  }
  return BaseFontSize;
}, {} as string);

interface SpacingOptions {
  [space: string]: string;
}

const spacing = allVars.reduce((allSpacing, [key, value]) => {
  if (key.indexOf('--spacing') === 0) {
    let space = key.substring(10);
    if (space.includes('-')) {
      space = space.replace('-','.');
    } else {
      space = space + '.0';
    }
    allSpacing[space] = value;
  }
  return allSpacing;
}, {} as SpacingOptions);

const Spacing: Story = args => {
  return (
    <table>
      <thead>
        <tr>
          <th>Token</th>
          <th>REM</th>
          <th>PX</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(args.spacing as SpacingOptions).map(
          ([name, unit]) => (
            <tr>
              <td>{name.replace('.0','')}</td>
              <td>{Number(unit.replace('px','')) / Number(basefontsize.replace('px',''))}rem</td>
              <td>{unit}</td>
              <td>
                <div
                  style={{
                    height: unit,
                    width: unit,
                    backgroundColor: '#ccc',
                  }}
                >
                </div>
              </td>
            </tr>
          ),
        )}
      </tbody>
    </table>

  );
};
Spacing.args = {
  spacing: spacing,
};

export default settings;
export { Spacing };
