import React from 'react'
import { Navbar, Nav, Container, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../actions';
/**
* @author
* @function Header
**/

const Header = (props) => {
    const auth = useSelector(state => state.auth)
    const dispatch=useDispatch()
    
    const renderLoggedInLinks = () => {
        return (
            <Nav>
                <li className="nav-item">
                    <span className="nav-link" onClick={()=>{dispatch(logout())}}>Signout</span>
                </li>

            </Nav>
        )
    }
    const renderNonLoggedInLinks = () => {
        return (

            <Nav>
                <li className="nav-item">
                    <NavLink to="signup" className="nav-link">Signup</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="signin" className="nav-link">Signin</NavLink>
                </li>
            </Nav>
        )
    }
    return (
        <>
            <Navbar collapseOnSelect fixed='top' expand="lg" bg="dark" variant="dark" style={{ zIndex: 1 }}>
                <Container fluid>
                    <NavLink to="/" className="navbar-brand">Admin Dashboard</NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        {auth.authenticated ? renderLoggedInLinks() : renderNonLoggedInLinks()}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )

}

export default Header