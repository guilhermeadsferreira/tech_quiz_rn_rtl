import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Touchable, OptionText, ITouchable } from "./styles";

interface ITouchableOptions extends TouchableOpacityProps, ITouchable {
  label: string;
}

const TouchableOption: React.FC<ITouchableOptions> = ({
  label,
  marginTop = 12,
  marginRight = 12,
  ...props
}) => {
  return (
    <Touchable marginTop={marginTop} marginRight={marginRight} {...props}>
      <OptionText>{label}</OptionText>
    </Touchable>
  );
};

export default TouchableOption;
