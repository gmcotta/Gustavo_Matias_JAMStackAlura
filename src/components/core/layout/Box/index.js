import styled, { css } from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle';
import transformBreakpointsIntoMediaQueries from '../../../../theme/utils/transformBreakpointsIntoMediaQueries';

const Box = styled.div`
  padding: 0 16px;

  ${propToStyle('display')};
  ${propToStyle('flex')};
  ${propToStyle('flexWrap')};
  ${propToStyle('flexDirection')};

  ${transformBreakpointsIntoMediaQueries({
    md: css`{
      padding: 0 24px;
    }`,
    lg: css`{
      padding: 0 40px;
    }`,
  })}

  background-color: ${({ themeMode, theme }) => theme.colors[themeMode].background.main};
  transition: background-color 300ms ease-in-out;
`;

export default Box;
