import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "./Header";
import { client } from "./services/graphql";
import { ApolloProvider } from "@apollo/client";
import Login from "./Login";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        {/* <Header />
        <ApolloProvider client={client}>
        <App />
        </ApolloProvider> */}
        <Login />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
