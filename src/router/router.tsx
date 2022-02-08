import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from '../pages/error-page';
import HomePage from '../pages/home-page';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
