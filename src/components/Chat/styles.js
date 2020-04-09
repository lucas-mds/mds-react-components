import React from 'react';
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

const RoundImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 30px;
  height: 30px;
  border: solid 2px #5b5f97;
  border-radius: 50%;
`;

const RoundImageWrapper = styled.img.attrs(({ image }) => ({
  src: image,
}))`
  border-radius: 50%;
  width: inherit;
`;

export const RoundImage = ({ image }) => (
  <RoundImageContainer>
    <RoundImageWrapper image={image} />
  </RoundImageContainer>
);

export const Header = styled.div`
  display: flex;
  width: 250px;
  background-color: #5b5f97;
  color: #fffffb;
  align-items: center;
  padding: 10px;
`;
