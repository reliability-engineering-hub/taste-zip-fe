import Diaries from "./page/Diaries";
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useState} from "react";
import Header from "./component/Header";
import HamburgerButton from "./component/HamburgerButton";
import Sidebar from "./component/Sidebar";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <BrowserRouter>
            <div className="App">
                <Header
                    headText={"taste.zip"}
                    leftChild={<HamburgerButton onToggle={handleToggle} isActive={isOpen}/>}
                />
                {isOpen && <Sidebar />}
                <Routes>
                    <Route path='/' element={<Diaries/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
