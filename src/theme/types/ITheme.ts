import { IEffects } from './IEffects';
import { IPalette } from './IPalette';
import { ISpacing } from './ISpacing';
import { ITypeScale } from './ITypeScale';
import { IBreakpoints } from './IBreakpoints';

export interface ITheme {
  name: string;
  palette: IPalette;
  typography: ITypeScale;
  effects: IEffects;
  spacing: ISpacing;
  breakpoints: IBreakpoints;
  // components?: Partial<IComponents>;
}
