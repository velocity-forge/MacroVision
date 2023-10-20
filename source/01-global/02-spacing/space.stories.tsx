import { Meta, StoryObj } from '@storybook/react';
import getCssVariables from '../../06-utility/storybook/getCssVariables';

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

const SpacingComponent = ({ spacing }: { spacing: SpacingOptions }) => {
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
        {Object.entries(spacing)
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

const meta: Meta<typeof SpacingComponent> = {
  title: 'Global/Spacing',
  component: SpacingComponent,
  argTypes: {
    spacing: {
      table: {
        disable: true,
      },
    },
  },
};

const Spacing: StoryObj<typeof SpacingComponent> = {
  args: {
    spacing,
  },
};

export default meta;
export { Spacing };
