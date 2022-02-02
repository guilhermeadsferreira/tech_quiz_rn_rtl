import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as React from "react";

export default function useLoadResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      try {
        await Font.loadAsync({
          ...Ionicons.font,
          "poppins-regular": require("../assets/fonts/Poppins-Regular.ttf"),
          "raleway-bold": require("../assets/fonts/Raleway-Bold.ttf"),
          "poppins-medium": require("../assets/fonts/Poppins-Medium.ttf"),
          "poppins-bold": require("../assets/fonts/Poppins-Bold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    })();
  }, []);

  return isLoadingComplete;
}
