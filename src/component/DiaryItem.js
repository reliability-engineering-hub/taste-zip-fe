import Items from "./Items";
import {findEvaluationById} from "../util/Evaluation";

const DiaryItem = ({diary}) => {
    const evaluation = findEvaluationById(diary.evaluation);
    console.log(evaluation)
    return (
        <div className="DiaryItem">
            <div className="RestaurantName">{diary.restaurant.name}</div>
            <div className="DiaryTitle">{diary.title}</div>
            <div className="EatDateAndEvaluation">
                <div className="EatDate">{diary.eatDate}</div>
                <div className="EvaluationByMainPage">
                    <Items
                        type={"Evaluation"}
                        key={diary.evaluation}
                        {...evaluation}
                        onClick={() => {}}
                    />
                </div>
            </div>
        </div>
    )
}

export default DiaryItem;