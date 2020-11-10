import {  LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_PROGRESS, LOGIN_ERROR, LOGIN_INIT } from '../../actions/login/actions';

import { SET_SEARCH_TRIES } from '../../actions/search/actions';


export const loginRequest = (credsObj) => {
    return async (dispatch) => {
        const {login, password} = credsObj;
        dispatch({
            type:LOGIN_PROGRESS,
            payload:{}
        })
        try{
            const response = await fetch(`https://swapi.dev/api/people/?search=${login}`);
            const bodyResponse = await response.json();
            console.log(bodyResponse);
            dispatch(initLoginReq());
            if(bodyResponse && bodyResponse.results){
                let data = bodyResponse.results[0];
                if(!data || (login !==data.name  || password!==data.birth_year)){

                    dispatch({
                        type: LOGIN_FAILURE,
                        payload:{}
                    })
                    // delayTimer();
                } else {
                    dispatch({
                        type: LOGIN_SUCCESS,
                        payload:{
                            user:{
                                name: data.name
                            }
                        }
                    })

                    // set max tries for user Luke Skywlaker

                    if(data.name.toLowerCase() === 'luke skywalker'){
                        dispatch({
                            type: SET_SEARCH_TRIES,
                            payload: {
                                tries: Math.max()
                            }
                        })
                    }
                }
            }

        } catch(e){
            dispatch({
                type: LOGIN_ERROR,
                payload:{}
            })
            // delayTimer();
            console.log('Error', e);
        }

    }
}

export const initLoginReq = ()=> ({
    type: LOGIN_INIT,
    payload:{}
})

export const delayTimer = () => {
    const clearId = setTimeout(()=>{
        dispatch(initLoginReq())
    }, 2000);
    clearTimeout(clearId);
}