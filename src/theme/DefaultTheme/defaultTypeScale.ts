import { ITypeScale, ITypeStyle } from '../types';
import { createFont } from '../types/createFont';

const defaultFontFamily: string = 'Montserrat, sans-serif';

const defaultStyles: Partial<ITypeStyle> = {
  fontFamily: defaultFontFamily,
};

export const defaultTypeScale: Partial<ITypeScale> = {
  title: createFont(defaultStyles, {
    fontSize: '50px',
    fontWeight: 700,
    lineHeight: '52px',
    marginTop: '78px',
    marginBottom: '26px',
  }),
  h2: createFont(defaultStyles, {
    fontSize: '40px',
    fontWeight: 700,
    lineHeight: '39px',
    marginTop: '52px',
    marginBottom: '26px',
  }),
  h3: createFont(defaultStyles, {
    fontSize: '32px',
    fontWeight: 700,
    lineHeight: '39px',
    marginTop: '52px',
    marginBottom: '0px',
  }),
  h4: createFont(defaultStyles, {
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: '26px',
    marginTop: '26px',
    marginBottom: '0px',
  }),
  subtitle: createFont(defaultStyles, {
    fontSize: '26px',
    fontWeight: 500,
    lineHeight: '26px',
    marginTop: '26px',
    marginBottom: '0px',
  }),
};
