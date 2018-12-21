import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "../shared/App";

const reducer = (state, action) => {
  if (action.type == "ADD_COMMENT") {
    return { comments: [...state.comments, action.comment] };
  }
  return state;
};

const store = createStore(reducer, { comments: ["Redux"] });
hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
