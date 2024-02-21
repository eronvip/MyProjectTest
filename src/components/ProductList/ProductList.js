import React from 'react';
import "./styles.css";
import { Product } from '../Product';
import product1 from "../../images/home/product-1.jpg"
import product2 from "../../images/home/product-2.jpg"
import product3 from "../../images/home/product-3.jpg"
import product4 from "../../images/home/product-4.jpg"
import product5 from "../../images/home/product-5.jpg"
import product6 from "../../images/home/product-6.jpg"
import product7 from "../../images/home/product-7.jpg"
import product8 from "../../images/home/product-8.jpg"

export const ProductList = () => {
  const list = [{
    label: "05.21.Morning",
    url: product1,
  }, {
    label: "05.21.Lunch",
    url: product2,
  }, {
    label: "05.21.Dinner",
    url: product3,
  }, {
    label: "05.21.Snack",
    url: product4,
  }, {
    label: "05.20.Morning",
    url: product5,
  }, {
    label: "05.20.Lunch",
    url: product6,
  }, {
    label: "05.20.Dinner",
    url: product7,
  }, {
    label: "05.20.Snack",
    url: product8,
  }]
  return (
    <div className='product-list'>
      {list.map((item) => <Product key={item.label} url={item.url} label={item.label} />)}
    </div>
  );
}