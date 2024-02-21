import React from 'react';
import "./styles.css";

export const Footer = (props) => {
  const { hide } = props;
  if (hide) {
    return <></>;
  }
  return (
    <div className='footer-container'>
      <div className='container footer'>
        <div>会員登録</div>
        <div>運営会社</div>
        <div>利用規約</div>
        <div>個人情報の取扱について</div>
        <div>特定商取引法に基づく表記</div>
        <div>お問い合わせ</div>
      </div>
    </div>
  );
}