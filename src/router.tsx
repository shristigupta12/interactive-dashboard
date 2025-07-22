import { createBrowserRouter, Navigate } from 'react-router-dom'
import { LayoutContainer } from './modules/components/layout-container'
import { Home } from './modules/main/home/components/home'
import { OrderList } from './modules/main/order-list/components/order-list'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutContainer />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard/default" replace />,
      },
      {
        path: 'dashboard/default',
        element: <Home />,
      },
      {
        path: 'dashboard/order-list',
        element: <OrderList />,
      },
      {
        path: '*',
        element: <Navigate to="/dashboard/default" replace />,
      },
    ],
  },
]) 