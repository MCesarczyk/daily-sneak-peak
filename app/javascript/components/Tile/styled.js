import styled from "styled-components";

export const StyledTile = styled.div`
  width: 80%;
  min-width: 240px;
  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.background};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 0.5rem;
  padding: 2rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  grid-template-areas: 
      "image name"
      "image list";

  @media(max-width: ${({ theme }) => theme.breakpoint.md}) {
    grid-template-areas: 
      "image name"
      "list list";
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.sm}) {
    grid-template-columns: 1fr;
    grid-template-areas: 
      "image"
      "name"
      "list";
  }
`;