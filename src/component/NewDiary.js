import {useCallback, useState} from "react";
import Items from "./Items";
import {evaluations} from "../util/Evaluation";
import CustomButton from "./CustomButton";
import {meals} from "../util/Meal";


const NewDiary = ({onDataUpdate}) => {

    const [meal, setMeal] = useState(1);
    const [evaluation, setEvaluation] = useState(3);
    const [newDiary, setNewDairy] = useState({
        title: '',
        eatDate: '',
        restaurant : {
            name: 'dummy',
            address: 'dummy',
            image: 'dummy',
        },
        content: '',
        evaluation: '',
    })

    const handleClickMeal = (mealId) => {
        setMeal(mealId);
        const updatedDiary = {...newDiary, evaluation: mealId};
        setNewDairy(updatedDiary)
        onDataUpdate(updatedDiary)
    }

    const handleClickEvaluation = (evaluationId) => {
        setEvaluation(evaluationId);
        const updatedDiary = {...newDiary, evaluation: evaluationId};

        setNewDairy(updatedDiary)
        onDataUpdate(updatedDiary)
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        const updatedDiary = {...newDiary, [name]: value};
        console.log(updatedDiary)
        setNewDairy(updatedDiary);

        onDataUpdate(updatedDiary)
    }

    return (
        <div className="DiaryEditor">
            <section>
                <input
                    className="DiaryTitle"
                    type="text"
                    placeholder="제목을 입력해주세요"
                    name="title"
                    value={newDiary.title}
                    onChange={handleChange}
                />
            </section>
            <section className="MealDate">
                <input
                    className="DiaryDate"
                    type="date"
                    name="eatDate"
                    value={newDiary.eatDate}
                    onChange={handleChange}
                />
                <div className="input_box meal_box">
                    {
                        meals.map((it) =>
                            <Items
                                type={"Meal"}
                                key={it.id}
                                {...it}
                                onClick={handleClickMeal}
                                isSelected={it.id === meal}/>
                        )}
                </div>
            </section>
            <section className="FindRestaurant">
                <input
                    className="RestaurantName"
                    type="text"
                    placeholder="가게 이름을 입력해주세요"
                />
                <div className="FindRestaurantButton">
                    <CustomButton
                        text="🔍"
                        type="find"
                        onClick={() => {
                        }}
                    />
                </div>
            </section>
            <textarea
                className="DiaryContent"
                placeholder="내용을 입력해주세요."
                name="content"
                value={newDiary.content}
                onChange={handleChange}
            />
            <section>
                <h4>방문 후기는 어떠셨나요?</h4>
                <div className="input_box evaluation_list_wrapper">
                    {
                        evaluations.map((it) =>
                            <Items
                                type={"Evaluation"}
                                key={it.id}
                                {...it}
                                onClick={handleClickEvaluation}
                                isSelected={it.id === evaluation}/>
                        )}
                </div>
            </section>
        </div>
    )

}

export default NewDiary;