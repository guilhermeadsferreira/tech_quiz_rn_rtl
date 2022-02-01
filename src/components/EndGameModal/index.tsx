import React from "react";
import { Modal, View } from "react-native";
import { WrapperModal, Container } from "./styles";

const EndGameModal: React.FC<{ show?: boolean }> = ({ show }) => {
  return (
    <Modal visible={show}>
      <Container />
    </Modal>
  );
};

export default EndGameModal;
