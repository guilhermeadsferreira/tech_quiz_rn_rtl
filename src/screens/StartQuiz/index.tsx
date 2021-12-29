import React, { useContext, useState } from "react";
import { Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IOption } from "../../api/services/OpenTrivia";
import SelectOption from "../../components/SelectOption";
import {
  BASE_URL,
  arrayNumberOfQuestions,
  arrayDifficulties,
  arrayTypes,
  queryParams,
} from "../../config";
import { MainContext } from "../../contexts/MainContext";
import { mustMountQuizURL } from "../../utils/mustMountQuizURL";
import {
  Container,
  Title,
  WrapperHearts,
  WrapperOptions,
  Heart,
  TouchableOption,
  OptionText,
} from "./styles";

const StartQuiz: React.FC = ({ navigation }) => {
  const { categories, setUrlQuiz } = useContext(MainContext);
  const [numberOfQuestions, setNumberOfQuestions] = useState<IOption>({
    id: "10",
    name: "10",
  });
  const [category, setCategory] = useState<IOption>({} as IOption);
  const [difficulty, setDifficulty] = useState<IOption>({} as IOption);
  const [type, setType] = useState<IOption>({} as IOption);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#D1E8E4" }}>
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
        <TouchableOption
          onPress={() => {
            if (
              !numberOfQuestions.id ||
              !category.id ||
              !difficulty.id ||
              !type.id
            ) {
              Alert.alert("Preencha todos os campos!");
              return;
            }

            let url = BASE_URL;
            [numberOfQuestions, category, difficulty, type].map(
              (item, index) => {
                const getQueryParamName = queryParams[index];
                const queryParam = `${getQueryParamName}=${String(item.id)}`;
                url = mustMountQuizURL(url, queryParam);
              }
            );
            setUrlQuiz(url);
            navigation.navigate("Quiz");
          }}
        >
          <OptionText>Start Game</OptionText>
        </TouchableOption>
      </Container>
    </SafeAreaView>
  );
};

export default StartQuiz;
