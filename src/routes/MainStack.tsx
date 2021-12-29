import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartQuiz from "../screens/StartQuiz";
import Quiz from "../screens/Quiz";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="StartQuiz" component={StartQuiz} />
      <Stack.Screen name="Quiz" component={Quiz} />
    </Stack.Navigator>
  );
}

export default MyStack;
