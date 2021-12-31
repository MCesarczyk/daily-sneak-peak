import styled from "styled-components";

export const Space = styled.div.attrs(({ direction }) => ({
  direction: direction === "vertical" ? "column" : "row",
}))`
  display: flex;
  flex-direction: direction;
  padding: 0.5rem 0.25rem;
`;