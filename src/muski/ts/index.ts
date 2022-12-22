import 'pepjs';
import PolyphonicTheremin, {
  PolyphonicThereminOptions,
  ToneOptions,
} from '../../lib/ts';

function migrateDataAttribute<T>(
  o: Record<string, unknown>,
  key: string,
  e: HTMLElement,
  coerce: (s: string) => T,
) {
  const attributeValue = e.dataset[key];
  if (typeof attributeValue !== 'undefined') {
    // eslint-disable-next-line no-param-reassign
    o[key] = coerce(attributeValue);
  }
}

function initMuskiThereminComponent(e: HTMLElement) {
  const m = migrateDataAttribute;

  const o: Partial<PolyphonicThereminOptions> = {};
  m(o, 'touchElementCssClasses', e, (s: string) => s.split(' '));
  m(o, 'touchElementStyle', e, (s: string) => s);

  const to: Partial<ToneOptions> = {};
  m(to, 'waveType', e, (s: string) => s);
  m(to, 'gainMin', e, Number.parseFloat);
  m(to, 'gainMax', e, Number.parseFloat);
  m(to, 'frequencyMinHz', e, Number.parseFloat);
  m(to, 'frequencyMaxHz', e, Number.parseFloat);
  m(to, 'attackMs', e, Number.parseFloat);
  m(to, 'releaseMs', e, Number.parseFloat);
  m(to, 'updateMs', e, Number.parseFloat);
  m(to, 'mute', e, (s: string) => true);

  const polyphonicTheremin = new PolyphonicTheremin(e, o, to);
}

document
  .querySelectorAll<HTMLElement>('*[data-component="muski-theremin"]')
  .forEach(initMuskiThereminComponent);
