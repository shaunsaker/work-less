import { configure, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import StoryRouter from 'storybook-react-router';

addDecorator(StoryRouter());
addDecorator(withA11y);

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.tsx$/), module);
