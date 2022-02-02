import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const PageContainer = styled(SafeAreaView)`
  flex: 1;
  ${({ theme: { APP_PRIMARY_COLOR } }) => `
    background-color: ${APP_PRIMARY_COLOR};
  `}
`;

export const QuestionIndicator = styled.Text`
  color: white;
  font-size: 16px;
`;

export const LivesText = styled.Text`
  color: white;
  font-size: 20px;
  align-self: center;
  margin-top: 4%;
`;

export const WrapperHearts = styled.View`
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  width: 40%;
  margin-top: 2%;
  margin-bottom: 6%;
`;

export const Heart = styled.Image`
  height: 30px;
  width: 30px;
`;

export const WrapperOptions = styled.View`
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  border-width: 1px;
  width: 100%;
  height: 40px;
`;

export const Question = styled.Text`
  ${({ theme: { POPPINS_400 } }) => `
    font-family: ${POPPINS_400};
  `}
  width: 95%;
  align-self: center;
  color: white;
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: justify;
`;

export const HeaderQuiz = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  align-self: center;
  margin-top: 12px;
  margin-bottom: 10px;
`;

export const WrapperQuestion = styled.View`
  width: 95%;
  align-self: center;
  background-color: #57606f;
  border-radius: 8px;
`;
