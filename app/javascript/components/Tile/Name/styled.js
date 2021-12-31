import styled from "styled-components";

export const TitleFieldset = styled.div`
  grid-area: name;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.color.text};
    font-weight: 700;
    font-size: 2rem;
    line-height: 1.3;
    margin-top: 0;
    margin-bottom: 1.5rem;
`;

export const SubTitle = styled.span`
    color: ${({ theme }) => theme.color.secondaryText};
    font-weight: 500; 
    font-size: 1.5rem;
    line-height: 1.57;
    margin-top: 0;
    margin-bottom: 1rem;
`;

export const TitleLabel = styled.span`
    color: ${({ theme }) => theme.color.labelText};
    font-style: italic;
    font-size: 0.75rem;
    margin-top: 0.25rem;
    margin-right: 0.75rem;
`;