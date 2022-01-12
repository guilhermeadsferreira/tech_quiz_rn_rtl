import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { MainContextProvider } from "./contexts/MainContext";
import MyStack from "./routes/MainStack";

const src: React.FC = () => {
  return (
    <NavigationContainer>
      <MainContextProvider>
        <StatusBar style="light" />
        <MyStack />
      </MainContextProvider>
    </NavigationContainer>
  );
};

export default src;
