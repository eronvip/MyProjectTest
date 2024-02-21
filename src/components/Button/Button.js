import React from 'react';
import { Menu } from '../Menu';
import logo from "../../images/logo.svg";
import "./styles.css";

export const Button = (props) => {
  const { icon, label } = props;
  return (
    <div className='btn'>
      <div>
        <img src={icon} />
      </div>
      <div>{label}</div>
    </div>
  );
}