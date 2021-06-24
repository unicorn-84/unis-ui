import { SpacingNames, SizeNames } from '../types/index';

export const defaultSpacing = new Map<SpacingNames, string>([
  ['none', '0px'],
  ['xxsmall', '6px'],
  ['xsmall', '12px'],
  ['small', '26px'],
  ['medium', '52px'],
  ['large', '78px'],
  ['xlarge', '104px'],
]);

export const defaultSizing = new Map<SizeNames, string>([
  ['auto', 'auto'],
  ['full', '100%'],
  ['1/2', '50%'],
  ['1/3', '33,33%'],
  ['1/4', '25%'],
  ['2/4', '50%'],
  ['3/4', '75%'],
  ['2/3', '66,66%'],
]);
