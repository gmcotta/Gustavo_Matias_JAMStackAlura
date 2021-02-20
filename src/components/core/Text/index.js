import React from 'react';
import PropTypes from 'prop-types';

import TextBase from './styles';

function Text({
  tag, variant, children, ...props
}) {
  return (
    <TextBase as={tag} variant={variant} {...props}>
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
