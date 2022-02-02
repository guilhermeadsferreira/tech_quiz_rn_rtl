import React, { useState } from "react";
import { Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IOption } from "../../services/OpenTrivia/types";
import SelectOption from "../../components/SelectOption";
import TouchableOption from "../../components/TouchableOption";
import {
  BASE_URL,
  arrayNumberOfQuestions,
  arrayDifficulties,
  arrayTypes,
  queryParams,
} from "../../config";
import { mustMountQuizURL } from "../../utils/mustMountQuizURL";
import { Container, Title } from "./styles";
import { APP_PRIMARY_COLOR } from "../../config/theme/colors";
import { useQuizStore } from "../../stores/quiz";
import shallow from "zustand/shallow";

interface IStartQuiz {
  navigation?: any;
}

const StartQuiz: React.FC<IStartQuiz> = ({ navigation }) => {
  const [categories, fetchQuizQuestions] = useQuizStore(
    (state) => [state.categories, state.fetchQuizQuestions],
    shallow
  );
  const [numberOfQuestions, setNumberOfQuestions] = useState<IOption>({
    id: "10",
    name: "10",
  });
  const [category, setCategory] = useState<IOption>({} as IOption);
  const [difficulty, setDifficulty] = useState<IOption>({} as IOption);
  const [type, setType] = useState<IOption>({} as IOption);

  const handleStartGame = () => {
    if (!numberOfQuestions.id || !category.id || !difficulty.id || !type.id) {
      Alert.alert("Preencha todos os campos!");
      return;
    }

    let url = BASE_URL;
    [numberOfQuestions, category, difficulty, type].map((item, index) => {
      const getQueryParamName = queryParams[index];
      const queryParam = `${getQueryParamName}=${String(item.id)}`;
      url = mustMountQuizURL(url, queryParam);
    });
    fetchQuizQuestions(url);
    navigation.navigate("Quiz");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: APP_PRIMARY_COLOR }}>
      <Container bounces={false}>
        <Title>Tech Quiz</Title>
        <SelectOption
          label="Number of Questions:"
          options={arrayNumberOfQuestions}
          value={numberOfQuestions}
          setValue={setNumberOfQuestions}
        />
        <SelectOption
          label="Select Category:"
          placeholder="Any Category"
          options={categories}
          value={category}
          setValue={setCategory}
        />
        <SelectOption
          label="Select Difficulty:"
          placeholder="Any Difficulty"
          options={arrayDifficulties}
          value={difficulty}
          setValue={setDifficulty}
        />
        <SelectOption
          label="Select Type:"
          placeholder="Any Type"
          options={arrayTypes}
          value={type}
          setValue={setType}
        />
        <TouchableOption onPress={handleStartGame} label="Start Game" />
      </Container>
    </SafeAreaView>
  );
};

export default StartQuiz;
