import { ColumnList, Recommended } from '../../components';
import './styles.css';

export const Column = () => {
  return (
    <>
      <div className='container'>
        <Recommended />
      </div>
      <div className='container'>
        <ColumnList />
      </div>
    </>
  );
}
