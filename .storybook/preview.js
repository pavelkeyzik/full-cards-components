import { themes } from '@storybook/theming';
import '../src/styles/index.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: themes.dark,
    light: themes.normal,
  },
};

export const decorators = [(Story) => <Story />];
