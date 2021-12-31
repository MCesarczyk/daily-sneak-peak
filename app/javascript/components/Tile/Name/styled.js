import styled from "styled-components";

export const TitleFieldset = styled.div`
  grid-area: name;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.color.text}
    font-weight: 700;
    font-size: 2rem;
    line-height: 1.4;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
`;

export const SubTitle = styled.span`
    color: ${({ theme }) => theme.color.secondaryText}
    font-weight: 500; 
    font-size: 1.5rem;
    line-height: 1.2;
    margin-bottom: 1.25rem;
`;

export const TitleLabel = styled.div`
    color: ${({ theme }) => theme.color.labelText}
    font-style: "italic";
    font-size: 1rem;
    line-height: 1.2;
    margin-bottom: 1.25rem;
`;