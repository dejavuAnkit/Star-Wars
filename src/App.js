import React from "react";
import { Provider } from "react-redux";
import HomeRouting from "./components/routing/RoutingComponent";

import * as styles from "./App.css";
//store
import { store } from "./store/configureStore";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <HomeRouting></HomeRouting>
      </div>
    </Provider>
  );
};

export default App;
