import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import ParagraphComponent, { ParagraphProps } from '.';

export default {
  title: 'Design System/Atoms/Paragraph',
  parameters: {
    docs: {
      description: {
        component: 'A paragraph of text.',
      },
    },
  },
  argTypes: {
    variant: {
      description: 'Applies the theme typography styles.',
      table: {
        type: {
          summary: 'body',
        },
        defaultValue: {
          summary: 'body',
        },
      },
      control: {
        type: 'select',
        options: ['body'],
      },
    },
  },
} as Meta;

const Template: Story<ParagraphProps> = args => (
  <ParagraphComponent {...args}>
    Звёздная ночь освещает наши сны.
  </ParagraphComponent>
);

export const Paragraph = Template.bind({});
