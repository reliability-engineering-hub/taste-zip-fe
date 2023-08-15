import DiaryItem from "./DiaryItem";
import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import {DiaryStateContext} from "../App";

const DiaryList = () => {
    const [diaries, setDiaries] = useState([]);
    const {addToDiaries} = React.useContext(DiaryStateContext);

    useEffect(() => {
        async function getDiaries() {
            const endpoint = process.env.REACT_APP_BACKEND_ENDPOINT + "/diaries";
            const response = await axios.get(endpoint)
            setDiaries(response.data);
            addToDiaries(response.data.targets);
        }

        getDiaries();
    }, [])

    return (
        <div className="DiaryList">
            { diaries.targets &&
                diaries.targets.map((it) => (
                    <DiaryItem
                        key={it.id}
                        diary={it}
                    />
                ))
            }
        </div>
    );
}


export default DiaryList;