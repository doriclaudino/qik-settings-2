import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { addReadme } from 'storybook-readme';
/*
This is a package to make Story panel load and decode all files stories
Also, because of some internal usage, we cannot use the default babel config (for the library)
with this package.

In order to solve that, it's necessary a custom/simple .babelrc inside .storybook/ folder
*/
import requireContext from 'require-context.macro';

/* Add A11y panel */
addDecorator(withA11y);

/* Enable README for all stories */
addDecorator(addReadme);

/* General options for storybook */
addParameters({
  /* Options for storybook-readme plugin */
  readme: {
    codeTheme: 'github',
    StoryPreview: ({ children }) => children,
  },
});

/* automatically import all files ending in *.stories.js inside src folder */
const req = requireContext('../src', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
