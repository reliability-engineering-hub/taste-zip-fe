import Header from "../component/Header";
import HamburgerButton from "../component/HamburgerButton";
import Sidebar from "../component/Sidebar";
import {useState} from "react";
import DiaryList from "../component/DiaryList";

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
        <DiaryList />
    </div>
}

export default Diaries;