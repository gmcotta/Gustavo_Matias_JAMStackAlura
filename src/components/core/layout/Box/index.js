import styled, { css } from 'styled-components';
import transformBreakpointsIntoMediaQueries from '../../../../theme/utils/transformBreakpointsIntoMediaQueries';

const Box = styled.div`
  padding: 16px;

  ${transformBreakpointsIntoMediaQueries({
    md: css`{
      padding: 24px;
    }`,
    lg: css`{
      padding: 40px;
    }`,

  })}
`;

export default Box;
