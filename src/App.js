import React from "react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import Routers from "./routers";
import { Provider } from "react-redux";
import store from "./store";

const engine = new Styletron();

function App() {
  return (
    <Provider store={store}>
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <Routers />
        </BaseProvider>
      </StyletronProvider>
    </Provider>
  );
}

export default App;
