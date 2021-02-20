import transformBreakpointsIntoMediaQueries from './transformBreakpointsIntoMediaQueries';
import typographyVariant from '../typographyVariants';

function textVariantToStyles(variant) {
  if (typeof variant === 'string') {
    return typographyVariant[variant];
  }
  // {{ xs: 'titleXS', md: 'title' }}
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
