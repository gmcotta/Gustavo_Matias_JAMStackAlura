import React from 'react';
import PropTypes from 'prop-types';

import Text from '../../core/Text';
import {
  CardWrapper, CardHighlight, CardImage, CardInfoSection,
} from './styles';

function Card({
  main, title, description, imageSrc,
}) {
  return (

    <CardWrapper main={main}>
      {main === 'true' && (
      <CardHighlight>
        <Text
          variant={{ xs: 'cardTitleXS', sm: 'cardTitle' }}
          as="span"
          textTransform="uppercase"
        >
          Destaque
        </Text>
      </CardHighlight>
      )}
      <CardImage main={main} src={imageSrc} alt={title} />
      <CardInfoSection>
        <Text
          variant="cardTitle"
          as="h3"
          textTransform="uppercase"
          textAlign="center"
        >
          {title}
        </Text>
        {main === 'true' && (
        <Text variant="paragraph" as="p" textAlign="center">
          {description}
        </Text>
        )}
      </CardInfoSection>
    </CardWrapper>
  );
}

export default Card;

Card.defaultProps = {
  main: 'false',
  description: '',
};

Card.propTypes = {
  main: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
};
