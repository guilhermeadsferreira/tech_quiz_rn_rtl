import React from "react";
import { CustomText, IStylizedText } from "./styles";

const StylizedText: React.FC<IStylizedText> = ({ fontFamily, ...props }) => {
  return <CustomText {...props} />;
};

export default StylizedText;
