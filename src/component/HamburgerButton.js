const HamburgerButton = ({ onToggle, isActive }) => {
    return (
        <div className={`HamburgerButton ${isActive ? 'active' : ''}`} onClick={onToggle}>
            <div className="bread"></div>
            <div className="patty"></div>
            <div className="bread"></div>
        </div>
    )
}

export default HamburgerButton;
