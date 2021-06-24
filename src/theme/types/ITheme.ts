import { IEffects } from './IEffects';
import { IPalette } from './IPalette';
import { SizeNames, SpacingNames } from './Spacing';
import { ITypeScale } from './ITypeScale';
import { IBreakpoints } from './IBreakpoints';

export interface ITheme {
  name: string;
  palette: IPalette;
  typography: ITypeScale;
  effects: IEffects;
  spacing: Map<SpacingNames, string>;
  sizing: Map<SizeNames, string>;
  breakpoints: IBreakpoints;
  // components?: Partial<IComponents>;
}
