import DiaryItem from "./DiaryItem";
import axios from "axios";
import {useEffect, useState} from "react";

const DiaryList = () => {

    const [diaries, setDiaries] = useState([]);

    useEffect(() => {
        async function getDiaries() {
            const endpoint = process.env.REACT_APP_BACKEND_ENDPOINT + "/diaries";
            const response = await axios.get(endpoint)
            setDiaries(response.data);
        }

        getDiaries();
    }, [])

    return (
        <div className="DiaryList">
            { diaries.targets &&
                diaries.targets.map((it) => (
                    <DiaryItem key={it.id} diary={it}/>
                ))
            }
        </div>
    );
}


export default DiaryList;