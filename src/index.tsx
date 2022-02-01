import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { MainContextProvider } from "./contexts/MainContext";
import MyStack from "./routes/MainStack";
import { ThemeProvider } from "styled-components";
import defaultTheme from "./config/theme";

const src: React.FC = () => {
  return (
    <NavigationContainer>
      <MainContextProvider>
        <StatusBar style="light" />
        <ThemeProvider theme={defaultTheme}>
          <MyStack />
        </ThemeProvider>
      </MainContextProvider>
    </NavigationContainer>
  );
};

export default src;
