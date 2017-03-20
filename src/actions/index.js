import axios from 'axios';
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




export function fetchStatus() {
  //const request = axios.get('http://restricted.dynu.com:8000/status')
    const request = axios.get('http://localhost:8000/api/status')
    console.log('ok');
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
                dispatch(loginSuccess(response))
            })
            .catch((err) => {
                console.log('err')
                console.log(err)
                dispatch(loginFailure(err))
            })
    }
}
function loginSuccess(response) {
    console.log(response)
    return {
        type: LOGIN_SUCCESS,
        payload: response

    }
}

function loginFailure(err) {
    console.log(err)
    return {
        type: LOGIN_FAILURE,
        payload: err
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
    const request = axios.post(`localhost:8000/login?`,props);
    return {
        type:CREATE_USER,
        payload: request
    };
}
