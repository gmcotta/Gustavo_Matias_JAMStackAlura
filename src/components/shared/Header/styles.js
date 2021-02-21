import styled, { css } from 'styled-components';

import transformBreakpointsIntoMediaQueries from '../../../theme/utils/transformBreakpointsIntoMediaQueries';

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  padding: 16px;
  background-color: ${({ theme, themeMode }) => theme.colors[themeMode].background.main}; 
  transition: background-color 300ms ease-in-out;
  z-index: 100;
  border-bottom: 1px solid ${({ theme }) => theme.colors.common.lightGray};
`;

HeaderWrapper.LeftContent = styled.a`
  order: 1;
  cursor: pointer;
`;

HeaderWrapper.CentralContent = styled.nav`
  order: 3;
  width: 100%;
  display: flex;
  justify-content:space-around;
  
  ${transformBreakpointsIntoMediaQueries({
    md: css`{
      order: 2;
      flex: 1;
    }`,
  })}
`;

HeaderWrapper.RightContent = styled.button`
  display: flex;
  justify-content: center;
  align-items: center; 
  padding: 0;
  border: 0;
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
  order: 2;

  ${transformBreakpointsIntoMediaQueries({
    md: css`
    order: 3;
  `,
  })}
`;

export default HeaderWrapper;
