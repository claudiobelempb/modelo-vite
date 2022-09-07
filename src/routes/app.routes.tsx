import { BlogPage } from '@pages/BlogPage/inde';
import { CheckoutPage } from '@pages/CheckoutPage';
import { EventGridsPage } from '@pages/EventGridsPage';
import { MsgSuccessPage } from '@pages/MsgSuccessPage';
import { PhoxulPage } from '@pages/PhoxulPage';
import { ServicePage } from '@pages/ServicePage';
import { SignInPage } from '@pages/SignInPage';
import { SignUpPage } from '@pages/SignUpPage';
import { TestePage } from '@pages/TestePage';
import { ZealAdaptivePage } from '@pages/ZealAdaptivePage';
import { useRoutes } from 'react-router-dom';
import NotFoundPage from '../pages/404';

import { HomePage } from '../pages/HomePage';

const AppRoutes: React.FC = () => {
  return useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/checkout', element: <CheckoutPage /> },
    { path: '/success', element: <MsgSuccessPage /> },
    { path: '/teste', element: <TestePage /> },
    { path: '/phoxul', element: <PhoxulPage /> },
    { path: '/zeal', element: <ZealAdaptivePage /> },
    { path: '/event', element: <EventGridsPage /> },
    { path: '/blog', element: <BlogPage /> },
    { path: '/signin', element: <SignInPage /> },
    { path: '/signup', element: <SignUpPage /> },
    { path: '/service', element: <ServicePage /> },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ]);
};

export { AppRoutes };
