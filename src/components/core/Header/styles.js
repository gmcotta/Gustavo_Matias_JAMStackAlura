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
  background-color: ${({ theme }) => theme.colors.light.background.main}; 
`;

HeaderWrapper.LeftContent = styled.div`
  order: 1;
`;

HeaderWrapper.CentralContent = styled.nav`
  order: 3;
  width: 100%;
  display: flex;
  justify-content:space-around;
  background-color: yellow;

  ${transformBreakpointsIntoMediaQueries({
    md: css`{
      order: 2;
      width: 75vw;
    }`,
  })}
`;

HeaderWrapper.RightContent = styled.div`
  order: 2;

  ${transformBreakpointsIntoMediaQueries({
    md: css`
    order: 3;
  `,
  })}
`;

export default HeaderWrapper;
