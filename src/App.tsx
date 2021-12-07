import { Routes, Route } from "react-router-dom";

import IndexPage from "./pages/Index";
import AnotherPage from "./pages/Another";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/another" element={<AnotherPage />} />
        </Routes>
    )
};

export default App;