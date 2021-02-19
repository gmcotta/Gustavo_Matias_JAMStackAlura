import styled, { css } from 'styled-components';
import transformBreakpointsIntoMediaQueries from '../../../../theme/utils/transformBreakpointsIntoMediaQueries';
import propToStyle from '../../../../theme/utils/propToStyle';

const Container = styled.div`
  width: 100%;
  background-color: red;
  margin: auto;

  ${transformBreakpointsIntoMediaQueries({
    sm: css`
      max-width: 600px;
    `,
    md: css`
      max-width: 800px;
    `,
    lg: css`
      max-width: 1000px;
    `,
    xl: css`
      max-width: 1200px;
    `,
  })}
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: yellow;
  ${propToStyle('height')};
`;

const Col = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  ${propToStyle('backgroundColor')};

  ${propToStyle('display')};
  ${propToStyle('flexDirection')};
  ${propToStyle('justifyContent')};
  ${propToStyle('alignItems')};

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
        margin-left: ${(100 * offset) / 12}%;
      `;
    }
    if (typeof offset === 'object') {
      return transformBreakpointsIntoMediaQueries({
        ...(offset.xs && {
          xs: css`
            margin-left: ${(100 * offset.xs) / 12}%;
          `,
        }),
        ...(offset.sm && {
          sm: css`
            margin-left: ${(100 * offset.sm) / 12}%;
          `,
        }),
        ...(offset.md && {
          md: css`
            margin-left: ${(100 * offset.md) / 12}%;
          `,
        }),
        ...(offset.lg && {
          lg: css`
            margin-left: ${(100 * offset.lg) / 12}%;
          `,
        }),
        ...(offset.xl && {
          xl: css`
            margin-left: ${(100 * offset.xl) / 12}%;
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
