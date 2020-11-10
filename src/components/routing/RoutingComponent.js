import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomeComponent from "../home/HomeComponent";
import LoginComponent from "../login/LoginComponent";
import SearchComponent from "../search/SearchComponent";


const routes = [
  {
    path: "/",
    component: HomeComponent,
    routes: [
      {
        path: '/login',
        private: false,
        component: LoginComponent
      },
      {
        path: '/search',
        private: 'true',
        component: SearchComponent
      }
    ]

  },
];

const HomeRouting = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
};

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default HomeRouting;