// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="declarations.d.ts"/>
import PolyphonicTheremin from './polyphonic-theremin';
import type {
  // Workaround because TypeScript currently can't re-export types via "export * from '...'"
  PolyphonicThereminOptions as IPolyphonicThereminOptions,
  ToneOptions as IToneOptions,
} from './polyphonic-theremin';

export * from './polyphonic-theremin';
export default PolyphonicTheremin;

export type PolyphonicThereminOptions = IPolyphonicThereminOptions;
export type ToneOptions = IToneOptions;
