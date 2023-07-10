import styled from "styled-components";

const StyledInput = styled.input`
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #49505c;
  color: #fff;

  &:focus {
    outline: none;
    border: none;

    &::placeholder {
      color: transparent;
    }
  }
`;

export { StyledInput };
