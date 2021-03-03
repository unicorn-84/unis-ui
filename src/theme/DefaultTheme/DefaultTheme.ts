import { defaultPalette } from './defaultPalette';
import { defaultEffects } from './defaultEffects';
import { defaultSpacing } from './defaultSpacing';
import { ITheme } from '../types';
import { defaultTypeScale } from './defaultTypeScale';
import { defaultBreakpoints } from './defaultBreakpoints';

export const DefaultTheme: ITheme = {
  name: 'DefaultTheme',
  palette: defaultPalette,
  effects: defaultEffects,
  typography: defaultTypeScale,
  spacing: defaultSpacing,
  breakpoints: defaultBreakpoints,
};
