import { IEffects } from './IEffects';
import { IPalette } from './IPalette';
import { ISpacing } from './ISpacing';
import { ITypeScale } from './ITypeScale';
import { IBreakpoints } from './IBreakpoints';
import { ISizing } from './ISizing';

export interface ITheme {
  name: string;
  palette: IPalette;
  typography: ITypeScale;
  effects: IEffects;
  spacing: ISpacing;
  sizing: ISizing;
  breakpoints: IBreakpoints;
  // components?: Partial<IComponents>;
}
