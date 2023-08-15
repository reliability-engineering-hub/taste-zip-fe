import Diaries from "./page/Diaries";
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";

import New from "./page/New";
import DiaryDetail from "./page/DiaryDetail";

function App() {

    return (
        <BrowserRouter>
            <div className="App">

                <Routes>
                    <Route path='/' element={<Diaries/>}/>
                    <Route path='/diaries/new' element={<New/>}/>
                    <Route path='/diaries/:id' element={<DiaryDetail/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
