import Items from "./Items";
import {findEvaluationById} from "../util/Evaluation";
import {useNavigate} from "react-router-dom";

const DiaryItem = ({diary}) => {
    const navigate = useNavigate();

    const goDetail = () => {
        navigate(`diaries/${diary.id}`)
    }
    const evaluation = findEvaluationById(diary.evaluation);
    return (
        <div
            className="DiaryItem"
            onClick={goDetail}>
            <div className="RestaurantName">{diary.restaurant.name}</div>
            <div className="DiaryTitle">{diary.title}</div>
            <div className="EatDateAndEvaluation">
                <div className="EatDate">{diary.eatDate}</div>
                <div className="EvaluationByMainPage">
                    <Items
                        type={"Evaluation"}
                        key={diary.evaluation}
                        {...evaluation}
                        onClick={goDetail}
                    />
                </div>
            </div>
        </div>
    )
}

export default DiaryItem;