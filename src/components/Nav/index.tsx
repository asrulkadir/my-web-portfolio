import React from 'react';
import { FaHome } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';
import { IoMdDocument } from 'react-icons/io';
import { ImLocation2 } from 'react-icons/im';
import { MdWork } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavItemProps {
  active: boolean;
  onClick: () => void;
  label: string;
  icon: React.ReactNode;
}

const NavItem = ({ active, onClick, label, icon }: NavItemProps) => (
  <div
    className={`p-4 w-1/5 cursor-pointer md:max-lg:px-1 md:max-lg:py-4 max-md:flex max-md:justify-center ${
      active ? 'bg-app-bg' : 'bg-app-nav hover:bg-gray-500'
    }`}
    onClick={onClick}
  >
    <p
      className={`text-center max-md:hidden ${
        active ? 'text-primary font-bold' : 'text-black'
      }`}
    >
      {label}
    </p>
    <p
      className={`text-center hidden max-md:inline ${
        active ? 'text-primary font-bold' : 'text-black'
      }`}
    >
      {icon}
    </p>
  </div>
);

const Nav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="flex bg-app-nav max-md:w-[95vw]">
      <NavItem
        active={pathname === '/'}
        onClick={() => navigate('/')}
        label="HOME"
        icon={<FaHome />}
      />
      <NavItem
        active={pathname === '/profile'}
        onClick={() => navigate('/profile')}
        label="PROFILE"
        icon={<GoPerson />}
      />
      <NavItem
        active={pathname === '/resume'}
        onClick={() => navigate('/resume')}
        label="RESUME"
        icon={<IoMdDocument />}
      />
      <NavItem
        active={pathname === '/portfolio'}
        onClick={() => navigate('/portfolio')}
        label="PORTFOLIO"
        icon={<MdWork />}
      />
      <NavItem
        active={pathname === '/contact'}
        onClick={() => navigate('/contact')}
        label="CONTACT"
        icon={<ImLocation2 />}
      />
    </div>
  );
};

export default Nav;
