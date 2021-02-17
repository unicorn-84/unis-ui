/**
 * font-weight.
 */
export type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

/**
 * line-height.
 */
export type LineHeight = string | number;

/**
 * font-style.
 */
export type FontStyle = 'normal' | 'italic' | 'oblique';

/**
 * text-transform
 */
export type TextTransform =
  | 'uppercase'
  | 'lowercase'
  | 'capitalize'
  | 'full-width';

/**
 * white-space
 */
export type WhiteSpace =
  | 'normal'
  | 'nowrap'
  | 'pre'
  | 'pre-wrap'
  | 'pre-line'
  | 'break-spaces';

/**
 * text-overflow
 */
export type TextOverflow = '' | 'clip' | 'ellipsis' | '-';

/**
 * oveflow
 */
export type Overflow = 'visible' | 'hidden' | 'scroll' | 'auto';

/**
 * The type style.
 */
export interface ITypeStyle {
  /**
   * One or more font family names.
   */
  fontFamily: string;
  /**
   * Specifies the size of the font.
   */
  fontSize: string;
  /**
   * The font-style property allows normal, italic, or oblique faces to be selected.
   */
  fontStyle: FontStyle;
  /**
   * Specifies the weight or boldness of the font.
   */
  fontWeight: FontWeight;
  /**
   * The height of a line box.
   */
  lineHeight: LineHeight;
  /**
   * The margin area on the top of an element.
   */
  marginTop: string;
  /**
   * The margin area on the bottom of an element.
   */
  marginBottom: string;
  /**
   * Specifies how to capitalize an element's text.
   */
  textTransform: TextTransform;
  /**
   * Sets how white space inside an element is handled.
   */
  whiteSpace: WhiteSpace;
  /**
   * Sets how hidden overflow content is signaled to users.
   */
  textOverflow: TextOverflow;
  /**
   * Sets the desired behavior for an element's overflow.
   */
  overflow: Overflow;
}

/**
 * The type system.
 */
export interface ITypeScale {
  /**
   * Heading level 1.
   */
  title: Partial<ITypeStyle>;
  /**
   * Heading level 2.
   */
  h2: Partial<ITypeStyle>;
  /**
   * Heading level 3.
   */
  h3: Partial<ITypeStyle>;
  /**
   * Heading level 4.
   */
  h4: Partial<ITypeStyle>;
  /**
   * Heading level 5.
   */
  subtitle: Partial<ITypeStyle>;
  /**
   * Arbitrary text.
   */
  body: Partial<ITypeStyle>;
  /**
   * Strong arbitrary text.
   */
  strong: Partial<ITypeStyle>;
  /**
   * Small arbitrary text.
   */
  small: Partial<ITypeStyle>;
  /**
   * Button text.
   */
  button: Partial<ITypeStyle>;
}
