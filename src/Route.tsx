import { Navigate, useRoutes } from 'react-router-dom';
import DashboardPage from './pages/dashboard/Dashboard';


export class RoutePath {
    static ROOT = '/';
    static DASHBOARD = '/dashboard';
    static LOGIN = '/login';
}

export default function Route() {
    return useRoutes([
        {
            path: 'dashboard',
            element: <DashboardPage></DashboardPage>,
            //children: [{ path: RoutePath.ROOT, element: <LoginPage /> }],
        },
        {
            path: RoutePath.ROOT,
            element: <Navigate to={RoutePath.LOGIN} replace />
        },
        //{ path: '*', element: <Navigate to={RoutePath.DASHBOARD} replace /> }
    ]);
}
