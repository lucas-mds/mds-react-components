import styled from 'styled-components';

export const RoundImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 30px;
  height: 30px;
  border: solid 2px #5b5f97;
  border-radius: 50%;
`;

export const RoundImageWrapper = styled.img.attrs(({ image }) => ({
  src: image,
}))`
  border-radius: 50%;
  width: inherit;
`;
