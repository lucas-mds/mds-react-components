import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 400px;
  height: 300px;
  background-color: grey;
`;

export const CameraStream = styled.video`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const Controllers = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 300ms;

  :hover {
    opacity: 1
  }
`;


const Button = styled.button.attrs(() => ({
  type: 'button',
}))`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  
  display: flex;
  background: transparent;
  border: none;
  color: #3ec4cc;
  
  
  :focus {
    outline: 0;
  }
`;

export const ToggleVideo = styled(Button)``;
