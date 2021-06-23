import { ColorNames, IPalette } from '../types';
/**
 * Default palette.
 */
export const defaultPalette: IPalette = {
  brand: { primary: '#3d0240', secondary: '#137083' },
  text: {
    primary: '#0a0a0a',
    secondary: '#111',
    light: '#fff',
    gray: '#b7b7b7',
  },
  dark: '#0a0a0a',
  light: '#fff',
  gray: 'b7b7b7',
  fon: { dark: '#0a0a0a', light: '#fff', gray: '#b7b7b7' },
};

export const Colors: Record<ColorNames, string> = {
  brandPrimary: defaultPalette.brand.primary,
  brandSecondary: defaultPalette.brand.secondary,
  textPrimary: defaultPalette.text.primary,
  textSecondary: defaultPalette.text.secondary,
  textDark: defaultPalette.text.primary,
  textLight: defaultPalette.text.light,
  textGray: defaultPalette.text.gray,
  dark: defaultPalette.dark,
  light: defaultPalette.light,
  gray: defaultPalette.gray,
  fonDark: defaultPalette.fon.dark,
  fonLight: defaultPalette.fon.light,
  fonGray: defaultPalette.fon.gray,
};
