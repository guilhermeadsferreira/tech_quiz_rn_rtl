import React from "react";
import { Modal } from "react-native";
import { Wrapper, Container, EndGameText } from "./styles";
import LottieView from "lottie-react-native";
import TouchableOption from "../TouchableOption";
import { useNavigation, StackActions } from "@react-navigation/native";
import { useGlobalStore } from "../../stores/global";

const EndGameModal: React.FC<{ show?: boolean }> = ({ show }) => {
  const navigation = useNavigation();
  const setShowGameOverModal = useGlobalStore(
    (state) => state.setShowGameOverModal
  );

  return (
    <Modal visible={show} transparent>
      <Wrapper>
        <Container>
          <EndGameText>Suas vidas acabaram!</EndGameText>
          <LottieView
            source={require("../../assets/animations/game-over.json")}
            autoPlay
            loop
            style={{
              height: 180,
              width: 180,
            }}
          />
          <TouchableOption
            label="Reset Quiz"
            onPress={() => {
              setShowGameOverModal(false);
              navigation.dispatch(StackActions.replace("StartQuiz", {}));
            }}
            marginTop={12}
            marginRight={0}
            marginBottom={12}
            paddingHorizontal={20}
            borderColor="black"
            alignSelf="center"
            textColor="black"
          />
        </Container>
      </Wrapper>
    </Modal>
  );
};

export default EndGameModal;
