import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Text from '../../core/Text';
import transformBreakpointsIntoMediaQueries from '../../../theme/utils/transformBreakpointsIntoMediaQueries';

const CardWrapper = styled.button`
  border: 4px solid ${({ theme }) => theme.colors.light.primary.color};
  display: flex;
  flex-direction: ${({ main }) => (main === 'true' ? 'row' : 'column')};
  position: relative;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.light.background.main};
  margin: 0;
  padding: 0;
  width: 100%;
`;

const CardHighlight = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;  
  background-color: ${({ theme }) => theme.colors.common.white};
  padding: 4px;
  border: 4px solid ${({ theme }) => theme.colors.common.blueGray};
`;

const CardImage = styled.img`
  ${({ main }) => {
    if (main === 'true') {
      return transformBreakpointsIntoMediaQueries({
        xs: {
          width: '100%',
        },
        md: {
          width: '60%',
        },
      });
    }
    return {
      width: '100%',
    };
  }};
  max-height: 320px;
  object-fit: cover;
`;

const CardInfoSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.common.white};
  padding: 8px;
  height: 100%;
  width: 100%;
`;

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
        <Text variant="cardTitle" as="h3" textTransform="uppercase" textAlign="center">
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
