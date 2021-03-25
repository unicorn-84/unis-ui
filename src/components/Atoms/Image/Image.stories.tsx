import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import ImageComponent, { ImageProps } from '.';
//TODO: Оставить одну историю.

export default {
  title: 'Design System/Atoms/Image',
  parameters: {
    docs: {
      description: {
        component: 'An image.',
      },
    },
  },
  argTypes: {
    src: {
      description:
        'The HTML "src" attribute, specifies the image to display in the <img> element.',
      table: {
        type: {
          summary: 'string',
        },
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

export const Simple = Template.bind({});

Simple.args = {
  src:
    'https://res.cloudinary.com/unicorn84/image/upload/c_scale,q_auto,w_800/v1591287502/lamp.webp',
  alt: 'The lamp.',
};

export const Placeholder = Template.bind({});

Placeholder.args = {
  src: 'bad uri',
  alt: 'The lamp.',
  placeholder:
    'https://res.cloudinary.com/unicorn84/image/upload/c_scale,e_blur:2000,q_auto:low,w_800/v1591287502/lamp.webp',
};
