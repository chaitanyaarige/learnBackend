import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

// import { RouteWithLayout } from './components';
// import { Main as DefaultLayout, Auth as AuthLayout } from './layouts';

import {
  // Dashboard as DashboardView,
  // ProductList as ProductListView,
  // UserList as UserListView,
  // Typography as TypographyView,
  // Icons as IconsView,
  // Account as AccountView,
  // Settings as SettingsView,
  // SignUp as SignUpView,
  // SignIn as SignInView,
  // NotFound as NotFoundView
} from './components';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={DefaultLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={AuthLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={AuthLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={AuthLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
