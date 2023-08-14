import NavigateBar from "./NavigateBar";

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <h2>taste.zip</h2>
            <NavigateBar name={"메인 화면"} route={"/"}/>
            <NavigateBar name={"글쓰기"} route={"/diaries/new"}/>
        </div>
    )
}

export default Sidebar;