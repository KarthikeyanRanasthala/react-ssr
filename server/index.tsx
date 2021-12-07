import Express from "express";
import path from "path";
import fs from "fs";
import ReactDOM from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import App from "../src/App";

const server = Express();

server.use(Express.static(path.join(__dirname, "..", "public")));

const html = fs.readFileSync(path.join(__dirname, "index.html"), { encoding: 'utf-8' });

server.get("*", (req, res) => {
    const markup = ReactDOM.renderToString(
        <StaticRouter location={req.url}>
            <App />
        </StaticRouter>
    )
    res.send(html.replace("<!-- markup -->", markup));
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});