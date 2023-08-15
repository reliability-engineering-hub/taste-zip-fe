import Header from "../component/Header";
import NewDiary from "../component/NewDiary";
import {useNavigate} from "react-router-dom";
import CustomButton from "../component/CustomButton";
import {useState} from "react";
import axios from "axios";


const New = () => {
    const navigate = useNavigate();

    const [diary, setDiary] = useState({
        title: '',
        eatDate: '',
        restaurant: {
            name: '',
            address: '',
            image: '',
        },
        content: '',
        evaluation: '',
    })

    const handleNewDiary = (data) => {
        setDiary(data);
    }

    // TODO validation 추가 필요
    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = process.env.REACT_APP_BACKEND_ENDPOINT + "/diaries";

        try {
            const response = await axios.post(endpoint, diary)
            console.log(response.status)
            if (response.status === 201) {
                console.log("일기 저장 성공")
                navigate('/', {replace: true});
            }
        } catch (error) {
            console.error("저장 실패 : ", error);
        }
    }

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
                        onClick={handleSubmit}
                    />}
            />
            <NewDiary onDataUpdate={handleNewDiary}/>
        </div>
    );
}

export default New;