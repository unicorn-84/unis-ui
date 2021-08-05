import { ColorName } from './IPalette';

export interface ITextStyles {
  /**
   * The color of the component.
   */
  color?: ColorName;
  /**
   * Defines text that should be marked or highlighted.
   */
  marked?: ColorName;
}
