import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from '../layouts/dashboard';

export const IndexPage = lazy(() => import('../pages/app'));
export const AllEmployeesPage = lazy(() => import('../pages/all-employees'));
export const LoginPage = lazy(() => import('../pages/login'));
export const Page404 = lazy(() => import('../pages/page-not-found'));
export const FeedbackPage = lazy(() => import('../pages/feedback'));
export const AddEmployeePage = lazy(() => import('../pages/add-employee'));
export const RegisterPage = lazy(() => import('../pages/register'));
export const DashboardPage = lazy(() => import('../pages/dashboard'));
export const VerificationPage = lazy(() => import('../pages/verification'));
export const AccountSettingPage = lazy(() => import('../pages/account-setting'));
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
          { path: 'all-employee', element: <AllEmployeesPage /> },
          { path: 'feedback', element: <FeedbackPage /> },
          { path: 'add-employee', element: <AddEmployeePage /> },
          { path: 'register', element: <RegisterPage /> },
          { path: 'dashboard', element: <DashboardPage /> },
          { path: 'verification', element: <VerificationPage /> },
          { path: 'account-setting', element: <AccountSettingPage /> },
        ],
      },

    ]
  );

  return routes;
}


