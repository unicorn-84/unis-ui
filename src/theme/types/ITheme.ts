import { IEffects } from './IEffects';
import { IPalette } from './IPalette';
import { ISpacing } from './ISpacing';
import { ITypeScale } from './ITypeScale';
import { IBreakpoints } from './IBreakpoints';

export interface ITheme {
  name: string;
  palette?: Partial<IPalette>;
  typography?: Partial<ITypeScale>;
  effects?: Partial<IEffects>;
  spacing?: Partial<ISpacing>;
  breakpoints?: IBreakpoints;
  // components?: Partial<IComponents>;
}
