import { Achievement, ButtonSeeMore, GroupButton, HomeChart, ProductList } from '../../components';
import './styles.css';

export const Home = () => {
  return (
    <>
      <div className="d-flex full-width">
        <div className='block-1'>
          <Achievement />
        </div>
        <div className='block-2'>
          <HomeChart />
        </div>
      </div>
      <div className='container'>
        <GroupButton />
      </div>
      <div className='container'>
        <ProductList />
        <div className='full-width'>
          <ButtonSeeMore />
        </div>
      </div>
    </>
  );
}
