import styled, { css } from 'styled-components';

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
`;

HeaderWrapper.LeftContent = styled.div`
  order: 1;

  
`;

HeaderWrapper.CentralContent = styled.nav`
  order: 3;
  width: 100%;
  display: flex;
  justify-content:space-around;

  ${({ theme }) => css`
      @media screen and (min-width: ${theme.breakpoints.md}px) {
        order: 2;
        width: 50%;
      }
  `}
`;

HeaderWrapper.RightContent = styled.div`
  order: 2;

  ${({ theme }) => css`
      @media screen and (min-width: ${theme.breakpoints.md}px) {
        order: 3;
      }
  `}
`;

export default HeaderWrapper;
