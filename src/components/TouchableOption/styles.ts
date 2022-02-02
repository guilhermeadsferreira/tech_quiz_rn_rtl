import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

export interface ITouchable {
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  borderColor?: string;
  alignSelf?: "flex-end" | "center";
  paddingHorizontal?: number;
}

export interface IOptionText {
  textColor?: string;
}

export interface ITouchableOptions
  extends TouchableOpacityProps,
    ITouchable,
    IOptionText {
  label: string;
}

export const Touchable = styled.TouchableOpacity<ITouchable>`
  border-width: 1px;
  border-radius: 8px;

  ${({
    marginTop,
    marginRight,
    borderColor,
    alignSelf,
    paddingHorizontal,
    marginBottom,
  }) => `
      margin-top: ${marginTop}px;
      margin-right: ${marginRight}px;
      margin-bottom: ${marginBottom}px;
      border-color: ${borderColor};
      align-self: ${alignSelf};
      padding: 4px ${paddingHorizontal}px;
  `}
`;

export const OptionText = styled.Text<IOptionText>`
  ${({ textColor }) => `
    color: ${textColor || "#ced6e0"};
  `}
`;
