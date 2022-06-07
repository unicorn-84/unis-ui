import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonBaseComponent from '../ButtonBase';

export default {
  title: 'ButtonBase',
  component: ButtonBaseComponent,
} as ComponentMeta<typeof ButtonBase>;

const Template: ComponentStory<typeof ButtonBaseComponent> = (args) => (
  <ButtonBaseComponent {...args}>Button</ButtonBaseComponent>
);

export const ButtonBase = Template.bind({});
