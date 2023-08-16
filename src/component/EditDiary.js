import Items from "./Items";
import {findEvaluationById} from "../util/Evaluation";

const EditDiary = ({diary, isEdit}) => {
    const evaluation = findEvaluationById(diary.evaluation);
    return (
        <div>
            <div className="input_box">
                <input
                    type="text"
                    value={diary.title}
                    disabled={!isEdit}
                />
            </div>
            <div>
                <input
                    type="date"
                    value={diary.eatDate}
                    disabled={!isEdit}
                />
            </div>
            <div>
                <input
                    type="text"
                    value={diary.restaurant.name}
                    disabled={!isEdit}
                />
            </div>
            <div>
                <Items
                    type="Evaluation"
                    key={diary.evaluation}
                    {...evaluation}
                    onClick={() => {}}
                />
            </div>
            <div>
                <textarea
                    value={diary.content}
                    disabled={!isEdit}
                />
            </div>
        </div>
    )
}

export default EditDiary;