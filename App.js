import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import MainNavigator from "./naviagtion/ShopNavigator";
import productsReducer from "./store/reducers/products";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
