import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 2rem 0.25rem;
  height: calc(100vh - 64px);
  background-color: ${({ theme }) => theme.color.secondaryBackground};
`;