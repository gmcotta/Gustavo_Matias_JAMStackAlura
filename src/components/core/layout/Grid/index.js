import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Col = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
`;

const Grid = {
  Container,
  Row,
  Col,
};

export default Grid;
