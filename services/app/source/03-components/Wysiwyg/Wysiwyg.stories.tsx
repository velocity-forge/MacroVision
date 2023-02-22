import { ComponentStory } from '@storybook/react';
import Wysiwyg from './Wysiwyg';

const settings = {
  title: 'Components/WYSIWYG',
  component: Wysiwyg,
};

const Template: ComponentStory<typeof Wysiwyg> = args => <Wysiwyg {...args} />;
const _WYSIWYG = Template.bind({});
_WYSIWYG.args = {
  children: (
    <>
      <p>
        This is WYSIWYG content, which can contain{' '}
        <abbr title="Hyper Text Markup Language">HTML</abbr> markup. There is no
        limit to how long this content can be. it could have both{' '}
        <a href="#0">internal</a> and <a href="https://example.com">external</a>{' '}
        links.
      </p>
      <h2>Heading Level 2</h2>
      <p>
        A paragraph (from the Greek paragraphos, “to write beside” or “written
        beside”) is a self-contained unit of a discourse in writing dealing with
        a particular point or idea. A paragraph consists of one or more
        sentences. Though not required by the syntax of any language, paragraphs
        are usually an expected part of formal writing, used to organize longer
        prose.
      </p>
      <p>
        This is what a successive paragraph looks like. Some people prefer a
        space between paragraphs, while others prefer successive paragraphs
        indented with no margins between them.
      </p>
      <h3>Heading Level 3</h3>
      <ul>
        <li>This is a list item in an unordered list</li>
        <li>
          An unordered list is a list in which the sequence of items is not
          important. Sometimes, an unordered list is a bulleted list. And this
          is a long list item in an unordered list that can wrap onto a new
          line.{' '}
        </li>
        <li>
          Lists can be nested inside of each other
          <ul>
            <li>This is a nested list item</li>
            <li>This is another nested list item in an unordered list</li>
          </ul>
        </li>
        <li>This is the last list item</li>
      </ul>
      <h4>Heading Level 4</h4>
      <p>
        A paragraph (from the Greek paragraphos, “to write beside” or “written
        beside”) is a self-contained unit of a discourse in writing dealing with
        a particular point or idea. A paragraph consists of one or more
        sentences. Though not required by the syntax of any language, paragraphs
        are usually an expected part of formal writing, used to organize longer
        prose.
      </p>
      <blockquote>
        <p>
          A block quotation (also known as a long quotation or extract) is a
          quotation in a written document, that is set off from the main text as
          a paragraph, or block of text, and typically distinguished visually
          using indentation and a different typeface or smaller size quotation.
        </p>
        <cite>Jane Doe, President and CEO</cite>
      </blockquote>
      <p>
        A paragraph (from the Greek paragraphos, “to write beside” or “written
        beside”) is a self-contained unit of a discourse in writing dealing with
        a particular point or idea. A paragraph consists of one or more
        sentences. Though not required by the syntax of any language, paragraphs
        are usually an expected part of formal writing, used to organize longer
        prose.
      </p>
      <h5>Heading Level 5</h5>
      <ol>
        <li>This is a list item in an ordered list</li>
        <li>
          An ordered list is a list in which the sequence of items is important.
          An ordered list does not necessarily contain sequence characters.
        </li>
        <li>
          Lists can be nested inside of each other
          <ol>
            <li>This is a nested list item</li>
            <li>This is another nested list item in an ordered list</li>
          </ol>
        </li>
        <li>This is the last list item</li>
      </ol>
      <h6>Heading Level 6</h6>
      <p>
        A paragraph (from the Greek paragraphos, “to write beside” or “written
        beside”) is a self-contained unit of a discourse in writing dealing with
        a particular point or idea. A paragraph consists of one or more
        sentences. Though not required by the syntax of any language, paragraphs
        are usually an expected part of formal writing, used to organize longer
        prose.
      </p>
      <table>
        <caption>Table caption</caption>
        <thead>
          <tr>
            <th>Table Heading A</th>
            <th>Table Heading B</th>
            <th>Table Heading C</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Table Cell A1</td>
            <td>Table Cell B1</td>
            <td>Table Cell C1</td>
          </tr>
          <tr>
            <td>Table Cell A2</td>
            <td>Table Cell B2</td>
            <td>Table Cell C2</td>
          </tr>
          <tr>
            <td>Table Cell A3</td>
            <td>Table Cell B3</td>
            <td>Table Cell C3</td>
          </tr>
          <tr>
            <td>Table Cell A4</td>
            <td>Table Cell B4</td>
            <td>Table Cell C4</td>
          </tr>
        </tbody>
      </table>
      <p>
        A paragraph (from the Greek paragraphos, “to write beside” or “written
        beside”) is a self-contained unit of a discourse in writing dealing with
        a particular point or idea. A paragraph consists of one or more
        sentences. Though not required by the syntax of any language, paragraphs
        are usually an expected part of formal writing, used to organize longer
        prose.
      </p>
    </>
  ),
};

export default settings;
export { _WYSIWYG };
