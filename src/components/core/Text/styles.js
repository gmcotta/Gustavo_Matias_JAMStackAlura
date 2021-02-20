import styled, { css } from 'styled-components';

import propToStyle from '../../../theme/utils/propToStyle';
import textVariantToStyle from '../../../theme/utils/textVariantToStyles';

const TextBase = styled.span`
  ${({ variant }) => textVariantToStyle(variant)};
  ${propToStyle('textAlign')};
  ${propToStyle('textTransform')};
  ${propToStyle('margin')};
  ${propToStyle('marginTop')};
  ${propToStyle('marginBottom')};
  ${propToStyle('marginLeft')};
  ${propToStyle('marginRight')};

  ${({ as, theme }) => {
    if (as === 'a') {
      return css`
        cursor: pointer;  
        text-decoration: none;
        color: ${theme.colors.light.typography.main};

        &:hover {
          font-weight: 500;
        }
      `;
    }
  }};
`;

export default TextBase;
