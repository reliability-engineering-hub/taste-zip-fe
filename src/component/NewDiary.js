import {useCallback, useRef, useState} from "react";
import Items from "./Items";
import {evaluations} from "../util/Evaluation";
import CustomButton from "./CustomButton";
import {meals} from "../util/Meal";

const NewDiary = () => {
    const contentRef = useRef();

    const [meal, setMeal] = useState(false);

    const [evaluation, setEvaluation] = useState(3);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleClickMeal = useCallback((meal) => {
        setMeal(meal);
    }, [])
    const handleClickEvaluation = useCallback((evaluation) => {
        setEvaluation(evaluation);
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const diary = {}
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="DiaryEditor">
                <section>
                    <input
                        className="DiaryTitle"
                        type="text"
                        placeholder="제목을 입력해주세요"
                    />
                </section>
                <section className="MealDate">
                    <input
                        className="DiaryDate"
                        type="date"
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
                    ref={contentRef}
                    placeholder="내용을 입력해주세요."
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
        </form>
    )

}

export default NewDiary;