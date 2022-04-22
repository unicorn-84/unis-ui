import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonComponent from './Button';

export default {
  title: 'Button',
  component: ButtonComponent,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args}>Button</ButtonComponent>
);

export const Button = Template.bind({});
