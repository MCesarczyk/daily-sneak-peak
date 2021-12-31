import styled from "styled-components";

export const ImageWrapper = styled.div`
  width: 8rem;
  display: block;
  overflow: hidden;
  aspect-ratio: 2/3;
  grid-area: image;
`;

export const StyledImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 5px;
`;

export const PlaceholderImage = styled.div`
  width: 100%;
  flex-grow: 0;
  border-radius: 5px;
`;