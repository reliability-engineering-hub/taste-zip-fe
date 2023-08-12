import Diaries from "./page/Diaries";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path='/' element={<Diaries/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
