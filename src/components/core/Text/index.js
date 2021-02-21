import React from 'react';
import PropTypes from 'prop-types';

import { useThemeModeProvider } from '../../../context/ThemeModeContext';
import TextBase from './styles';

function Text({
  tag, variant, children, ...props
}) {
  const { themeMode } = useThemeModeProvider();
  return (
    <TextBase as={tag} variant={variant} themeMode={themeMode} {...props}>
      {children}
    </TextBase>
  );
}

export default Text;

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph',
};

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.node.isRequired,
};
