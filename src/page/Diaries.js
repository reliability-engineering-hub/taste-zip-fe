import Header from "../component/Header";
import HamburgerButton from "../component/HamburgerButton";
import Sidebar from "../component/Sidebar";
import {useState} from "react";

const Diaries = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    return <div className="Diaries">
        <Header
            headText={"taste.zip"}
            leftChild={<HamburgerButton
                onToggle={handleToggle}
                isActive={isOpen}/>}
        />
        {isOpen && <Sidebar />}
        <h2>다이어리 목록 페이지</h2>
    </div>
}

export default Diaries;