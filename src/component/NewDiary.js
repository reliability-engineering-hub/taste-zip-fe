import {useCallback, useRef, useState} from "react";
import EvaluationItem from "./EvaluationItem";
import {evaluations} from "../util/evaluations";

const NewDiary = () => {
    const contentRef = useRef();

    const [evaluation, setEvaluation] = useState(3);

    const handleClickEvaluation = useCallback((evaluation) => {
        setEvaluation(evaluation);
    }, [])

    return (
        <div className="DiaryEditor">
            <section>
                <input
                    className="DiaryTitle"
                    type="text"
                    placeholder="제목을 입력해주세요"
                />
            </section>
            <section>
                <input
                    className="DiaryDate"
                    type="date"
                />
            </section>
            <section>

            </section>
            <section>
                <textarea
                    className="DiaryContent"
                    ref={contentRef}
                    placeholder="내용을 입력해주세요."
                />
            </section>
            <section>
                <h4>방문 후기는 어떠셨나요?</h4>
                <div className="input_box evaluation_list_wrapper">
                    {
                        evaluations.map((it) =>
                            <EvaluationItem
                                key={it.evaluation_id}
                                {...it}
                                onClick={handleClickEvaluation}
                                isSelected={it.evaluation_id === evaluation}/>
                        )}

                </div>
            </section>
        </div>
    )

}

export default NewDiary;