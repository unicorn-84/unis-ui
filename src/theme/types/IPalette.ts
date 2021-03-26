/**
 * Color palette.
 */
export interface IPalette {
  /**
   * Code for Brand colors.
   */
  brand: {
    primary: string;
    secondary: string;
  };
  /**
   * Code for Text colors.
   */
  text: {
    primary: string;
    secondary: string;
    light: string;
    gray: string;
  };
  /**
   * Code for dark color.
   */
  dark: string;
  /**
   * Code for light color.
   */
  light: string;
  /**
   * Code for gray color.
   */
  gray: string;
  /**
   * Code for Fon colors.
   */
  fon: {
    dark: string;
    light: string;
    gray: string;
  };
}
