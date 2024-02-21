import { Route, Routes } from 'react-router-dom';
import { Layout } from '../../components';
import { Column } from '../Column';
import { Home } from '../Home';
import { Record } from '../Record';
import './styles.css';

export const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={"/record"} element={<Record />} />
          <Route path={"/column"} element={<Column />} />
        </Route>
      </Routes>
    </div>
  );
}
