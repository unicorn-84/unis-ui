import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import BarComponent, { BarProps } from '.';

export default {
  title: 'Design System/Organisms/Header',
} as Meta;

export const Header: Story<BarProps> = args => (
  <BarComponent {...args}>Header</BarComponent>
);

Header.args = {};
