import {Navbar, Nav, Badge} from "react-bootstrap"
import {Link} from "react-router-dom"
import {UserContext} from "../UserContext"
import { useContext } from "react"

const NavBar = () => {
    const [users, setUsers] = useContext(UserContext);
    return (
        <Navbar bg="primary" expand="lg" variant="dark">
            <Link bg="dark" to="/" >
                <Navbar.Brand href="#home">User Directory Management App</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">            
                    <Badge className="mt-2" variant="primary">Total Users {users.data.length}</Badge>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;