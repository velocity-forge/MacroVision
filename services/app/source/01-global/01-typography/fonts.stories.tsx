// import { Meta, Story } from '@storybook/react';
// import { Property } from 'csstype';
// import getCssVariables from '../../06-utility/storybook/getCssVariables';

// const settings: Meta = {
//   title: 'Global/Typography/Fonts',
// };

// interface FontOptions {
//   [name: string]: Property.FontFamily;
// }

// const allVars = getCssVariables();

// const fonts = allVars.reduce((allFonts, [key, value]) => {
//   if (key.indexOf('--font-family') === 0) {
//     const name = key.substring(14);
//     allFonts[name] = value;
//   }
//   return allFonts;
// }, {} as FontOptions);

// const Fonts: Story = args => {
//   return (
//     // {% for name, item in gesso.typography['font-family'] %}
//     //   {% set stack = item.stack|replace({'/\\/' : ""})  %}
//     //   {% set font_family = 'font-family: ' ~ stack ~ ';' %}

//     //   <div class="gesso-storybook-font">
//     //     <h3 class="gesso-storybook-font__family" style='{{font_family}}'>
//     //       {{item.name}}
//     //     </h3>

//     //     {% for key, weight in gesso.typography['font-weight'] %}
//     //       {% set font_weight = 'font-weight: ' ~ weight ~ ';' %}

//     //       {% set preview_style = 'font-style: normal;' ~ font_weight ~ font_family %}

//     //       <div class="gesso-storybook-font__item">
//     //         <div class="gesso-storybook-font__preview-character" style='{{preview_style}}'>AaBbCc</div>
//     //         <div class="gesso-storybook-font__preview" style='{{preview_style}}'>
//     //           ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>abcdefghijklmnopqrstuvwxyz<br/>1234567890(,.;:?!$&*)
//     //         </div>
//     //         <div class="gesso-storybook-font__preview-meta">
//     //           <div class="gesso-storybook-font__name">{{item.name }}</div>
//     //           <div class="gesso-storybook-font__weight">
//     //             <span class="gesso-storybook-font__label">Weight:</span>
//     //             {{ weight }}
//     //           </div>
//     //           <div class="gesso-storybook-font__style">
//     //             <span class="gesso-storybook-font__label">Style:</span>
//     //             {{ stack }}
//     //           </div>
//     //         </div>
//     //       </div>

//     //     {% endfor %}
//     //   </div>
//     // {% endfor %}

//     <div>
//       {Object.entries(args.Font as FontOptions).map(([name, Font]) => (
//         <div>
//           {Font}
//           {name}
//         </div>
//       ))}
//     </div>
//   );
// };
// Fonts.args = {
//   Font: fonts,
// };

// export default settings;
// export { Fonts };
