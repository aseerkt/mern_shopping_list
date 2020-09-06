import React from 'react';
import { Container, NavItem, NavLink, Nav, Navbar } from 'reactstrap';

function BottomNavbar() {
  return (
    <div className='fixed-bottom bg-light'>
      <Container>
        <Navbar>
          <div className='mr-auto'>
            <span className='small'>Full Credits to Brad Traversy</span>
            <a
              href='https://www.youtube.com/watch?list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE&v=PBTYxXADG_k'
              className='btn'
            >
              <span className='fa fa-youtube fa-lg'></span>
            </a>
          </div>
          <Nav className='ml-auto flex-row' navbar>
            <NavItem>
              <NavLink
                color='dark'
                href='https://github.com/bradtraversy/mern_shopping_list'
              >
                <span className='fa fa-github fa-lg'></span>
              </NavLink>
            </NavItem>
            &nbsp;
            <NavItem>
              <NavLink href='https://github.com/aseerkt/mern_shopping_list'>
                <span className='fa fa-github fa-lg'></span>
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
}

export default BottomNavbar;
