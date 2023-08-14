import Diaries from "./page/Diaries";
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";

import New from "./page/New";

function App() {

    return (
        <BrowserRouter>
            <div className="App">

                <Routes>
                    <Route path='/' element={<Diaries/>}/>
                    <Route path='/diaries/new' element={<New/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
