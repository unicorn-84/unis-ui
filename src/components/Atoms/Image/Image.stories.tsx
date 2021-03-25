import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import ImageComponent, { ImageProps } from '.';

export default {
  title: 'Design System/Atoms/Image',
  parameters: {
    docs: {
      description: {
        component: 'An image.',
      },
    },
  },
  args: {
    src:
      'https://res.cloudinary.com/unicorn84/image/upload/c_scale,q_auto,w_800/v1591287502/lamp.webp',
    alt: 'The lamp',
    placeholder:
      'https://res.cloudinary.com/unicorn84/image/upload/c_scale,e_blur:2000,q_auto:low,w_800/v1591287502/lamp.webp',
  },
  argTypes: {
    src: {
      table: {
        disable: true,
      },
    },
    alt: {
      table: {
        disable: true,
      },
    },
    placeholder: {
      description: 'The placeholder.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
} as Meta;

const Template: Story<ImageProps> = args => <ImageComponent {...args} />;

export const Image = Template.bind({});

Image.args = {};
