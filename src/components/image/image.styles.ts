import styled from 'styled-components';

const StyledImage = styled.img<{
    width?: string;
    height?: string;
    offset?: string;
}>`
    width: ${(props) => props.width || "auto"};
    height: ${(props) => props.height || "auto"};
    object-fit: cover;
    object-position: 0 ${(props) => props.offset || "center"}
`;

export { StyledImage }