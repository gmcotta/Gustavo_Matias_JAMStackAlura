import styled, { css } from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';
import transformBreakpointsIntoMediaQueries from '../../../theme/utils/transformBreakpointsIntoMediaQueries';

export const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 16px;
  margin-top: 32px;

  ${transformBreakpointsIntoMediaQueries({
    xs: css`
      justify-content: center;
    `,
    sm: css`
      justify-content: space-between;
    `,
  })}
  
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 16px;

  ${transformBreakpointsIntoMediaQueries({
    xs: css`
      margin-top: 16px;
    `,
    sm: css`
      margin-top: 0;
    `,
  })}
`;

export const IconButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center; 
  padding: 0;
  border: 0;
  background-color: transparent;
  ${propToStyle('margin')};

  &:hover {
    cursor: pointer;
  }
`;
