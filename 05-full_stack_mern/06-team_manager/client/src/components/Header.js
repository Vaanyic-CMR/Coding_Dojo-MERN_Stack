import { Nav, NavItem, NavLink } from "reactstrap";

const Header = props => {
    const { select1, select2, bgColor } = props;

    return (
        <Nav style={{ backgroundColor: bgColor }} className="p-3 align-middle" pills>
            <NavItem>
                <NavLink
                    active={ select1.active }
                    href={ select1.link }
                    >{ select1.text }</NavLink>
            </NavItem>
            <NavItem className="ms-3 me-3">
                <h3> | </h3>
            </NavItem>
            <NavItem>
                <NavLink
                    active={ select2.active }
                    href={ select2.link }
                    >{ select2.text }</NavLink>
            </NavItem>
        </Nav>
    );
}
export default Header;