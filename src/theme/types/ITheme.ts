import { IEffects } from './IEffects';
import { IPalette } from './IPalette';
import { ISpacing } from './ISpacing';
import { ITypeScale } from './ITypeScale';

export interface ITheme {
  name: string;
  palette?: Partial<IPalette>;
  typography?: Partial<ITypeScale>;
  effects?: Partial<IEffects>;
  spacing?: Partial<ISpacing>;
  // components?: Partial<IComponents>;
}
