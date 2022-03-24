import { hexToChannels, range } from '.';

describe('utils', () => {
  describe('hexToChannels', () => {
    it('should return null', () => {
      expect(hexToChannels('#ff')).toBeNull();
      expect(hexToChannels('#fffff')).toBeNull();
      expect(hexToChannels('#fffffff')).toBeNull();
      expect(hexToChannels('fff')).toBeNull();
      expect(hexToChannels('string')).toBeNull();
      expect(hexToChannels('#ffaamm')).toBeNull();
    });

    it('should return an array of numbers', () => {
      expect(hexToChannels('#fff')).toEqual([255, 255, 255]);
      expect(hexToChannels('#ffff')).toEqual([255, 255, 255, 255]);
      expect(hexToChannels('#ffffff')).toEqual([255, 255, 255]);
      expect(hexToChannels('#ffffffff')).toEqual([255, 255, 255, 255]);
    });
  });

  describe('range', () => {
    it('should return an array', () => {
      expect(Array.isArray(range(1, 2))).toBe(true);
      expect(range(3, 5)).toStrictEqual([3, 4, 5]);
    });
  });
});
