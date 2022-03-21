import React from "react";

import { Navbar, NavbarText, Nav, NavLink } from "reactstrap";

const AuthorNavBar = props => {
    const { navText, navLink } = props;

    return (
        <div>
        <Navbar color="light" light className="p-3">
            <NavbarText><h2>Favorite Authors</h2></NavbarText>
            <Nav className="me-auto ms-4" navbar>
                <NavLink href={ navLink }>{ navText }</NavLink>
            </Nav>
        </Navbar>
        </div>
    );
};
export default AuthorNavBar;