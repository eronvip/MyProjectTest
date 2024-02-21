import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/logo.svg";
import { Menu } from '../Menu';
import "./styles.css";

export const Header = (props) => {
  const { hide, menu } = props;
  if (hide) {
    return <></>;
  }
  return (
    <div className='header-container'>
      <div className='container header'>
        <div className='logo'>
          <Link to="/"><img src={logo} className="logo" alt="logo" /></Link>
        </div>
        <Menu menuList={menu} />
      </div>
    </div>
  );
}