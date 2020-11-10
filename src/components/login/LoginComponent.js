import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../input/Input";
import Button from "../button/ButtonComponent";
import * as ActionCreator from "../../store/actionCreators/login/login";
import * as Login from "./Login.css";
import { createSelectorCreator, defaultMemoize } from "reselect";
import { useHistory } from "react-router-dom";
import { useForm } from '../../customHooks/useform';

import {LoaderComponent} from "../loader/LoaderComponent";
import {ModalComponent} from "../modal/ModalComponent";

const createDeepEqualSelector = createSelectorCreator(
  defaultMemoize
)

const memoziedSelector = createDeepEqualSelector(
  state=>state.loginReducer,
  loginRed => loginRed
)

const LoginComponent = () => {
  console.log("Rendered")
  //Using Custom Hook
  const { formValid, setFormValidHandler,getFormValues } = useForm(['login', 'password']);  
  const history = useHistory();
  const dispatch = useDispatch();
  const clickHandler = () => {  
    var postData = {};
    var userObj = getFormValues();
    postData['login']=userObj['login']['value'];
    postData['password']=userObj['password']['value'];
    dispatch(ActionCreator.loginRequest(postData));
  };

  const inputHandler = (data) => {
    setFormValidHandler(data);
  }

  const loginSelect = useSelector(memoziedSelector);

 useEffect(()=>{
   console.log('USE EFFECT', loginSelect);
   if(loginSelect.authenticated)
   {
     history.push('/search')
   }
 }, [loginSelect])

  return (
    <React.Fragment>
    {loginSelect.status === 'IN_PROGRESS' ? <LoaderComponent/>: null}
    {loginSelect.hasError?<ModalComponent errMessage={loginSelect.errorMessages} />:null}
    <div className="content_wrapper">
    <div className="login_wrapper">
      <div className="login_header">LOGIN</div>
      <div className="login_body">
        <Input name="login" id="login" label="Username" required handler={inputHandler}/>
        <Input name="password" id="password" label="Password" required handler={inputHandler} />
         <Button name="login" id="login" label="LOGIN" disabled={!formValid} handler={clickHandler}  />
      </div>
    </div>
    </div>

    </React.Fragment>
  );
};

export default LoginComponent;
