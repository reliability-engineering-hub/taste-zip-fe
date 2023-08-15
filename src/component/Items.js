const Items = ({
                            type,
                            id,
                            img,
                            description,
                            onClick,
                            isSelected
                        }) => {
    return (
        <div className={[
            `${type}Item`,
            isSelected ?
                `${type}Item_on_${id}` :
                `${type}Item_off}`
        ].join(" ")}
             onClick={() => onClick(id)}
        >
            <img src={img} alt={description}/>
            <span>{description}</span>
        </div>
    )
}

export default Items;
