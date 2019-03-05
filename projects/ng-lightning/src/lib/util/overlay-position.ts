import { ConnectedOverlayPositionChange, ConnectionPositionPair } from '@angular/cdk/overlay';

export type Placement =
  'top' | 'top-left' | 'top-right' | 'right' | 'right-top' | 'right-bottom' | 'bottom' | 'bottom-left' | 'bottom-right' | 'left' | 'left-top' | 'left-bottom';

export const POSITION_MAP: { [ key: string ]: { position: ConnectionPositionPair, nubbin: Placement } } = {
  'top': {
    position: new ConnectionPositionPair(
      { originX: 'center', originY: 'top' },
      { overlayX: 'center', overlayY: 'bottom' }
    ),
    nubbin: 'bottom'
  },
  'top-left': {
    position: new ConnectionPositionPair(
      { originX: 'start', originY: 'top' },
      { overlayX: 'start', overlayY: 'bottom' }
    ),
    nubbin: 'bottom-left'
  },
  'top-right': {
    position: new ConnectionPositionPair(
      { originX: 'end', originY: 'top' },
      { overlayX: 'end', overlayY: 'bottom' }
    ),
    nubbin: 'bottom-right'
  },
  'right': {
    position: new ConnectionPositionPair(
      { originX: 'end', originY: 'center' },
      { overlayX: 'start', overlayY: 'center' }
    ),
    nubbin: 'left'
  },
  'right-top': {
    position: new ConnectionPositionPair(
      { originX: 'end', originY: 'top' },
      { overlayX: 'start', overlayY: 'top' }
    ),
    nubbin: 'left-top'
  },
  'right-bottom': {
    position: new ConnectionPositionPair(
      { originX: 'end', originY: 'bottom' },
      { overlayX: 'start', overlayY: 'bottom' }
    ),
    nubbin: 'left-bottom'
  },
  'bottom': {
    position: new ConnectionPositionPair(
      { originX: 'center', originY: 'bottom' },
      { overlayX: 'center', overlayY: 'top' }
    ),
    nubbin: 'top'
  },
  'bottom-left': {
    position: new ConnectionPositionPair(
      { originX: 'start', originY: 'bottom' },
      { overlayX: 'start', overlayY: 'top' }
    ),
    nubbin: 'top-left'
  },
  'bottom-right': {
    position: new ConnectionPositionPair(
      { originX: 'end', originY: 'bottom' },
      { overlayX: 'end', overlayY: 'top' }
    ),
    nubbin: 'top-right'
  },
  'left': {
    position: new ConnectionPositionPair(
      { originX: 'start', originY: 'center' },
      { overlayX: 'end', overlayY: 'center' }
    ),
    nubbin: 'right'
  },
  'left-top': {
    position: new ConnectionPositionPair(
      { originX: 'start', originY: 'top' },
      { overlayX: 'end', overlayY: 'top' }
    ),
    nubbin: 'right-top'
  },
  'left-bottom': {
    position: new ConnectionPositionPair(
      { originX: 'start', originY: 'bottom' },
      { overlayX: 'end', overlayY: 'bottom' }
    ),
    nubbin: 'right-bottom'
  }
};

export const DEFAULT_TOOLTIP_POSITIONS = ['top', 'right', 'bottom', 'left'].map((placement: Placement) => POSITION_MAP[placement].position);
export const DEFAULT_POPOVER_POSITIONS = DEFAULT_TOOLTIP_POSITIONS;

export function getPlacementName(position: ConnectedOverlayPositionChange): string {
  const keyList = [ 'originX', 'originY', 'overlayX', 'overlayY' ];
  for (const placement in POSITION_MAP) {
    if (keyList.every(key => position.connectionPair[ key ] === POSITION_MAP[ placement ][ 'position' ][ key ])) {
      return placement;
    }
  }
}
