import classes from '../scss/polyphonic-theremin.module.scss';
import Tones, {
  ToneOptions as IToneOptions,
  defaultOptions as defaultToneOptions,
} from './tones';
import { getRelativePointerPosition, setPosition } from './util';

export type ToneOptions = IToneOptions;
export type PolyphonicThereminOptions = {
  touchElementCssClasses: string[];
  touchElementStyle: string;
};

const defaultOptions: Readonly<PolyphonicThereminOptions> = {
  touchElementCssClasses: [classes.ring],
  touchElementStyle: '',
};

function queryForPointerIdAll<T extends Element>(
  parent: Element,
  id: number,
): NodeListOf<T> {
  return parent.querySelectorAll<T>(
    `.${classes.pointer}[data-pointer-id="${id}"]`,
  );
}

export default class PolyphonicTheremin {
  protected readonly _options: PolyphonicThereminOptions;

  protected tones: Tones;

  protected handlers = this.getHandlers();

  protected element: Element;

  protected pane: HTMLDivElement;

  constructor(
    element: Element,
    options: Partial<PolyphonicThereminOptions> = {},
    toneOptions: Partial<ToneOptions> = {},
  ) {
    this._options = { ...defaultOptions, ...options };

    const pane = document.createElement('div');
    pane.classList.add(classes.pane);
    pane.addEventListener('pointerdown', this.handlers.addPointer);
    pane.addEventListener('pointerup', this.handlers.removePointer);
    pane.addEventListener('pointercancel', this.handlers.removePointer);
    pane.addEventListener('contextmenu', (event) => event.preventDefault());

    while (element.firstChild) element.firstChild.remove();
    element.appendChild(pane);

    this.pane = pane;
    this.element = element;

    this.tones = new Tones(toneOptions);
  }

  getOptions() {
    return { ...this._options };
  }

  applyOptions(o: Partial<PolyphonicThereminOptions>) {
    Object.assign(this._options, o);
    this.refreshPointerElementCssAll();
  }

  getToneOptions(): ToneOptions {
    return this.tones.getOptions();
  }

  applyToneOptions(o: Partial<ToneOptions>) {
    this.tones.applyOptions(o);
  }

  protected getHandlers() {
    return {
      addPointer: this.addPointer.bind(this),
      updatePointer: this.updatePointer.bind(this),
      removePointer: this.removePointer.bind(this),
    };
  }

  protected addPointer(pe: PointerEvent) {
    this.removePointer(pe);
    this.pane.addEventListener('pointermove', this.handlers.updatePointer);

    this.pane.setPointerCapture(pe.pointerId);

    const { relX, relY } = getRelativePointerPosition(pe, this.pane);

    const internalElem = document.createElement('div');
    this.refreshPointerElementCss(internalElem);

    const elem = document.createElement('div');
    elem.classList.add(classes.pointer);
    elem.dataset.pointerId = `${pe.pointerId}`;
    elem.appendChild(internalElem);

    this.pane.append(elem);

    this.tones.add(pe.pointerId, relX, relY);

    this.updatePointer(pe);
  }

  protected updatePointer(pe: PointerEvent) {
    if (pe.buttons === 0) return;

    const id = pe.pointerId;
    const elems = queryForPointerIdAll<HTMLElement>(this.pane, id);
    const { x, y, relX, relY } = getRelativePointerPosition(pe, this.pane);
    elems.forEach((e) => setPosition(e, x, y));
    this.tones.update(id, relX, relY);
  }

  protected removePointer(pe: PointerEvent) {
    const id = pe.pointerId;
    const elems = queryForPointerIdAll<HTMLElement>(this.pane, id);
    elems.forEach((e) => e.remove());
    this.pane.releasePointerCapture(pe.pointerId);

    this.tones.remove(id);

    if (this.tones.size === 0)
      this.pane.removeEventListener('pointermove', this.handlers.updatePointer);
  }

  protected refreshPointerElementCss(element: Element) {
    const { touchElementCssClasses, touchElementStyle } = this._options;
    element.classList.add(...touchElementCssClasses);
    element.setAttribute('style', touchElementStyle);
  }

  protected refreshPointerElementCssAll() {
    const elements = this.pane.querySelectorAll(`.${classes.pointer} > *`);
    elements.forEach(this.refreshPointerElementCss.bind(this));
  }
}

export { defaultOptions, defaultToneOptions };
