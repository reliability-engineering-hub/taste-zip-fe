const HeaderButton = ({text, type, onClick}) => {
    const btnType = ['save', 'modify', 'delete', 'back'].includes(type) ?
        type : 'default';
    return (
        <button
            className={["HeaderButton", `HeaderButton_${btnType}`].join(" ")}
            onClick={onClick}>
            {text}
        </button>
    );
}

export default HeaderButton;