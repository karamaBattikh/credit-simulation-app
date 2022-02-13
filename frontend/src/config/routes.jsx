import { Route } from 'react-router-dom';

import Home from 'pages/home';

export const RoutesList = [
  {
    component: <Home />,
    name: 'home',
    path: '/',
    pathIsExact: true,
  },
];

export const switchRoute = RoutesList.map((route) => (
  <Route key={route.name} exact={route.pathIsExact} path={route.path} element={route.component} />
));
