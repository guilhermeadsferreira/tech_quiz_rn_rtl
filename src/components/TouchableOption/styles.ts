import styled from "styled-components/native";

export interface ITouchable {
  marginTop?: number;
  marginRight?: number;
}

export const Touchable = styled.TouchableOpacity<ITouchable>`
  border-width: 1px;
  border-color: white;
  border-radius: 8px;
  padding: 4px 10px;
  align-self: flex-end;
  padding-horizontal: 8px;

  ${({ marginTop, marginRight }) => `
      margin-top: ${marginTop}px;
      margin-right: ${marginRight}px;
  `}
`;

export const OptionText = styled.Text`
  color: #ced6e0;
`;
