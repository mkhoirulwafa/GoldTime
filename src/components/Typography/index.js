import styled from 'styled-components';

export const Title = styled.Text`
  font-family: ${(props) => props.family || 'Rubik-Medium'};
  font-size: ${(props) => props.size || '28px'};
  color: ${(props) => props.color || '#070417'};
  margin-bottom: 5px;
`;
