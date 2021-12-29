import { Alert } from "react-native";
import { render, fireEvent } from "@testing-library/react-native";
import StartQuiz from "../index";
import { MainContext } from "../../../contexts/MainContext";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "../../../routes/MainStack";

describe("StartQuiz", () => {
  const FakeContext = ({
    categories = [{ id: 10, name: "Teste" }],
    setUrlQuiz = (value: string) => {},
  }) => (
    <NavigationContainer>
      <MainContext.Provider
        value={{
          categories,
          setUrlQuiz,
        }}
      >
        <MyStack />
      </MainContext.Provider>
    </NavigationContainer>
  );

  jest.spyOn(Alert, "alert");
  const errorMessage = "Preencha todos os campos!";

  it("Should display error message when all empty inputs", () => {
    const { getByText } = render(<FakeContext />);

    const button = getByText("Start Game");

    fireEvent.press(button);

    expect(Alert.alert).toHaveBeenCalledWith(errorMessage);
  });

  it("Should display error message when only category is not empty", async () => {
    const { findAllByTestId, getByText } = render(<FakeContext />);

    const getSelectOfCategory = await findAllByTestId(
      "touchable-select-option"
    );

    const getFirstCategory = await findAllByTestId("touchable-select-option-0");

    await fireEvent.press(getSelectOfCategory[1]);
    await fireEvent.press(getFirstCategory[1]);

    // const selectedCategory = await findAllByTestId("touchable-select-text");
    // expect(selectedCategory[1].props.children).toEqual("Teste");

    const button = getByText("Start Game");
    fireEvent.press(button);

    expect(Alert.alert).toHaveBeenCalledWith(errorMessage);
  });

  it("Should display error message when only difficulty is not empty", async () => {
    const { findAllByTestId, getByText } = render(<FakeContext />);

    const touchableSelectDifficulty = await findAllByTestId(
      "touchable-select-option"
    );

    const getFirstDifficulty = await findAllByTestId(
      "touchable-select-option-0"
    );

    await fireEvent.press(touchableSelectDifficulty[2]);
    await fireEvent.press(getFirstDifficulty[2]);

    // const selectedCategory = await findAllByTestId("touchable-select-text");
    // expect(selectedCategory[2].props.children).toEqual("Easy");
    const button = getByText("Start Game");
    fireEvent.press(button);

    expect(Alert.alert).toHaveBeenCalledWith(errorMessage);
  });

  it("Should setUrlQuiz all inputs filled", async () => {
    const { findAllByTestId, getByText } = render(<FakeContext />);

    const getAllSelects = await findAllByTestId("touchable-select-option");

    const getAllSelectFirstOption = await findAllByTestId(
      "touchable-select-option-0"
    );

    await fireEvent.press(getAllSelects[1]);
    await fireEvent.press(getAllSelectFirstOption[1]);
    await fireEvent.press(getAllSelects[2]);
    await fireEvent.press(getAllSelectFirstOption[2]);
    await fireEvent.press(getAllSelects[3]);
    await fireEvent.press(getAllSelectFirstOption[3]);

    const button = getByText("Start Game");
    fireEvent.press(button);

    expect(Alert.alert).not.toHaveBeenCalledWith(errorMessage);
  });
});
