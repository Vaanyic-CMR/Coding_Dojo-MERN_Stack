import React from "react";

import AuthorNavBar from "../components/AuthorNavBar";
import AuthorTable from "../components/AuthorTable";

const AuthorList = props => {

    return (
        <div className="App">
            <AuthorNavBar navText="Add an Author" navLink="/authors/new"/>
            <AuthorTable />
        </div>
    );
}
export default AuthorList;