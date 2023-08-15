import Header from "../component/Header";
import NewDiary from "../component/NewDiary";
import {useNavigate} from "react-router-dom";
import CustomButton from "../component/CustomButton";

const New = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header
                headText={"taste.zip"}
                leftChild={
                <CustomButton
                    text={"<"}
                    type={"back"}
                    onClick={() => navigate(-1)}
                />}
                rightChild={
                <CustomButton
                        text={"저장"}
                        type={"save"}
                />}
            />
            <NewDiary />
        </div>
    );
}

export default New;