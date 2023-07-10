import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  padding: 50px;
  justify-content: flex-end;
  align-items: baseline;

  & > *:first-child {
    margin-right: auto;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #fff;
`;

export { HeaderStyled, Title };
