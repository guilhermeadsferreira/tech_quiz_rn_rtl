import React from "react";
import { Modal } from "react-native";
import { Container } from "./styles";
import LottieView from "lottie-react-native";

interface ILoading {
  show: boolean;
}

const Loading: React.FC<ILoading> = ({ show }) => {
  return (
    <Modal visible={show} animationType="slide">
      <Container>
        <LottieView
          source={require("../../assets/animations/loading.json")}
          autoPlay
          loop
          style={{
            height: 180,
            width: 180,
          }}
        />
      </Container>
    </Modal>
  );
};

export default Loading;
