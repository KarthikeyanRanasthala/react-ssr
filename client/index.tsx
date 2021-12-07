import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "../src/App";

const root = document.getElementById("root");

ReactDOM.hydrate(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    root
);