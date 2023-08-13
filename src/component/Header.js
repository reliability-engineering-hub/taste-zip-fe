const Header = ({headText, leftChild, rightChild}) => {
    return <header>
        <div className="left_head">
            {leftChild}
        </div>

        <div className="head_text">
            {headText}
        </div>

        <div className="right_head">
            {rightChild}
        </div>
    </header>
}

export default Header;
