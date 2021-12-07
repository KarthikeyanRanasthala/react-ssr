import Express from "express";
import path from "path";

const server = Express();

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));

server.get("*", (_, res) => {
    res.render("index");
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});