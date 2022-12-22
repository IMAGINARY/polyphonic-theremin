function hasKey<T extends object>(obj: T, k: keyof never): k is keyof T {
  return k in obj;
}

function interpolateLinear(t: number, min: number, max: number) {
  return min + (max - min) * t;
}

function interpolateLogarithmic(t: number, min: number, max: number) {
  // The base of the logarithm cancels out during the computation,
  // so we will just use any base, e.g. Euler's number.
  const logMin = Math.log(min);
  const logMax = Math.log(max);
  const logValue = logMin + (logMax - logMin) * t;
  return Math.exp(logValue);
}

function getRelativePointerPosition(pe: PointerEvent, elem: HTMLElement) {
  const { left, top, width, height } = elem.getBoundingClientRect();
  const x = Math.max(0, Math.min(pe.clientX - left, width));
  const y = Math.max(0, Math.min(pe.clientY - top, height));
  const relX = x / width;
  const relY = y / height;
  return { x, y, relX, relY, width, height };
}

function setPosition(element: HTMLElement, x: number, y: number) {
  const { style } = element;
  style.transform = `translate(${x}px, ${y}px)`;
}

const AudioContext = window.AudioContext || window.webkitAudioContext;

/**
 * This is a workaround for some browsers not supporting
 * AudioParam.cancelAndHoldAtTime().
 */
function cancelAndHoldNow(audioParam: AudioParam, audioContext: AudioContext) {
  const { currentTime } = audioContext;
  const { value } = audioParam;
  audioParam.cancelScheduledValues(currentTime);
  // eslint-disable-next-line no-param-reassign
  audioParam.value = value;
}

export {
  hasKey,
  interpolateLinear,
  interpolateLogarithmic,
  getRelativePointerPosition,
  setPosition,
  AudioContext,
  cancelAndHoldNow,
};
