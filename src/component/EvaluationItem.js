const EvaluationItem = ({
                            evaluation_id,
                            evaluation_img,
                            evaluation_description,
                            onClick,
                            isSelected
                        }) => {
    return (
        <div className={[
            "EvaluationItem",
            isSelected ?
                `EvaluationItem_on_${evaluation_id}` :
                `EvaluationItem_off}`
        ].join(" ")}
             onClick={() => onClick(evaluation_id)}
        >
            <img src={evaluation_img} alt={evaluation_description}/>
            <span>{evaluation_description}</span>
        </div>
    )
}

export default EvaluationItem;
