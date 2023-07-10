import styled from "styled-components";
import { Column, Row } from "../../components";

const HomeColumn = styled(Column)`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const HomeRow = styled(Row)`
  width: 100%;
  justify-content: center;
  padding: 3rem 3rem;
  gap: 3rem;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
  padding: 0;
  color: #fff;
`;

export { HomeColumn, HomeRow, Subtitle };
