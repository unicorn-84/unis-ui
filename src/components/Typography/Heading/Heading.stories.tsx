import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import HeadingComponent, { HeadingProps } from '.';

export default {
  title: 'Design System/Typography/Heading',
  parameters: {
    docs: {
      description: {
        component: 'Heading text.',
      },
    },
  },
  argTypes: {
    level: {
      description: 'The heading level.',
      table: {
        type: {
          summary: 'h1 | h2 | h3 | h4',
        },
      },
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4'],
      },
    },
    variant: {
      description: 'Applies the theme typography styles.',
      table: {
        type: {
          summary: 'title | h2 | h3 | h4 | subtitle',
        },
      },
      control: {
        type: 'select',
        options: ['title', 'h2', 'h3', 'h4', 'subtitle'],
      },
    },
  },
} as Meta;

const Template: Story<HeadingProps> = args => (
  <HeadingComponent {...args}>
    Звёздная ночь освещает наши сны.
  </HeadingComponent>
);

export const Heading = Template.bind({});

Heading.args = {
  level: 'h1',
  variant: 'title',
};
