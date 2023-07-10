import styled from "styled-components";

const StyledButton = styled.button`
  color: #fff;
  text-decoration: none;
  margin-left: 20px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  border: none;
  background-color: transparent;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.95);
  }

  &.open {
    color: #aaa;
  }
`;

export { StyledButton };
