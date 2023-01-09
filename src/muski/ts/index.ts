import 'pepjs';
import { strict as assert } from 'assert';
import PolyphonicTheremin, {
  PolyphonicThereminOptions,
  ToneOptions,
  defaultOptions as defaultThereminOptions,
  defaultToneOptions,
} from '../../lib/ts';
import { camelCaseToDashCase, dashCaseToCamelCase } from './util';

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

const thereminAttrCoercionMap = new Map<string, (s: string) => unknown>();
thereminAttrCoercionMap.set('touchElementCssClasses', (s: string) =>
  s.split(' '),
);
thereminAttrCoercionMap.set('touchElementStyle', (s: string) => s);

const toneAttrCoercionMap = new Map<string, (s: string) => unknown>();
toneAttrCoercionMap.set('waveType', (s: string) => s);
toneAttrCoercionMap.set('gainMin', Number.parseFloat);
toneAttrCoercionMap.set('gainMax', Number.parseFloat);
toneAttrCoercionMap.set('frequencyMinHz', Number.parseFloat);
toneAttrCoercionMap.set('frequencyMaxHz', Number.parseFloat);
toneAttrCoercionMap.set('attackMs', Number.parseFloat);
toneAttrCoercionMap.set('releaseMs', Number.parseFloat);
toneAttrCoercionMap.set('updateMs', Number.parseFloat);
toneAttrCoercionMap.set('mute', () => true);

const attrCoercionMap = new Map<string, (s: string) => unknown>([
  ...thereminAttrCoercionMap.entries(),
  ...toneAttrCoercionMap.entries(),
]);

const thereminAttrNames = [...thereminAttrCoercionMap.keys()].map(
  (k) => `data-${camelCaseToDashCase(k)}`,
);
const toneAttrNames = [...toneAttrCoercionMap.keys()].map(
  (k) => `data-${camelCaseToDashCase(k)}`,
);
const attrNames = [...thereminAttrNames, ...toneAttrNames];

function initMuskiThereminComponent(e: HTMLElement) {
  const m = migrateDataAttribute;

  const o: Partial<PolyphonicThereminOptions> = {};
  [...thereminAttrCoercionMap.entries()].forEach(([attr, coerce]) =>
    m(o, attr, e, coerce),
  );

  const to: Partial<ToneOptions> = {};
  [...toneAttrCoercionMap.entries()].forEach(([attr, coerce]) =>
    m(to, attr, e, coerce),
  );

  const polyphonicTheremin = new PolyphonicTheremin(e, o, to);

  const thereMinAttrObserver = new MutationObserver((mutations) => {
    // This MutationObserver callback is quite ugly because we have to deal with the
    // PolyphonicThereminOptions and ToneOptions at the same time,
    // which is not easy to get right in TypeScript.
    // TODO: Refactor to avoid @ts-ignore comments
    const thereminOptions: Partial<PolyphonicThereminOptions> = {};
    const toneOptions: Partial<ToneOptions> = {};
    mutations.forEach((mutation) => {
      if (mutation.attributeName !== null) {
        const camelCaseAttrName = dashCaseToCamelCase(
          mutation.attributeName.replace(/^data-/, ''),
        ) as keyof PolyphonicThereminOptions | keyof ToneOptions;
        const [options, defaultOptions] = thereminAttrNames.includes(
          camelCaseAttrName,
        )
          ? [thereminOptions, defaultThereminOptions]
          : [toneOptions, defaultToneOptions];
        const newValue = e.getAttribute(mutation.attributeName);
        if (newValue !== null) {
          // attribute added or changed
          if (newValue !== mutation.oldValue) {
            const coerce = attrCoercionMap.get(camelCaseAttrName);
            assert(typeof coerce !== 'undefined');
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            options[camelCaseAttrName] = coerce(newValue);
          }
        } else {
          // attribute removed -> set to default value
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          options[camelCaseAttrName] = defaultOptions[camelCaseAttrName];
        }
      }
    });
    polyphonicTheremin.applyOptions(thereminOptions);
    polyphonicTheremin.applyToneOptions(toneOptions);
  });

  thereMinAttrObserver.observe(e, {
    attributeFilter: attrNames,
    attributes: true,
    attributeOldValue: true,
  });
}

document
  .querySelectorAll<HTMLElement>('*[data-component="muski-theremin"]')
  .forEach(initMuskiThereminComponent);
