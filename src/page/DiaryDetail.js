import Header from "../component/Header";
import CustomButton from "../component/CustomButton";
import {useNavigate} from "react-router-dom";

const DiaryDetail = () => {
    const navigate = useNavigate();
    return (
        <div className="DiaryDetail">
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
                        text={"수정"}
                        type={"modify"}
                        onClick={() => {}}
                    />}
            />
        </div>
    )
}

export default DiaryDetail