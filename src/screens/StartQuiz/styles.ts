import styled from "styled-components/native";
import { POPPINS_400 } from "../../theme";

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Title = styled.Text`
  font-family: ${POPPINS_400};
  font-size: 22px;
  color: white;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const TouchableOption = styled.TouchableOpacity`
  border-width: 1px;
  align-self: flex-end;
  margin-top: 12px;
  margin-right: 12px;
  padding-horizontal: 8px;
`;

export const OptionText = styled.Text``;
