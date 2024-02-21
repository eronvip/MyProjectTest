import React from 'react';
import "./styles.css";
import { useColumns } from '../../hooks/useColumns';

export const ColumnList = () => {
  const limit = 4;
  const { dataColumns, functGetColumns } = useColumns();

  const handleSeeMore = () => {
    functGetColumns(dataColumns.length, limit);
  }

  React.useEffect(() => {
    functGetColumns(0, limit);
  }, []);

  return (
    <div className='column-list'>
      {
        // use `dataColumns` map for render element of Column to show list columns
      }
      {/* <div>
        <buitton onClick={() => handleSeeMore}>コラムをもっと見る</button>
      </div> */}
    </div>
  );
}