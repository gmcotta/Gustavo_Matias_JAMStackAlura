import styled, { css } from 'styled-components';

import propToStyle from '../../../theme/utils/propToStyle';
import textVariantToStyle from '../../../theme/utils/textVariantToStyles';

const TextBase = styled.span`
  color: ${({ theme, themeMode }) => theme.colors[themeMode].typography.main};
  ${({ variant }) => textVariantToStyle(variant)};
  ${propToStyle('textAlign')};
  ${propToStyle('textTransform')};
  ${propToStyle('margin')};
  ${propToStyle('marginTop')};
  ${propToStyle('marginBottom')};
  ${propToStyle('marginLeft')};
  ${propToStyle('marginRight')};

  ${({ as }) => {
    if (as === 'a') {
      return css`
        cursor: pointer;  
        text-decoration: none;

        &:hover {
          font-weight: 500;
        }
      `;
    }
    return css``;
  }};
`;

export default TextBase;
