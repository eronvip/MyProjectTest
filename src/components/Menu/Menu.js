import React from 'react';
import { Link } from 'react-router-dom';
import iconMenu from '../../images/icon-menu/icon-4.svg';
import "./styles.css";

export const Menu = (props) => {
  const { menuList } = props;
  const [showOption, setShowOption] = React.useState(false);
  const optionRef = React.useRef(null);
  const optionList = [{
    id: 1,
    label: "自分の記録",
    url: "/record"
  }, {
    id: 2,
    label: "体重グラフ",
    url: "/"
  }, {
    id: 3,
    label: "目標",
    url: "/"
  }, {
    id: 4,
    label: "選択中のコース",
    url: "/"
  }, {
    id: 5,
    label: "コラム一覧",
    url: "/column"
  }, {
    id: 6,
    label: "設定",
    url: "/"
  }];

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (optionRef.current && !optionRef.current.contains(event.target)) {
        setShowOption(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='menu'>
      {menuList?.map((item) => (
        <div className='item' key={item.key}>
          <img src={item.icon} alt={item.key} />
          <Link to={item.url}>{item.name}</Link>
        </div>
      ))}
      <div className='block-option' ref={optionRef}>
        <img src={iconMenu} alt="icon-menu" onClick={() => setShowOption(!showOption)} />
        {showOption &&
          <div className='option-list'>
            {optionList.map((item) => (
              <div className='option-item' key={item.id}>
                <Link to={item.url}>{item.label}</Link>
              </div>
            ))}
          </div>}
      </div>
    </div>
  );
}