import Diaries from "./page/Diaries";
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import New from "./page/New";
import Diary from "./page/Diary";
import Edit from "./page/Edit";

export const DiaryStateContext = React.createContext();

function App() {
    const [globalDiaries, setGlobalDiaries] = React.useState([]);

    function addToDiaries(newDiary) {
        setGlobalDiaries(prevState => ({
            ...prevState,
            value: newDiary
        }));
    }

    return (
        <DiaryStateContext.Provider value={{globalDiaries, addToDiaries}}>
            <BrowserRouter>
                <div className="App">
                    <Routes>
                        <Route path='/' element={<Diaries/>}/>
                        <Route path='/diaries/new' element={<New/>}/>
                        <Route path='/diaries/:id' element={<Diary/>}/>
                        <Route path='/diaries/:id/edit' element={<Edit/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </DiaryStateContext.Provider>
    );
}

export default App;
