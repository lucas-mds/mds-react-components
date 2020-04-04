import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  background-color: white;
  color: black;
  top: ${(props) => props.position === 'top' && '0'};
  bottom: ${(props) => props.position === 'bottom' && '0'};
  left: ${(props) => props.align === 'left' && '0'};
  right: ${(props) => props.align === 'right' && '0'};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;  
  background-color: #e4e4e4;
`;

export const Content = styled.div`
  display: ${(props) => props.minimized && 'none'};
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
