import Express from "express";
import path from "path";
import ReactDOM from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import App from "../src/App";

const server = Express();

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "..", "views"));
server.use(Express.static(path.join(__dirname, "..", "public")));

server.get("*", (req, res) => {
    const markup = ReactDOM.renderToString(
        <StaticRouter location={req.url}>
            <App />
        </StaticRouter>
    )
    res.render("index", { markup });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});