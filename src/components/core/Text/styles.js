import styled, { css } from 'styled-components';

import propToStyle from '../../../theme/utils/propToStyle';
import textVariantToStyle from '../../../theme/utils/textVariantToStyles';

const TextBase = styled.span`
  ${({ variant }) => textVariantToStyle(variant)};
  ${propToStyle('textAlign')};
  ${propToStyle('textTransform')};
  ${({ tag }) => {
    if (tag === 'a') {
      return css`
        cursor: pointer;
      `;
    }
  }};
`;

export default TextBase;
