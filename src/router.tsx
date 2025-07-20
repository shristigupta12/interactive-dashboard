import { createRouter, createRoute, createRootRoute, redirect } from '@tanstack/react-router'
import { LayoutContainer } from './modules/components/layout-container'
import { Home } from './modules/main/home/components/home'
import { OrderList } from './modules/main/order-list/components/order-list'

const rootRoute = createRootRoute({
  component: LayoutContainer,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  beforeLoad: () => {
    // Redirect to default dashboard
    throw redirect({ to: '/dashboard/default' })
  },
})

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
})

const defaultRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: '/default',
  component: Home,
})

const orderListRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: '/order-list',
  component: OrderList,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  dashboardRoute.addChildren([defaultRoute, orderListRoute]),
])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
} 