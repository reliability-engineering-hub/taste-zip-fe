import Header from "../component/Header";
import CustomButton from "../component/CustomButton";
import {useNavigate, useParams} from "react-router-dom";
import {useContext} from "react";
import {DiaryStateContext} from "../App";
import EditDiary from "../component/EditDiary";

const Edit = () => {
    const navigate = useNavigate();
    const state = useContext(DiaryStateContext);
    const {id} = useParams();
    const diaries = state.globalDiaries.value
    const diary = diaries.find((it) => parseInt(it.id) === parseInt(id));

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
            {
                diary && <EditDiary diary={diary} isEdit={false}/>
            }
        </div>
    )
}

export default Edit;