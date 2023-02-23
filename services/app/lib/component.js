/* eslint-env node */
/* eslint-disable no-console, @typescript-eslint/no-var-requires */

const fs = require('fs');
const { writeFile, lstat, readdir } = require('fs/promises');
const inquirer = require('inquirer');
const mkdirp = require('mkdirp');
const path = require('path');

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

function makeEmotionFile(componentName, location) {
  const fileName = 'Footer.tsx';
  const filePath = path.join(location, fileName);
  const fileContent = `import styled from '@emotion/styled;'

const ${componentName} = styled('div')\`\`;

export default ${componentName};
`;
  return writeFile(filePath, fileContent, err =>
    err ? console.error(err) : null,
  );
}

function makeReactFile(componentName, location) {
  const fileName = 'Footer.tsx';
  const filePath = path.join(location, fileName);
  const fileContent = `function ${componentName}(): JSX.Element {
  return <div />;
}

export default ${componentName};
`;
  return writeFile(filePath, fileContent, err =>
    err ? console.error(err) : null,
  );
}

function makeStorybookFile(componentName, componentTitle, location, directory) {
  const fileName = 'index.stories.tsx';
  const filePath = path.join(location, fileName);
  const fileContent = `import { Meta, Story } from '@storybook/react';
import ${componentName} from '.';

const settings: Meta = {
  title: '${machineName(directory)}/${componentTitle}',
  component: ${componentName},
};

const Template: Story = args => <${componentName} {...args} />;
const _${componentName} = Template.bind({});

export default settings;
export { _${componentName} as ${componentName} };
`;
  return writeFile(filePath, fileContent, err =>
    err ? console.error(err) : null,
  );
}

/**
 * Checks whether the source directory is an accessible directory.
 * @param {string} source - Source path
 * @return {Promise<boolean>} - True if source is an accessible directory
 */
const isDirectory = async source => {
  const stats = await lstat(source);
  return stats.isDirectory();
};

/**
 * Get available component directories.
 * @param {string} source - Source path
 * @return {Promise<T[]>} - Array of component directory paths
 */
const getDirectories = async source => {
  const directoryFiles = await readdir(source);
  const directoryPaths = directoryFiles.map(name => path.join(source, name));
  const isDirectoryResults = await Promise.all(directoryPaths.map(isDirectory));
  return directoryPaths.filter((value, index) => isDirectoryResults[index]);
};

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

/**
 * Get additional details about the component from user input.
 * @param {string} componentName - The machine name of the component
 * @param {string[]} patternDir - Array of available directories
 * @return {Promise<*>} - User responses
 */
async function getComponentDetails(componentName, patternDir) {
  const defaultComponentTitle = humanName(componentName);
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
      name: 'useEmotion',
      message: 'Create an Emotion styled component?',
      default: false,
    },
    {
      type: 'confirm',
      name: 'useStorybook',
      message: 'Create a Storybook story?',
      default: true,
    },
  ];
  return inquirer.prompt(detailedQuestions);
}

/**
 * Create all files for a new component.
 * @param {string} componentName - Component machine name
 * @param {string} componentTitle - Component human-readable name
 * @param {string} location - Directory path for new component
 * @param {string} directory - Name of the directory
 * @param {boolean} useEmotion - Whether to create an Emotion component
 * @param {boolean} useStorybook - Whether to create a Storybook story
 * @return {Promise<void>}
 */
async function createComponent(
  componentName,
  componentTitle,
  location,
  directory,
  useEmotion,
  useStorybook,
) {
  if (fs.existsSync(location)) {
    console.log('Component directory already exists');
  } else {
    try {
      await mkdirp(location);
    } catch (err) {
      console.error(err);
    }

    const filesArray = [];
    if (useEmotion) {
      filesArray.push(makeEmotionFile(componentName, location));
    } else {
      filesArray.push(makeReactFile(componentName, location));
    }
    if (useStorybook) {
      filesArray.push(
        makeStorybookFile(componentName, componentTitle, location, directory),
      );
    }
    const success = await Promise.all(filesArray);
    if (success) {
      console.log(`${componentTitle} created`);
    }
  }
}

/**
 * Initialize a new component
 * @return {Promise<void>}
 */
async function init() {
  const patternSrc = path.join(process.cwd(), 'source');
  const patternDir = await getDirectories(patternSrc);
  const componentName = await getMachineName();
  const {
    componentTitle,
    componentFolder,
    componentFolderSub,
    useEmotion,
    useStorybook,
  } = await getComponentDetails(componentName, patternDir);
  const componentLocation = path.join(
    patternSrc,
    componentFolder,
    machineName(componentFolderSub),
    machineName(componentName),
  );
  const output = `---
Component Name: ${componentName}
Component Title: ${componentTitle}
Component Location: ${componentLocation}
Component Type: ${useEmotion ? 'Emotion' : 'React'}
Include Story?: ${useStorybook ? 'Yes' : 'No'}
`;
  console.log(output);
  const confirmQuestion = [
    {
      type: 'confirm',
      name: 'confirm',
      message: 'Is this what you want?',
    },
  ];
  const { confirm } = await inquirer.prompt(confirmQuestion);
  if (confirm) {
    await createComponent(
      componentName,
      componentTitle,
      componentLocation,
      componentFolder,
      useEmotion,
      useStorybook,
    );
  } else {
    console.log('Component cancelled');
  }
}

init().catch(err => {
  console.error(err);
});
