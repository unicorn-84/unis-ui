import { IPalette } from '.';

export interface ITextStyles {
  /**
   * The color of the component.
   */
  color?: keyof IPalette;
  /**
   * Defines text that should be marked or highlighted.
   */
  marked?: keyof IPalette;
}
