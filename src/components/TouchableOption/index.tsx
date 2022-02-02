import React from "react";
import { Touchable, OptionText, ITouchableOptions } from "./styles";

const TouchableOption: React.FC<ITouchableOptions> = ({
  label,
  marginTop = 12,
  marginRight = 12,
  marginBottom = 0,
  borderColor = "white",
  alignSelf = "flex-end",
  paddingHorizontal = 10,
  textColor,
  ...props
}) => {
  return (
    <Touchable
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      borderColor={borderColor}
      alignSelf={alignSelf}
      paddingHorizontal={paddingHorizontal}
      {...props}
    >
      <OptionText textColor={textColor}>{label}</OptionText>
    </Touchable>
  );
};

export default TouchableOption;
