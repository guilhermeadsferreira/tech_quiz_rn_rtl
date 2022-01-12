import React from "react";
import { ActivityIndicator, Modal } from "react-native";
import { Container } from "./styles";

interface ILoading {
  show: boolean;
}

const Loading: React.FC<ILoading> = ({ show }) => {
  return (
    <Modal visible={show} animationType="slide">
      <Container>
        <ActivityIndicator size="large" color="blue" />
      </Container>
    </Modal>
  );
};

export default Loading;
