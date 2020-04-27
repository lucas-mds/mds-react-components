import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;  
  background-color: #e4e4e4;
`;

export const Title = styled.span``;

export const IconButton = styled.button.attrs((props) => ({
  children: props.icon,
}))`
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  display: flex;
`;