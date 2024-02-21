import React from 'react';
import iconMorning from '../../images/home/icon-morning.svg';
import iconLunch from '../../images/home/icon-lunch.svg';
import iconDinner from '../../images/home/icon-dinner.svg';
import iconSnack from '../../images/home/icon-snack.svg';
import { Button } from '../Button';
import "./styles.css";

export const GroupButton = () => {
  const listBtn = [{
    label: "Morning",
    icon: iconMorning,
  }, {
    label: "Lunch",
    icon: iconLunch,
  }, {
    label: "Dinner",
    icon: iconDinner,
  }, {
    label: "Snack",
    icon: iconSnack,
  },]
  return (
    <div className='btn-group'>
      {listBtn.map((item) => (
        <Button key={item.label} icon={item.icon} label={item.label} />
      ))}
    </div>
  );
}