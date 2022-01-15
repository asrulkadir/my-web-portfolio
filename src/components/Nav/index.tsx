import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = styled.div`
  display: flex;
  background: #e6e6e6;
`;

const Item = styled.div<{ param: Boolean }>`
  padding: 1rem;
  width: 20%;
  cursor: pointer;
  background: ${(props) => (props.param ? 'white' : '#e6e6e6')};

  p {
    text-align: center;
    color: ${(props) => (props.param ? 'brown' : 'black')};
    font-weight: ${(props) => (props.param ? 'bold' : 'normal')};
  }

  &:hover {
    background: ${(props) => (props.param ? 'white' : 'grey')};
  }
`;

const Nav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Navigation>
      <Item
        param={pathname === '/' ? true : false}
        onClick={() => navigate('/')}
      >
        <p>HOME</p>
      </Item>
      <Item
        param={pathname === '/profile' ? true : false}
        onClick={() => navigate('/profile')}
      >
        <p>PROFILE</p>
      </Item>
      <Item
        param={pathname === '/resume' ? true : false}
        onClick={() => navigate('/resume')}
      >
        <p>RESUME</p>
      </Item>
      <Item
        param={pathname === '/portfolio' ? true : false}
        onClick={() => navigate('/portfolio')}
      >
        <p>PORTFOLIO</p>
      </Item>
      <Item
        param={pathname === '/contact' ? true : false}
        onClick={() => navigate('/contact')}
      >
        <p>CONTACT</p>
      </Item>
    </Navigation>
  );
};

export default Nav;
