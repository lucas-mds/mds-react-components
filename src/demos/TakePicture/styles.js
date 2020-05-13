import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ImageBaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const StreamContainer = styled(ImageBaseContainer)``;

export const PreviewContainer = styled(ImageBaseContainer)``;

export const Title = styled.span`
  font-size: 16px;
`;
