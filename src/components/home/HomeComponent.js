import React, {useEffect} from "react";
import { useSelector } from 'react-redux'
import { Switch, Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

import * as Home from './style.css';

import HeaderComponent from "../header/HeaderComponent";


const HomeComponent = (props) => {
  let auth = false;
  const { routes } = props;
  const history = useHistory();

  auth = useSelector((state)=>{
    return state.loginReducer.authenticated
  })

  useEffect(()=>{
    history.push('/login')
  },[])

  return (
    <div className="wrapper">
      <HeaderComponent />
   
        <Switch>
          {routes.map((route, index) =>
            !route.private ? (
              <Route path={route.path} key={index} >
                <route.component key={index}></route.component>
              </Route>
            ) : (
              <Route
                path={route.path}
                key={index}
                render={({ location }) =>
                  auth ? (
                    <route.component key={index}></route.component>
                  ) : (
                    <Redirect
                      to={{
                        pathname: "/login",
                        state: { from: location },
                      }}
                    ></Redirect>
                  )
                }
              ></Route>
            )
          )}
        </Switch>
  
    </div>
  );
};

export default HomeComponent;
