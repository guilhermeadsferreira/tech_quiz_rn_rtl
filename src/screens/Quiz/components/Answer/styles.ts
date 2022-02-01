import styled from "styled-components/native";

interface ITouchable {
  borderColor: string;
}

export const Touchable = styled.TouchableOpacity<ITouchable>`
  border-width: 1.5px;
  width: 93%;
  align-self: center;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 8px;

  ${({ borderColor }) => `
    border-color: ${borderColor};
  `}
`;

export const AnswerText = styled.Text`
  color: white;
`;
