import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainContextProvider } from "./contexts/MainContext";
import MyStack from "./routes/MainStack";

const src: React.FC = () => {
  return (
    <NavigationContainer>
      <MainContextProvider>
        <MyStack />
      </MainContextProvider>
    </NavigationContainer>
  );
};

export default src;
