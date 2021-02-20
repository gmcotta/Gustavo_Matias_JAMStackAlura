import styled from 'styled-components';
import transformBreakpointsIntoMediaQueries from '../../../theme/utils/transformBreakpointsIntoMediaQueries';

export const CardWrapper = styled.button`
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

export const CardHighlight = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;  
  background-color: ${({ theme }) => theme.colors.common.white};
  padding: 4px;
  border: 4px solid ${({ theme }) => theme.colors.common.blueGray};
`;

export const CardImage = styled.img`
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

export const CardInfoSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.common.white};
  padding: 8px;
`;
