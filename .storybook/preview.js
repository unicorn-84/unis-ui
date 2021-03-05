import { GlobalStyle } from '../src/shared/global';

export const decorators = [
  Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  controls: { expanded: true },
};
