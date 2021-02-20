import { css } from 'styled-components';
import transformBreakpointsIntoMediaQueries from './transformBreakpointsIntoMediaQueries';
import typographyVariant from '../typographyVariants';

function textVariantToStyles(variant) {
  const variantMap = {
    title: css`
    font-size: ${({ theme }) => theme.typographyVariants.title.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.title.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.title.lineHeight};
  `,
    subtitle: css`
    font-size: ${({ theme }) => theme.typographyVariants.subtitle.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.subtitle.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.subtitle.lineHeight};
  `,
    titleXS: css`
    font-size: ${({ theme }) => theme.typographyVariants.title.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.title.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.title.lineHeight};
  `,
    subtitleXS: css`
    font-size: ${({ theme }) => theme.typographyVariants.titleXS.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.titleXS.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.titleXS.lineHeight};
  `,
    cardTitle: css`
    font-size: ${({ theme }) => theme.typographyVariants.cardTitle.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.cardTitle.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.cardTitle.lineHeight};
  `,
    largeFontParagraph: css`
    font-size: ${({ theme }) => theme.typographyVariants.largeFontParagraph.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.largeFontParagraph.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.largeFontParagraph.lineHeight};
    `,
    mediumFontParagraph: css`
    font-size: ${({ theme }) => theme.typographyVariants.mediumFontParagraph.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.mediumFontParagraph.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.mediumFontParagraph.lineHeight};
    `,
    paragraph: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph.lineHeight};
  `,
    smallFontParagraph: css`
    font-size: ${({ theme }) => theme.typographyVariants.smallFontParagraph.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.smallFontParagraph.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.smallFontParagraph.lineHeight};
  `,
  };

  if (typeof variant === 'string') {
    console.log('string', variant);
    return variantMap[variant];
  }
  // {{ xs: 'titleXS', md: 'title' }}
  console.log('object', variant);
  return transformBreakpointsIntoMediaQueries({
    ...(variant.xs && {
      xs: typographyVariant[variant.xs],
    }),
    ...(variant.sm && {
      sm: typographyVariant[variant.sm],
    }),
    ...(variant.md && {
      md: typographyVariant[variant.md],
    }),
    ...(variant.lg && {
      lg: typographyVariant[variant.lg],
    }),
    ...(variant.xl && {
      xl: typographyVariant[variant.xl],
    }),
  });
}

export default textVariantToStyles;