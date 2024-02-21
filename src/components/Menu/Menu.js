import React from 'react';
import { Link } from 'react-router-dom';
import iconMenu from '../../images/icon-menu/icon-4.svg'

export const Menu = (props) => {
  const { menuList } = props
  return (
    <div className='menu'>
      {menuList?.map((item) => (
        <div className='item' key={item.key}>
          <img src={item.icon} alt={item.key} />
          <Link to={item.url}>{item.name}</Link>
        </div>
      ))}
      <div>
        <img src={iconMenu} alt="icon-menu" />
      </div>
    </div>
  );
}