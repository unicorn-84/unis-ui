import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputTextComponent from '.';

export default {
  title: 'InputText',
  component: InputTextComponent,
} as ComponentMeta<typeof InputTextComponent>;

const Template: ComponentStory<typeof InputTextComponent> = (args) => (
  <InputTextComponent {...args} className="max-w-xs" />
);

export const InputText = Template.bind({});
