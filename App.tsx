import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import CounterPage from "./pages/CounterPage";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <CounterPage />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
