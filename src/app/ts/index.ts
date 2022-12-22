import { strict as assert } from 'assert';

import fullscreenIconSvg from 'bundle-text:../svg/fullscreen.svg';
import fullscreenExitIconSvg from 'bundle-text:../svg/fullscreen-exit.svg';
import PolyphonicTheremin from '../../lib/ts/polyphonic-theremin';

const outer = document.getElementById('theremin');
assert(outer !== null);

const polyphonicTheremin = new PolyphonicTheremin(outer);

function createSVG(svgText: string): SVGElement {
  const tagWrapper = document.createElement('div');
  tagWrapper.innerHTML = svgText.trim();
  assert(tagWrapper.firstChild instanceof SVGElement);
  return tagWrapper.firstChild;
}

if (document.fullscreenEnabled) {
  const fullscreenIcon = createSVG(fullscreenIconSvg);
  const fullscreenExitIcon = createSVG(fullscreenExitIconSvg);
  assert(fullscreenIcon !== null);
  assert(fullscreenExitIcon !== null);
  fullscreenIcon.classList.add('grow');
  fullscreenExitIcon.classList.add('shrink');

  const fullscreenButton = document.createElement('div');
  fullscreenButton.classList.add('fullscreen-button');
  fullscreenButton.addEventListener(
    'pointerdown',
    (e) => {
      e.stopImmediatePropagation();
    },
    true,
  );
  fullscreenButton.addEventListener(
    'click',
    () => {
      if (document.fullscreenElement === outer) {
        document.exitFullscreen().catch(() => {});
      } else {
        outer.requestFullscreen().catch(() => {});
      }
    },
    true,
  );

  const updateFullscreenButton = () => {
    fullscreenButton.classList.remove('grow', 'shrink');
    if (document.fullscreenElement === outer) {
      fullscreenButton.classList.add('shrink');
      fullscreenButton.appendChild(fullscreenExitIcon);
    } else {
      fullscreenButton.classList.add('grow');
      fullscreenButton.appendChild(fullscreenIcon);
    }
  };

  fullscreenButton.appendChild(fullscreenIcon);
  fullscreenButton.appendChild(fullscreenExitIcon);

  updateFullscreenButton();
  document.addEventListener('fullscreenchange', updateFullscreenButton);

  outer.appendChild(fullscreenButton);
}
