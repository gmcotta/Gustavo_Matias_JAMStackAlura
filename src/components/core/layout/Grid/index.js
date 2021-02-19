import styled, { css } from 'styled-components';
import transformBreakpointsIntoMediaQueries from '../../../../theme/utils/transformBreakpointsIntoMediaQueries';

const Container = styled.div`
  width: 100%;
  background-color: red;
  margin: auto;

  ${transformBreakpointsIntoMediaQueries({
    sm: css`
      max-width: 576px;
    `,
    md: css`
      max-width: 768px;
    `,
    lg: css`
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Col = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  width: 100%;

  ${({ value }) => {
    if (typeof value === 'number') {
      return css`
        flex: 0 0 ${(100 * value) / 12}%;
        max-width: ${(100 * value) / 12}%;
      `;
    }

    return transformBreakpointsIntoMediaQueries({
      ...(value.xs && {
        xs: css`
          flex: 0 0 ${(100 * value.xs) / 12}%;
          max-width: ${(100 * value.xs) / 12}%;
        `,
      }),
      ...(value.sm && {
        sm: css`
          flex: 0 0 ${(100 * value.sm) / 12}%;
          max-width: ${(100 * value.sm) / 12}%;
        `,
      }),
      ...(value.md && {
        md: css`
          flex: 0 0 ${(100 * value.md) / 12}%;
          max-width: ${(100 * value.md) / 12}%;
        `,
      }),
      ...(value.lg && {
        lg: css`
          flex: 0 0 ${(100 * value.lg) / 12}%;
          max-width: ${(100 * value.lg) / 12}%;
        `,
      }),
      ...(value.xl && {
        xl: css`
          flex: 0 0 ${(100 * value.xl) / 12}%;
          max-width: ${(100 * value.xl) / 12}%;
        `,
      }),
    });
  }};
  ${({ offset }) => {
    if (typeof offset === 'number') {
      return css`
         ${(100 * offset) / 12}%;
        max-width: ${(100 * offset) / 12}%;
      `;
    }
    if (typeof offset === 'object') {
      return transformBreakpointsIntoMediaQueries({
        ...(offset.xs && {
          xs: css`
            ${(100 * offset.xs) / 12}%;
            : ${(100 * offset.xs) / 12}%;
          `,
        }),
        ...(offset.sm && {
          sm: css`
            ${(100 * offset.sm) / 12}%;
            : ${(100 * offset.sm) / 12}%;
          `,
        }),
        ...(offset.md && {
          md: css`
            ${(100 * offset.md) / 12}%;
            : ${(100 * offset.md) / 12}%;
          `,
        }),
        ...(offset.lg && {
          lg: css`
            ${(100 * offset.lg) / 12}%;
            : ${(100 * offset.lg) / 12}%;
          `,
        }),
        ...(offset.xl && {
          xl: css`
            ${(100 * offset.xl) / 12}%;
            : ${(100 * offset.xl) / 12}%;
          `,
        }),
      });
    }
    return undefined;
  }};
`;

const Grid = {
  Container,
  Row,
  Col,
};

export default Grid;
