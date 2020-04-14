import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #ECECF2;
  color: #4B4E7C;
  border-bottom: solid 1px #b8b8d1;

  &:last-child {
    border-bottom: none;
  }
`;

export const ItemLabel = styled.span`
  font-size: 18px;
  margin-left: 10px;
`;
