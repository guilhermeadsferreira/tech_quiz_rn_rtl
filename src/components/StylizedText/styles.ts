import styled from "styled-components/native";
import { APP_FONTS } from "../../theme";

export interface IStylizedText {
  fontFamily: APP_FONTS;
}

export const CustomText = styled.Text<IStylizedText>``;
