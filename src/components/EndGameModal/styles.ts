import styled from "styled-components/native";
import { Modal } from "react-native";

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const EndGameText = styled.Text`
  font-size: 15px;
  margin: 15px 0px;

  ${({ theme }) => `
    font-family: ${theme.POPPINS_400};
  `}
`;

export const Container = styled.View`
  width: 77%;
  background-color: white;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;
