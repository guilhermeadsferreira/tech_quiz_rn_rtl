import React from "react";
import { Animated, Easing } from "react-native";
import { IOption } from "../../services/OpenTrivia/types";
import {
  Container,
  Label,
  TouchableSelect,
  SelectedText,
  WrapperOptions,
} from "./styles";

interface ISelectOption {
  label: string;
  placeholder?: string;
  options: IOption[];
  value: IOption;
  setValue: (value: IOption) => void;
}

const SelectOption: React.FC<ISelectOption> = ({
  label,
  placeholder,
  options,
  value,
  setValue,
}) => {
  const showOptions = React.useRef(false);
  const animatedHeightContainer = React.useRef(new Animated.Value(0)).current;
  const auxScrollHeight = options.length * 25;
  const scrollHeight = auxScrollHeight > 75 ? 75 : auxScrollHeight;

  const handleShowOptions = () => {
    if (showOptions.current) {
      Animated.timing(animatedHeightContainer, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
      showOptions.current = false;
      return;
    }

    Animated.timing(animatedHeightContainer, {
      toValue: scrollHeight,
      duration: 500,
      useNativeDriver: false,
    }).start();
    showOptions.current = true;
    return;
  };

  return (
    <Container>
      <Label>{label}</Label>
      <TouchableSelect
        onPress={handleShowOptions}
        testID="touchable-select-option"
      >
        <SelectedText testID="touchable-select-text">
          {value?.name || placeholder}
        </SelectedText>
      </TouchableSelect>
      <Animated.View
        style={{
          height: animatedHeightContainer,
        }}
      >
        <WrapperOptions>
          {options?.map((option, index) => (
            <TouchableSelect
              key={option.id}
              onPress={() => {
                setValue(option);
                handleShowOptions();
              }}
              testID={`touchable-select-option-${index}`}
            >
              <SelectedText>{option.name}</SelectedText>
            </TouchableSelect>
          ))}
        </WrapperOptions>
      </Animated.View>
    </Container>
  );
};

export default SelectOption;
