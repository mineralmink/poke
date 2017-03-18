import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';
export const SPEED = 'SPEED';
export const GO_FORWARD = 'GO_FORWARD';
export const GO_BACKWARD = 'GO_BACKWARD';
export const GO_LEFT = 'GO_LEFT';
export const GO_RIGHT = 'GO_RIGHT';
export const STATUS = 'STATUS';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const MOVE = 'MOVE';
export const MONSTER = 'MONSTER';
export const STOPSIGN = 'STOPSIGN';
export const THROW = 'THROW';
export const CREATE_USER = 'CREATE_USER';


const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=lkajdsfapifjghdfghjkw';

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
    const request = axios.post(`http://localhost:8000/api/login`,{
            "username": `${username}`,
            "hashed_password": `${hashed_password}`
    });
    return {
        type: LOGIN,
        payload: request
    };
}

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

export function fetchStopStation(lat,lng,token) {
    const request = axios.get(`http://localhost:8000/api/stopsigns?latitude=${lat}&longitude=${lng}&token=${token}`);
    return{
        type: STOPSIGN,
        payload: request
    };
}

export function fetchThrow(ballType,token,monster_id) {
    const request = axios.get(`http://localhost:8000/api/throw?ball=${ballType}&monster_id=${monster_id}&token=${token}`);
    return{
        type: THROW,
        payload: request
    };
}

export function fetchPosts(){
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    //const request = axios.get('localhost:8000/status')
    // const request = axios.get('http://restricted.dynu.com:8080/status')
    return{
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(props){
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`,props);
  return {
    type:CREATE_POST,
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
export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
    return{
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return{
    type: DELETE_POST,
    payload: request
  };
}
