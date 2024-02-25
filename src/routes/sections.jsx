import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from '../layouts/dashboard';

export const IndexPage = lazy(() => import('../pages/app'));
export const BlogPage = lazy(() => import('../pages/blog'));
export const UserPage = lazy(() => import('../pages/user'));
export const LoginPage = lazy(() => import('../pages/login'));
export const ProductsPage = lazy(() => import('../pages/products'));
export const Page404 = lazy(() => import('../pages/page-not-found'));
export const FeedbackPage = lazy(() => import('../pages/feedback'));
export const AddUserPage = lazy(() => import('../pages/add-user'));
export const RegisterPage = lazy(() => import('../pages/register'));
export const RegistrationFormPage = lazy(() => import('../pages/registration-form'));
export const DashboardPage = lazy(() => import('../pages/dashboard'));
export const VerificationPage = lazy(() => import('../pages/verification'));
export const CameraScanPage = lazy(() => import('../pages/camera-scan'));
export const UserSettingPage = lazy(() => import('../pages/user-setting'));
// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes(
    [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: '404',
        element: <Page404 />,
      },
      {
        path: '*',
        element: <Navigate to="/404" replace />,
      },
      {
        element: (
          <DashboardLayout>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </DashboardLayout>
        ),
        children: [
          { element: <IndexPage />, index: true },
          { path: 'employee', element: <UserPage /> },
          { path: 'products', element: <ProductsPage /> },
          { path: 'blog', element: <BlogPage /> },
          { path: 'feedback', element: <FeedbackPage /> },
          { path: 'add-user', element: <AddUserPage /> },
          { path: 'register', element: <RegistrationFormPage /> },
          { path: 'dashboard', element: <DashboardPage /> },
          { path: 'verification', element: <VerificationPage /> },
          { path: 'verification/camera-scan', element: <CameraScanPage /> },
          { path: 'user-setting', element: <UserSettingPage /> },
          
        ],
      },

    ]
  );

  return routes;
}


