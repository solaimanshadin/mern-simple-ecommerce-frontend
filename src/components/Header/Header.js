import React from 'react';
import {  Nav, Navbar, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { removeUserData } from '../../redux/actions/userActions';

const Header = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const routeTo = (path) => {
        history.push(path);
    }
    const logout = () => {
        dispatch(removeUserData())
        localStorage.removeItem('token')
        history.push('/login')
    }
    const {user} = useSelector(state => state)

    return (
        <>
            <Navbar bg="light" variant="light"> 
            <div className="container">
                <Navbar.Brand onClick={() => routeTo('/')}>MERN-E-Commerce</Navbar.Brand>
            
               
                <Nav className="ml-auto">
                    <Nav.Link onClick={() => routeTo('/')}>Home</Nav.Link>

                    {
                        user && user.user  ?
                        <>
                        <Nav.Link>Hey, {user.user.fullName}</Nav.Link>
                        <Nav.Link onClick={() => routeTo('/add-product')}>Add product</Nav.Link>
                        <Nav.Link onClick={logout}>Logout</Nav.Link>
                        </>
                        :
                        <>
                        <Nav.Link onClick={() => routeTo('/login')}>Login</Nav.Link>
                        <Nav.Link onClick={() => routeTo('/signup')}>Sign Up</Nav.Link>
                        </>
                    }
                    
                </Nav>
            </div>
               
            </Navbar>
        </>
    );
};

export default Header;