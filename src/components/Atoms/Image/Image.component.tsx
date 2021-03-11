import React, { ImgHTMLAttributes, useEffect, useState } from 'react';
import StyledImage from './Image.styles';

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /**
   * The placeholder.
   */
  placeholder?: string;
}

export default ({ src, placeholder, ...props }: ImageProps) => {
  const [srcState, setSrcState] = useState(placeholder || src);

  useEffect(() => {
    const handleLoad = () => {
      setSrcState(src);
    };

    const img = new Image();
    img.src = src as string;
    img.addEventListener('load', handleLoad);
    img.addEventListener('error', () => console.log('error'));

    return () => img.removeEventListener('load', handleLoad);
  }, [src]);

  return <StyledImage {...props} src={srcState} />;
};
