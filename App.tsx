import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import CounterPage from "./pages/CounterPage";

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <CounterPage />
    </SafeAreaView>
  );
};

export default App;
