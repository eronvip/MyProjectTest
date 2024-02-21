import React from 'react';
import "./styles.css";

export const Recommended = () => {
  // Can use axios to get list recommended by api Get /get/recommend with header have token of current user
  const LIST_RECOMMENDED = [{
    id: 1,
    title: "Recommended Column",
    label: "オススメ"
  }, {
    id: 2,
    title: "Recommended Diet",
    label: "ダイエット"
  }, {
    id: 3,
    title: "Recommended Beauty",
    label: "美容"
  }, {
    id: 4,
    title: "Recommended Health",
    label: "健康"
  },]
  return (
    <div className='recommended'>
      {
        LIST_RECOMMENDED.map((recommended) => (
          <div className='item-recommended' key={recommended.id}>
            <div className='wrapper'>
              <div className='title'>{recommended.title}</div>
              <div className='line' />
              <div className='label'>{recommended.label}</div>
            </div>
          </div>
        ))
      }
    </div>
  );
}