import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputComponent from './Input';

export default {
  title: 'Input',
  component: InputComponent,
} as ComponentMeta<typeof InputComponent>;

const Template: ComponentStory<typeof InputComponent> = (args) => (
  <InputComponent {...args}>Link</InputComponent>
);

export const Input = Template.bind({});
