import styled from "styled-components";

export const Label = styled.span`
    color: ${({ theme }) => theme.color.labelText};
    font-style: italic;
    font-size: ${props => props.size || 1}rem;
    margin-top: 0.25rem;
    margin-right: ${props => props.size || 1}rem;
    min-width: ${props => props.minWidth}rem;
    text-align: ${props => props.alignment};
`;