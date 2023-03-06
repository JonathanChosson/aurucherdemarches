import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Error from "./Pages/Error"
import Histoire from "./Pages/Histoire"

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Error />} />
                    <Route path="/histoire" element={<Histoire />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
