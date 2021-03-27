import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import ButtonComponent, { ButtonProps } from '.';

export default {
  title: 'Design System/Atoms/Button',
  parameters: {
    docs: {
      description: {
        component: 'A button.',
      },
    },
  },
  args: {},
  argTypes: {
    color: {
      description: 'Fill color or border color.',
      table: {
        type: {
          summary: 'primary | secondary',
        },
        defaultValue: {
          summary: 'primary',
        },
      },
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
    disabled: {
      description: 'If `true`, the component is disabled.',
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
    fullWidth: {
      description:
        'If `true`, the button will take up the full width of its container.',
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
    variant: {
      description: 'The variant to use.',
      table: {
        type: {
          summary: 'text | outlined | contained',
        },
        defaultValue: {
          summary: 'contained',
        },
      },
      control: {
        type: 'select',
        options: ['text', 'outlined', 'contained'],
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = args => (
  <ButtonComponent {...args}>Button</ButtonComponent>
);

export const Button = Template.bind({});

Button.args = {};
