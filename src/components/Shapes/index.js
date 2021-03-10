import styled from 'styled-components';

export const Circle = styled.View`
  width: ${(props) => props.width || '20px'};
  height: ${(props) => props.width || '20px'};
  border-radius: ${(props) => (props.width || 20) / 2 + 'px'};
  background-color: #9b51e0;
  margin-right: 15px;
  align-items: center;
  justify-content: center;
`;

export const CategoryChip = styled.View`
background-color: ${(props) => props.color || '#FFEFF1'};
width: 40px;
height: 20px;
border-radius: 5px;
align-items: center
justify-content: center;
margin-right: 5px
`;
