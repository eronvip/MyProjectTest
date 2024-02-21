import React from 'react';
import imgRecomend1 from "../../images/record/MyRecommend-1.jpg";
import imgRecomend2 from "../../images/record/MyRecommend-2.jpg";
import imgRecomend3 from "../../images/record/MyRecommend-3.jpg";
import "./styles.css";

export const MyMenu = () => {
  const MY_MENU = [{
    title: "BODY RECORD",
    label: "自分のカラダの記録",
    url: imgRecomend1
  }, {
    title: "MY EXERCISE",
    label: "自分の運動の記録",
    url: imgRecomend2
  }, {
    title: "MY DIARY",
    label: "自分の日記",
    url: imgRecomend3
  }]
  return (
    <div className='my-menu'>
      {MY_MENU.map((menu, index) => (
        <div className='cell-menu' key={index}>
          <div className='wrapper'>
            <div className='block-menu-image' style={{ backgroundImage: `url(${menu.url})` }} />
            <div className='block-menu-content'>
              <div className='title'>{menu.title}</div>
              <div className='label'>{menu.label}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}