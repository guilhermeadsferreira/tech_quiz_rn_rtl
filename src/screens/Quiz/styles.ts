import styled from "styled-components/native";
import { POPPINS_400 } from "../../theme";

export const WrapperHearts = styled.View`
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  width: 40%;
  margin-top: 4%;
  margin-bottom: 4%;
`;

export const Heart = styled.Image`
  height: 30px;
  width: 30px;
`;

export const WrapperOptions = styled.View`
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  border-width: 1px;
  width: 100%;
  height: 40px;
`;

export const Question = styled.Text`
  font-family: ${POPPINS_400};
  width: 95%;
  align-self: center;
  color: white;
  text-align: justify;
  margin-top: 4%;
  font-size: 16px;
`;
