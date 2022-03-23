import Header from "../components/Header";

const StatusList = _props => {
    

    return (
        <div style={{ backgroundColor: "#eeeeee", padding: "0 5% 5%" }}>
            <Header
                select1={{ text: "Manage Players", link: "/players/list", active: false }}
                select2={{ text: "Manage Player Status", link: "/status/game/1", active: true }}
                bgColor="#eeeeee"
            />

        </div>
    );
}
export default StatusList;