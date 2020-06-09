import React, { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';

interface ProtectedRouteProps {
  component: any;
  condition: any;
  redirectRoute: string;
  path: string;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ component: Component, condition, path, redirectRoute, ...rest }): any => (
  <Route
    {...rest}
    path={`/${path}`}
    render={(props): any => {
      if (condition) {
        return <Component {...props} />;
      }
      return <Redirect to={`/${redirectRoute}`} />;
    }}
  />
);

export default ProtectedRoute;
