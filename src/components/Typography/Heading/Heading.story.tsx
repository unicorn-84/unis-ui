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
          summary: 'h1 | h2 | h3 | h4 | h5 | h6',
        },
        defaultValue: {
          summary: 'h1',
        },
      },
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      },
    },
    variant: {
      description: 'Applies the theme typography styles.',
      table: {
        type: {
          summary: 'title | h2 | h3 | h4 | subtitle',
        },
        defaultValue: {
          summary: 'title',
        },
      },
      control: {
        type: 'select',
        options: ['title', 'h2', 'h3', 'h4', 'subtitle'],
      },
    },
    color: {
      description: 'The color of the component.',
      table: {
        type: {
          summary:
            'brandPrimary | brandSecondary | textPrimary | textSecondary | textDark | textLight | textGray',
        },
      },
      control: {
        type: 'select',
        options: [
          'brandPrimary',
          'brandSecondary',
          'textPrimary',
          'textSecondary',
          'textDark',
          'textLight',
          'textGray',
        ],
      },
    },
    marked: {
      description: 'Defines text that should be marked or highlighted.',
      table: {
        type: {
          summary:
            'brandPrimary | brandSecondary | fonDark | fonLight | fonGray',
        },
      },
      control: {
        type: 'select',
        options: [
          'brandPrimary',
          'brandSecondary',
          'fonDark',
          'fonLight',
          'fonGray',
        ],
      },
    },
    disableMargins: {
      description: "If 'true', the margins is removed.",
      table: {
        type: {
          summary: 'true | false',
        },
        defaultValue: {
          summary: false,
        },
      },
      control: {
        type: 'boolean',
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

Heading.args = {};
