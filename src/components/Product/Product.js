import React from 'react';
import "./styles.css";

export const Product = (props) => {
  const { url, label } = props;
  return (
    <div className='product-item' style={{
      "--image": `url(${url})`
    }}>
      <div className='block'></div>
      <div className='label'>{label}</div>
    </div>
  );
}