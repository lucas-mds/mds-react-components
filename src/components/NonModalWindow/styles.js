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

export const Content = styled.div`
  display: ${(props) => props.minimized && 'none'};
`;
