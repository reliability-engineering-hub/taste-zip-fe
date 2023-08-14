import {useNavigate} from "react-router-dom";

const NavigateBar = ({name, route}) => {
    const navigate = useNavigate();
    return (
        <div className="NavigateBar">
            <button
                className="NavigateButton"
                onClick={() => navigate(route)}
            >
                {name}
            </button>
        </div>
    )
}

export default NavigateBar;