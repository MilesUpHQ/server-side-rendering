import express from "express";
import cors from "cors";
import React from "react";
import serialize from "serialize-javascript";
import { renderToString } from "react-dom/server";
import App from "../shared/App";

const app = express();

app.use(cors());
app.use(express.static("public"));

const markup = renderToString(<App />);
const comments = ["Comment from server 1", "Comment from server 2"];
app.get("*", (request, response, next) => {
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
