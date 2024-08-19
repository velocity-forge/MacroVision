import { lstat } from 'fs/promises';
import inquirer from 'inquirer';
import { readdir } from 'node:fs/promises';
import path from 'node:path';

/**
 * Creates the machine name from a human-readable name.
 * @param {string} name - The human-readable name
 * @return {string} - The machine name
 */
function machineName(name) {
  return name
    .split(/[\s-_]/)
    .map(piece => `${piece.charAt(0).toUpperCase()}${piece.slice(1)}`)
    .join('');
}

/**
 * Creates a human name from a machine name.
 * @param {string} name - The machine name
 * @return {string} - The human-readable name
 */
function humanName(name) {
  const words = name
    .split(/[\s-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return words.join(' ');
}

/**
 * Creates the cascade layer name from the directory name.
 * @param {string} directoryName - The directory name
 * @return {string}
 */
function cascadeLayer(directoryName) {
  const parts = directoryName.split('-');
  return parts[parts.length - 1];
}

/**
 * Checks whether the source directory is an accessible directory.
 * @param {node:fs.PathLike} source - Source path
 * @return {Promise<boolean>} - True if source is an accessible directory
 */
async function isDirectory(source) {
  const stats = await lstat(source);
  return stats.isDirectory();
}

/**
 * Get available component directories.
 * @param {node:fs.PathLike} source - Source path
 * @return {Promise<string[]>} - Array of component directory paths
 */
async function getDirectories(source) {
  /** @type {string[]} */
  const directoryFiles = await readdir(source);
  /** @type {string[]} */
  const directoryPaths = directoryFiles
    .filter(
      dirName => !['00-config', '05-pages', '06-utility'].includes(dirName),
    )
    .map(name => path.join(source, name));
  /** @type {Awaited<boolean>[]} */
  const isDirectoryResults = await Promise.all(directoryPaths.map(isDirectory));
  return directoryPaths.filter((value, index) => isDirectoryResults[index]);
}

/**
 * Get the machine name from user input.
 * @return {Promise<string>} - Machine name of new component
 */
async function getMachineName() {
  const questions = [
    {
      type: 'input',
      name: 'componentName',
      message: 'What is the name of your component?',
      filter: machineName,
    },
  ];
  const { componentName } = await inquirer.prompt(questions);
  return componentName.trim();
}

async function generator(plop) {
  const patternSrc = path.join(process.cwd(), 'source');
  const patternDir = await getDirectories(patternSrc);

  plop.setHelper('machineName', text => machineName(text));
  plop.setHelper('humanName', text => humanName(text));
  plop.setHelper('cascadeLayer', text => cascadeLayer(text));

  plop.setPartial('propsName', '{{ componentName }}Props');
  plop.setPartial('componentAlias', '{{ componentName }}Component');

  plop.setGenerator('component', {
    description: 'Create a new React component',
    prompts: async inquirer => {
      let { componentName } = await inquirer.prompt({
        type: 'input',
        name: 'componentName',
        message: 'What is the name of your component?',
        filter: machineName,
      });
      componentName = componentName.trim();
      const defaultComponentTitle = plop.renderString(
        '{{ humanName (kebabCase componentName) }}',
        { componentName },
      );
      const detailedQuestions = [
        {
          type: 'input',
          name: 'componentTitle',
          message: 'What is the human-readable title of your component?',
          default: defaultComponentTitle,
        },
        {
          type: 'list',
          name: 'componentFolder',
          message: 'Component Location',
          choices: patternDir.map(item => path.basename(item)),
        },
        {
          type: 'input',
          name: 'componentFolderSub',
          message: 'Include subfolder or leave blank',
        },
        {
          type: 'confirm',
          name: 'useStorybook',
          message: 'Create a Storybook story?',
          default: true,
        },
      ];
      const {
        componentTitle,
        componentFolder,
        componentFolderSub,
        useStorybook,
      } = await inquirer.prompt(detailedQuestions);
      const componentLocation = path.join(
        componentFolder,
        machineName(componentFolderSub),
      );

      // These are the variables that can be used in the handlebars templates.
      const answers = {
        componentName,
        componentTitle,
        componentFolder,
        componentLocation,
        useStorybook,
      };

      const output = `---
Component Name: {{ machineName componentName }}
Component Title: {{ componentTitle }}
Component Location: {{ componentLocation }}
Include Story?: {{ useStorybook }}
---
`;
      console.log(plop.renderString(output, answers));
      const { confirm } = await inquirer.prompt({
        type: 'confirm',
        name: 'confirm',
        message: 'Is this what you want?',
      });
      // Resolve successfully even if the user didn't confirm.
      // We need to throw the error in the *action* in order to get
      // a sensible display.
      return Promise.resolve({
        ...answers,
        confirm,
      });
    },
    actions: data => {
      const actions = [];
      if (!data.confirm) {
        actions.push(() => {
          throw new Error('Component canceled');
        });
      }
      actions.push({
        type: 'add',
        path: './source/{{ componentLocation }}/{{ componentName }}/{{ componentName }}.tsx',
        templateFile: './lib/plop-templates/Component.hbs',
      });
      actions.push({
        type: 'add',
        path: './source/{{ componentLocation }}/{{ componentName }}/{{ kebabCase componentName }}.module.css',
        templateFile: './lib/plop-templates/Stylesheet.hbs',
      });
      if (data.useStorybook) {
        actions.push({
          type: 'add',
          path: './source/{{ componentLocation }}/{{ componentName }}/{{ kebabCase componentName }}.yml',
          templateFile: './lib/plop-templates/Data.hbs',
        });
        actions.push({
          type: 'add',
          path: './source/{{ componentLocation }}/{{ componentName }}/{{ componentName }}.stories.tsx',
          templateFile: './lib/plop-templates/Story.hbs',
        });
      }
      return actions;
    },
  });
}

export default generator;
