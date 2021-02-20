import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardWrapper = styled.div`

`;

function Card({
  main, title, description, imageSrc,
}) {
  return (

    <CardWrapper>
      {main === 'true' && <span>Destaque</span>}
      <img src={imageSrc} alt={title} />
      <div>
        <h3>{title}</h3>
        {main === 'true' && <p>{description}</p>}
      </div>
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
