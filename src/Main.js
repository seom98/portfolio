import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/portfolio" element={<App />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Main;
