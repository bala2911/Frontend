import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { logout } from '../actions/userAction';
//we have to bring user login state into this component
const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();

  const { userInfo } = userLogin;
  console.log('userInfo:-', userInfo);

  const history = useHistory();

  const logoutHandler = async () => {
    const result = await dispatch(logout());
    if (result.success) {
      // Redirect to the '/' route
      history.push('/');
    }
  };

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Proshop</Navbar.Brand>
          </LinkContainer>

          <LinkContainer to='/login'>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id='username'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa-user'></i> Login
                </Nav.Link>
              </LinkContainer>
            )}
          </LinkContainer>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
