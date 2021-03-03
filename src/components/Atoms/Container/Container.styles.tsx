import styled from 'styled-components';
import { ContainerProps } from '.';
import { DefaultTheme as theme } from '../../../theme';

const StyledContainer = styled.div<ContainerProps>``;

StyledContainer.defaultProps = {
  theme,
};

export default StyledContainer;
