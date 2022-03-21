import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = _props => {
    const navigate = useNavigate();

    useEffect( () => navigate("/authors") );

    return (
        <div>
            <h1 style={{ testAlign: "center" }}>Redirecting to "/authors"</h1>
        </div>
    );
}
export default Index;