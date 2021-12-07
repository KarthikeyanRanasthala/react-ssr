import ReactDOM from "react-dom";

import App from "../src/App";

const root = document.getElementById("root");

ReactDOM.hydrate(<App />, root);