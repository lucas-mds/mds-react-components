import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`;

export const Controllers = styled.div`
  position: absolute;
  bottom: 0;
  font-size: 30px;
  color: #3ec4cc;

  opacity: 0;
  transition: opacity 300ms;
  font-size: 30px;

  ${Container}:hover & {
    opacity: 1;
  }
`;

const Button = styled.button.attrs(() => ({
  type: 'button',
}))`
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  
  display: flex;
  background: transparent;
  border: none;
  color: #3ec4cc;
  cursor: pointer;
  
  
  :focus {
    outline: 0;
  }
`;

export const DeletePicture = styled(Button)``;

export const Placeholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 300px;
  background-color: grey;
  font-size: 90px;
`;
