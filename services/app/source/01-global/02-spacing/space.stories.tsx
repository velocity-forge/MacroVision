import { Meta, Story } from '@storybook/react';
import getCssVariables from '../../06-utility/storybook/getCssVariables';

const settings: Meta = {
  title: 'Global/Spacing',
};

const allVars = getCssVariables();

const baseFontVar = allVars.find(
  ([key]) => key.indexOf('--base-font-size') === 0,
);
const baseFontSize = baseFontVar ? parseInt(baseFontVar[1]) : 16;

interface SpacingOptions {
  [space: string]: string;
}

const spacing = allVars.reduce((allSpacing, [key, value]) => {
  if (key.indexOf('--spacing') === 0) {
    let space = key.substring(10);
    if (space.includes('-')) {
      space = space.replace('-', '.');
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
        {Object.entries(args.spacing as SpacingOptions)
          .sort(([keyA], [keyB]) => Number(keyA) - Number(keyB))
          .map(([name, unit]) => (
            <tr key={`spacing-${name}`}>
              <td>{name}</td>
              <td>
                {parseInt(unit) / baseFontSize}
                rem
              </td>
              <td>{unit}</td>
              <td>
                <div
                  style={{
                    height: unit,
                    width: unit,
                    backgroundColor: '#ccc',
                  }}
                ></div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
Spacing.args = {
  spacing: spacing,
};

export default settings;
export { Spacing };
