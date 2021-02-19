import { css } from 'styled-components';
import breakpoints from '../breakpoints';

function transformBreakpointsIntoMediaQueries(breakpointsWithCss) {
  console.log('breakpointsWithCss', breakpointsWithCss);

  const breakpointsUsed = Object.keys(breakpointsWithCss);
  console.log('breakpointsUsed', breakpointsUsed);

  const breakpointsFormatted = breakpointsUsed.map(breakpoint => css`
    @media screen and (min-width: ${breakpoints[breakpoint]}px) {
      ${breakpointsWithCss[breakpoint]};
    }
  `.join(''));
  console.log('breakpointsFormatted', breakpointsFormatted);
  return breakpointsFormatted;
}

export default transformBreakpointsIntoMediaQueries;
