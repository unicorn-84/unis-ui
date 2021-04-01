import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Box, { BoxProps } from '.';
import Button from '../Button';

export default {
  title: 'Design System/Atoms/Box',
  parameters: {
    docs: {
      description: {
        component:
          'A container that lays out its contents in one direction. Box provides CSS flexbox capabilities for layout.',
      },
    },
  },
  args: {},
  argTypes: {
    margin: {
      description:
        'The amount of margin around the component. An object can be specified to distinguish horizontal margin, vertical margin, and margin on a particular side.',
      table: {
        type: {
          summary: 'string | object',
        },
      },
      control: 'disable',
    },
  },
} as Meta;

const Template: Story<BoxProps> = args => (
  <Box {...args}>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </Box>
);

export const Default = Template.bind({});
export const Margin: Story<BoxProps> = args => (
  <>
    <Box margin="small">
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Box>
    <Box margin={{ top: 'large' }}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Box>
    <Box margin={{ x: 'medium', y: 'large' }}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Box>
  </>
);

Default.args = {};
Margin.args = {};
