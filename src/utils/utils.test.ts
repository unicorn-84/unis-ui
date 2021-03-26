import { hexToChannels } from '.';

describe('hexToChannels', () => {
  it('should returns null', () => {
    expect(hexToChannels('#ff')).toBeNull();
    expect(hexToChannels('#fffff')).toBeNull();
    expect(hexToChannels('#fffffff')).toBeNull();
    expect(hexToChannels('fff')).toBeNull();
    expect(hexToChannels('string')).toBeNull();
    expect(hexToChannels('#ffaamm')).toBeNull();
  });

  it('should returns an array of numbers', () => {
    expect(hexToChannels('#fff')).toEqual([255, 255, 255]);
    expect(hexToChannels('#ffff')).toEqual([255, 255, 255, 255]);
    expect(hexToChannels('#ffffff')).toEqual([255, 255, 255]);
    expect(hexToChannels('#ffffffff')).toEqual([255, 255, 255, 255]);
  });
});
