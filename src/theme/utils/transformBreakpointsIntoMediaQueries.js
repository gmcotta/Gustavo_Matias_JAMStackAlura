import { css } from 'styled-components';
import breakpoints from '../breakpoints';

function transformBreakpointsIntoMediaQueries(breakpointsWithCss) {
  const breakpointsUsed = Object.keys(breakpointsWithCss);
  const breakpointsFormatted = breakpointsUsed.map(breakpoint => css`
    @media screen and (min-width: ${breakpoints[breakpoint]}px) {
      ${breakpointsWithCss[breakpoint]};
    }
  `.join(''));
  return breakpointsFormatted;
}

export default transformBreakpointsIntoMediaQueries;
