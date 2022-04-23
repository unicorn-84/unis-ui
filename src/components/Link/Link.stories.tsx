import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LinkComponent from './Link';

export default {
  title: 'Link',
  component: LinkComponent,
} as ComponentMeta<typeof LinkComponent>;

const Template: ComponentStory<typeof LinkComponent> = (args) => (
  <LinkComponent {...args}>Link</LinkComponent>
);

export const Link = Template.bind({});
