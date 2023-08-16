import Header from "../component/Header";
import CustomButton from "../component/CustomButton";
import {useNavigate, useParams} from "react-router-dom";
import EditDiary from "../component/EditDiary";
import {useContext} from "react";
import {DiaryStateContext} from "../App";

const Edit = () => {
    const navigate = useNavigate();
    const state = useContext(DiaryStateContext);
    const {id} = useParams();
    const diaries = state.globalDiaries.value
    const diary = diaries.find((it) => parseInt(it.id) === parseInt(id));

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
                        text={"삭제"}
                        type={"delete"}
                        onClick={() => {}}
                    />}
            />
            {diary && <EditDiary diary={diary} isEdit={true}/>}
        </div>
    )
}

export default Edit;