import React from 'react';
import { Menu } from '../Menu';
import logo from "../../images/logo.svg";
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
          <img src={logo} className="logo" alt="logo" />
        </div>
        <Menu menuList={menu} />
      </div>
    </div>
  );
}