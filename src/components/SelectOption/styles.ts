import styled from "styled-components/native";
import { Animated } from "react-native";
import { POPPINS_400 } from "../../theme";

export const Container = styled(Animated.View)`
  width: 90%;
  align-self: center;
  margin-bottom: 10px;
  border-width: 1px;
  border-color: grey;
  border-radius: 8px;
`;

export const Label = styled.Text`
  font-family: ${POPPINS_400};
  font-size: 16px;
  color: white;
  padding-left: 2px;
`;

export const TouchableSelect = styled.TouchableOpacity`
  height: 25px;
  justify-content: center;
`;

export const SelectedText = styled.Text`
  flex: 1;
  padding-top: 2.5px;
  padding-left: 10px;
  color: white;
`;

export const WrapperOptions = styled.ScrollView``;
