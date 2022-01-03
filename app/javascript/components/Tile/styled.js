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
  grid-template-areas: 
  "image name"
  "image name"
  "image list"
  "footer footer";
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto 1fr;
  gap: 2rem;

  @media(max-width: ${({ theme }) => theme.breakpoint.lg}) {
    grid-template-areas: 
      "image name"
      "image name"
      "list list"
      "footer footer";
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.md}) {
    grid-template-areas: 
    "image image"
    "name name"
    "list list"
    "footer footer";
  }
`;