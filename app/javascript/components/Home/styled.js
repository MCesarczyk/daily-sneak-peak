import styled from "styled-components";

export const OuterWrapper = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.color.secondaryBackground};
`;