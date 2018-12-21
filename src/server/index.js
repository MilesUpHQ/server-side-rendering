import express from "express";
import cors from "cors";
import React from "react";
import serialize from "serialize-javascript";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "../shared/App";

const app = express();

app.use(cors());
app.use(express.static("public"));

const comments = ["Comment from server 1", "Comment from server 2"];

app.get("*", (request, response, next) => {
  const reducer = (state, action) => {
    return state;
  };
  const store = createStore(reducer, { comments: ["Redux"] });

  const context = {};
  const markup = renderToString(
    <Provider store={store}>
      <StaticRouter location={request.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  response.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>SSR with RR</title>
          <script src="/bundle.js" defer></script>
          <script>window.__DATA__ = ${serialize(comments)}</script>
        </head>
        <body>
          <div id="app">${markup}</div>
        </body>
      </html>
    `);
});

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`);
});
