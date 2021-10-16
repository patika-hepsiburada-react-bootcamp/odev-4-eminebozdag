import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { weatherApiClient } from "./services/weather-service";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={weatherApiClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
