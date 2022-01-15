import React from 'react';
import { FaHome } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';
import { IoMdDocument } from 'react-icons/io';
import { ImLocation2 } from 'react-icons/im';
import { MdWork } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../../utils/responsive';

const Navigation = styled.div`
  display: flex;
  background: #e6e6e6;

  @media ${device.mobile} {
    width: 95vw;
  }
`;

const Item = styled.div<{ param: Boolean }>`
  padding: 1rem;
  width: 20%;
  cursor: pointer;
  background: ${(props) => (props.param ? 'white' : '#e6e6e6')};

  @media ${device.tablet} {
    padding: 1rem 0.25rem;
  }

  @media ${device.mobile} {
    display: flex;
    justify-content: center;
  }

  p {
    text-align: center;
    color: ${(props) => (props.param ? 'brown' : 'black')};
    font-weight: ${(props) => (props.param ? 'bold' : 'normal')};

    @media ${device.mobile} {
      display: none;
    }
  }

  .icon {
    text-align: center;
    color: ${(props) => (props.param ? 'brown' : 'black')};
    font-weight: ${(props) => (props.param ? 'bold' : 'normal')};
    display: none;

    @media ${device.mobile} {
      display: inline;
    }
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
        <p className="icon">
          <FaHome />
        </p>
      </Item>
      <Item
        param={pathname === '/profile' ? true : false}
        onClick={() => navigate('/profile')}
      >
        <p>PROFILE</p>
        <p className="icon">
          <GoPerson />
        </p>
      </Item>
      <Item
        param={pathname === '/resume' ? true : false}
        onClick={() => navigate('/resume')}
      >
        <p>RESUME</p>
        <p className="icon">
          <IoMdDocument />
        </p>
      </Item>
      <Item
        param={pathname === '/portfolio' ? true : false}
        onClick={() => navigate('/portfolio')}
      >
        <p>PORTFOLIO</p>
        <p className="icon">
          <MdWork />
        </p>
      </Item>
      <Item
        param={pathname === '/contact' ? true : false}
        onClick={() => navigate('/contact')}
      >
        <p>CONTACT</p>
        <p className="icon">
          <ImLocation2 />
        </p>
      </Item>
    </Navigation>
  );
};

export default Nav;
