import styled from 'styled-components';
import { ContainerProps } from '.';
import { DefaultTheme as theme } from '../../../theme';

const StyledContainer = styled.div<ContainerProps>`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  max-width: ${({ maxWidth }) => maxWidth && theme.breakpoints[maxWidth]};
  padding: 0
    ${({ disableGutters }) => (disableGutters ? 0 : theme.spacing['small'])};
`;

StyledContainer.defaultProps = {
  theme,
};

export default StyledContainer;
