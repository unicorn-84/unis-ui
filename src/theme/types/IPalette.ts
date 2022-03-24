export type ColorName =
  | 'brandPrimary'
  | 'brandSecondary'
  | 'textPrimary'
  | 'textSecondary'
  | 'textLight'
  | 'textDark'
  | 'textGray'
  | 'dark'
  | 'light'
  | 'gray'
  | 'info'
  | 'fonLight'
  | 'fonDark'
  | 'fonGray';

export type IPalette = {
  [key in ColorName]: string;
};
