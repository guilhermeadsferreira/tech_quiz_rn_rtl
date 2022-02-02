import styled from "styled-components/native";
import { APP_FONTS } from "../../config/theme/fonts-family";

export interface IStylizedText {
  fontFamily: APP_FONTS;
}

export const CustomText = styled.Text<IStylizedText>``;
