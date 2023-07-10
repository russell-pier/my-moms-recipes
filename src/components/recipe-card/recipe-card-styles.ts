import styled from "styled-components";
import { Row } from "../flex";

const Card = styled.div`
  width: 300px;
  height: 400px;
  background-color: whitesmoke;
`;

const Content = styled.div`
  padding: 20px;
  height: 200px;
  position: relative;
`;

const BottomRow = styled(Row)`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  margin: auto;
  justify-content: space-between;
  align-items: space-between;
`;

export { Card, Content, BottomRow };
