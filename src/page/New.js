import Header from "../component/Header";
import NewDiary from "../component/NewDiary";
import {useNavigate} from "react-router-dom";
import HeaderButton from "../component/HeaderButton";

const New = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header
                headText={"taste.zip"}
                leftChild={<HeaderButton
                    text={"<"}
                    type={"back"}
                    onClick={() => navigate(-1)}
                />}
                rightChild={<HeaderButton
                        text={"저장"}
                        type={"save"}
                />}
            />
            <NewDiary />
        </div>
    );
}

export default New;