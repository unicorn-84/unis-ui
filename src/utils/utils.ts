/**
 * Convert hex color to decimal values of channels.
 * @param hexColor A string of hex value color.
 */
export const hexToChannels: (
  hexColor: string,
) => number[] | null = hexColor => {
  if (!hexColor.startsWith('#')) {
    return null;
  }

  const hex: string = hexColor.slice(1);

  if (Number('0x' + hex)) {
    switch (hex.length) {
      case 3:
      case 4:
        return hex.split('').map(item => Number.parseInt(`${item}${item}`, 16));
      case 6:
      case 8:
        const arr: RegExpMatchArray | null = hex.match(/.{2}/g);
        return arr && arr.map(item => Number.parseInt(item, 16));
      default:
        return null;
    }
  }
  return null;
};

/**
 * Create an array of numbers in the given range.
 * @param min A min value.
 * @param max A max value.
 */
export const range: (min: number, max: number) => number[] = (min, max) =>
  Array.from({ length: max - min + 1 }, (_, i) => i + min);
