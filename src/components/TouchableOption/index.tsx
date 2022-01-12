import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Touchable, OptionText } from "./styles";

interface ITouchableOptions extends TouchableOpacityProps {
  label: string;
}

const TouchableOption: React.FC<ITouchableOptions> = ({ label, ...props }) => {
  return (
    <Touchable {...props}>
      <OptionText>{label}</OptionText>
    </Touchable>
  );
};

export default TouchableOption;
