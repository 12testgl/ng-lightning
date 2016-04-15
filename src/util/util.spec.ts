import {it, describe, expect} from 'angular2/testing';
import * as util from './util';

describe('utility', () => {

  it('`toBoolean`', () => {
    const { toBoolean } = util;
    expect(toBoolean('')).toBe(true);
    expect(toBoolean('false')).toBe(false);
    expect(toBoolean('0')).toBe(false);

    expect(toBoolean(true)).toBe(true);
    expect(toBoolean(false)).toBe(false);
  });

  it('`isInt`', () => {
    expect(util.isInt(10)).toBe(true);
    expect(util.isInt('10')).toBe(true);
    expect(util.isInt('0')).toBe(true);

    expect(util.isInt(10.5)).toBe(false);
    expect(util.isInt('10.5')).toBe(false);
    expect(util.isInt(null)).toBe(false);
    expect(util.isInt(undefined)).toBe(false);
  });

  it('`isObject`', () => {
    expect(util.isObject({})).toBe(true);
    expect(util.isObject([1, 2, 3])).toBe(true);
    expect(util.isObject(function(){})).toBe(true);

    expect(util.isObject(null)).toBe(false);
    expect(util.isObject('string')).toBe(false);
    expect(util.isObject(10)).toBe(false);
  });

  it('uniqueId', () => {
    const [ id, count] = util.uniqueId('pr1').split('_');
    expect(id).toBe('pr1');
    expect(count).toBeGreaterThan(0);

    expect(util.uniqueId('pr1')).toBe(`pr1_${+count + 1}`);
    expect(util.uniqueId('pr2')).toBe(`pr2_${+count + 2}`);
    expect(util.uniqueId()).toBe(`uid_${+count + 3}`);
  });

  describe('replaceClass', () => {
    let instance: any, { replaceClass } = util;

    beforeEach(() => {
      instance = {
        renderer: { setElementClass: jasmine.createSpy('setElementClass') },
        element: { nativeElement: null },
      };
    });

    it('will replace classes if supplied', () => {
      replaceClass(instance, null, null);
      expect(instance.renderer.setElementClass).not.toHaveBeenCalled();

      replaceClass(instance, 'c1', 'c2');
      expect(instance.renderer.setElementClass).toHaveBeenCalledWith(null, 'c1', false);
      expect(instance.renderer.setElementClass).toHaveBeenCalledWith(null, 'c2', true);
    });

    it('will not remove class if not needed', () => {
      replaceClass(instance, 'c3', 'c3');
      expect(instance.renderer.setElementClass).not.toHaveBeenCalledWith(null, 'c3', false);
      expect(instance.renderer.setElementClass).toHaveBeenCalledWith(null, 'c3', true);
    });
  });
});
