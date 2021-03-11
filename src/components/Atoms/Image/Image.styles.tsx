import styled from 'styled-components';
import { ImageProps } from '.';
import { DefaultTheme as theme } from '../../../theme';

const StyledImage = styled.img<ImageProps>``;

StyledImage.defaultProps = {
  theme,
};

export default StyledImage;
