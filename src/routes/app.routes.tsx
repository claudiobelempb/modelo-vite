import { useRoutes } from 'react-router-dom';
import NotFoundPage from '../pages/404';

import { HomePage } from '../pages/HomePage';

const AppRoutes: React.FC = () => {
  return useRoutes([
    { path: '/', element: <HomePage /> },
    // { path: '/products', element: <ProductPage /> },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ]);
};

export { AppRoutes };
