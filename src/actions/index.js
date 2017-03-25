import axios from 'axios';
import { saveToCookie, removeCookieWithValue,getValueFromCookie, _COOKIE } from '../components/Cookie';
export const SPEED = 'SPEED';
export const STATUS = 'STATUS';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const MOVE = 'MOVE';
export const MONSTER_SUCCESS = 'MONSTER_SUCCESS';
export const MONSTER_FAILURE = 'MONSTER_FAILURE';
export const MONSTER = 'MONSTER';
export const STOPSIGN = 'STOPSIGN';
export const THROW = 'THROW';
export const CREATE_USER = 'CREATE_USER';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const MONSTER_BAG_SUCCESS = 'MONSTER_BAG_SUCCESS';
export const MONSTER_BAG_FAILURE = 'MONSTER_BAG_FAILURE';
export const AI_MONSTER = 'AI_MONSTER';
export const FIGHT = 'FIGHT';
export const LEADERBOARD = 'LEADERBOARD';
export const TOKEN = 'TOKEN';
export const RELOGIN = 'RELOGIN';



export function fetchStatus() {
  //const request = axios.get('http://restricted.dynu.com:8000/status')
    const request = axios.get('http://localhost:8000/api/status')
    return{
      type: STATUS,
      payload: request
    };
}



export function login(username,hashed_password) {
  //send username and hashed_password
    return function(dispatch) {
        axios.post(`http://localhost:8000/api/login`,{
            "username": `${username}`,
            "hashed_password": `${hashed_password}`
        })
            .then((response) => {
                const token = response.data.token;
                console.log('token',token)
                //removeCookieWithValue('tok')
                saveToCookie('tok',token.toString())
                console.log(getValueFromCookie('tok'))
                dispatch(loginSuccess(response))
            })
            .catch((err) => {
            console.log('Login error',err)
                dispatch(loginFailure(err))
            })
    }
}
function loginSuccess(response) {
    //console.log('res',response);
    //cookie.save('token', response.data.token, {path: '/'});
    return {
        type: LOGIN_SUCCESS,
        payload: response

    }
}

function loginFailure(err) {
    return {
        type: LOGIN_FAILURE,
        payload: err
    }
}


export function signup(username,hashed_password,avatar_name) {
    //send username and hashed_password
    return function(dispatch) {
        axios.post(`http://localhost:8000/api/signup`,{
            "avatar_name" : `${avatar_name}`,
            "username": `${username}`,
            "hashed_password": `${hashed_password}`
        })
            .then((response) => {
                dispatch(signUpSuccess(response))
            })
            .catch((err) => {
                console.log('signuperror',err)
                dispatch(signUpFailure(err))
            })
    }
}
function signUpSuccess(response) {
    return {
        type: SIGNUP_SUCCESS,
        payload: response
    }
}

function signUpFailure(err) {
    return {
        type: SIGNUP_FAILURE,
        payload: err
    }
}

export function fetchAiMonster() {
    const request = axios.get('http://localhost:8000/api/AI/monster');
    return {
        type: AI_MONSTER,
        payload: request
    }
}

export function fetchLeaderboard() {
    const request = axios.get('http://localhost:8000/api/leaderboard');
    return {
        type:LEADERBOARD,
        payload: request
    }
}
export function fetchFight(pmonster_instant_id,aimonster_instant_id,token) {
    const request = axios.get(`http://localhost:8000/api/fight?pmonster_instant_id=${pmonster_instant_id}&aimonster_instant_id=${aimonster_instant_id}&token=${token}`)
    return {
        type: FIGHT,
        payload: request
    }
}
// export function login(username, hashed_password) {
//     return (dispatch) => {
//         dispatch(loginRequest());
//         return axios.post(`http://localhost:8000/api/login`,{
//                             "username": `${username}`,
//                             "hashed_password": `${hashed_password}`
//                          })
//
//             .then((response) => {
//                 console.log(response);
//                 dispatch(loginSuccess(response));
//             })
//             .catch((error) => {
//                 dispatch(loginFailure(error.message));
//             })
//     }
// }
//
// function loginRequest() {
//
//     return {
//         type: LOGIN_REQUEST,
//         payload: {}
//     }
// }


export function createMove(lat,lng,token) {
    //send lat, lon, token
    const request = axios.put(`http://localhost:8000/api/move?latitude=${lat}&longitude=${lng}&token=${token}`);
    return {
        type: MOVE,
        payload: request
    };
}
export function fetchMonster(lat,lng,token) {
    const request = axios.get(`http://localhost:8000/api/monster?latitude=${lat}&longitude=${lng}&token=${token}`);
    return{
        type: MONSTER,
        payload: request
    };
}
export function fetchMonsterBag(token) {
    // const request = axios.get(`http://localhost:8000/api/bag/monsters?token=${token}`);
    // return{
    //     type: MONSTER_BAG,
    //     payload: request
    // };
    return function(dispatch) {
        axios.get(`http://localhost:8000/api/bag/monsters?token=${token}`)
            .then((response) => {
                dispatch(fetchMonsterBagSuccess(response))
            })
            .catch((err) => {
                console.log('fetchMonster',err)
                dispatch(fetchMonsterBagFailure(err))
            })
    }
}

function fetchMonsterBagSuccess(response) {
    console.log('fetchSuccess',response)
    return {
        type: MONSTER_BAG_SUCCESS,
        payload: response

    }
}

function fetchMonsterBagFailure(err) {
    return {
        type: MONSTER_BAG_FAILURE,
        payload: err
    }
}
// export function fetchMonster(lat,lng,token) {
//     axios.get(`http://localhost:8000/api/monster?latitude=${lat}&longitude=${lng}&token=${token}`)
//         .then((response)=> {
//             dispatch(fetchMonsterSuccess(response))
//         })
//         .catch((err) =>{
//
//         })
//     return{
//         type: MONSTER,
//         payload: request
//     };
// }
//
//
// function fetchMonsterSuccess(response) {
//     console.log(response)
//     return {
//         type: MONSTER_SUCCESS,
//         payload: response
//
//     }
// }
//
// function fetchMonsterFailure(err) {
//     console.log(err)
//     return {
//         type: MONSTER_FAILURE,
//         payload: err
//     }
// }

export function fetchStopStation(lat,lng,token) {
    const request = axios.get(`http://localhost:8000/api/stopsigns?latitude=${lat}&longitude=${lng}&token=${token}`);
    return{
        type: STOPSIGN,
        payload: request
    };
}

export function fetchThrow(ballType,token,monster_id) {
    const request = axios.get(`http://localhost:8000/api/throw?ball=${ballType}&monster_instant_id=${monster_id}&token=${token}`);
    return{
        type: THROW,
        payload: request
    };
}


export function createUser(props){
    const request = axios.post(`http://localhost:8000/login?`,props);
    return {
        type: CREATE_USER,
        payload: request
    };
}

export function isTokenExired(token){
    const request = axios.get(`http://localhost:8000/api/check/token?token=${token}`);
    return{
        type: TOKEN,
        payload: request
    };
}

export function relogin(token) {
    const request = axios.get(`http://localhost:8000/api/renew/token?token=${token}`);
    return{
        type: RELOGIN,
        payload: request
    };
}