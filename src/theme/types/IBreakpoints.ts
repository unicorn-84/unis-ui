export type BreakpointName = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Breakpoints.
 */
export type IBreakpoints = {
  [key in BreakpointName]: string;
};
