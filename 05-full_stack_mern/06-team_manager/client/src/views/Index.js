import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Index = _props => {
    const navigate = useNavigate();

    useEffect( () => navigate("/players/list") );

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Redirecting to "/players/list"</h1>
        </div>
    );
}
export default Index;