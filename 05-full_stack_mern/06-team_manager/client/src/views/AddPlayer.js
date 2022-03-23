import PlayerForm from "../components/PlayerForm";
import Header from "../components/Header";

const AddPlayer = _props => {
    

    return (
        <div style={{ backgroundColor: "#eeeeee", padding: "0 5% 5%" }}>
            <Header
                select1={{ text: "Manage Players", link: "/players/list", active: true }}
                select2={{ text: "Manage Player Status", link: "/status/game/1", active: false }}
                bgColor="#eeeeee"
            />
            <div style={{ backgroundColor: "#ffffff", padding: "0 5% 5%" }}>
                <Header
                    select1={{ text: "List", link: "/players/list", active: false }}
                    select2={{ text: "Add Player", link: "/players/addplayer", active: true }}
                    bgColor="#ffffff"
                />
                <PlayerForm />
            </div>
        </div>
    );
}
export default AddPlayer;