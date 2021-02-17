import { ITypeStyle } from './ITypeScale';

export const createFont: (
  defaultStyles: Partial<ITypeStyle>,
  customStyles: Partial<ITypeStyle>,
) => Partial<ITypeStyle> = (defaultStyles, customStyles) => ({
  ...defaultStyles,
  ...customStyles,
});
