import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.secondaryBackground};
`;

export const StyledTile = styled.div`
  width: 80%;
  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.background};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 0.5rem;
  padding: 2rem;
  margin: 0 auto;
  margin-top: 2rem;
  display: grid;
  grid-template-areas: 
      "image name"
      "image name"
      "image list";

  @media(max-width: ${({ theme }) => theme.breakpoint.md}) {
    grid-template-areas: 
      "image name"
      "image name"
      "list list";
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.sm}) {
    grid-template-areas: 
      "image image"
      "name name"
      "list list";
  }
`;