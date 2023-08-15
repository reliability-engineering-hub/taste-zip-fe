
const CustomButton = ({text, type, onClick}) => {
    const btnType = ['save', 'modify', 'delete', 'back', 'find', 'meal'].includes(type) ?
        type : 'default';

    return (
        <button
            className={["CustomButton", `CustomButton_${btnType}`].join(" ")}
            onClick={onClick}>
            {text}
        </button>
    );
}

export default CustomButton;