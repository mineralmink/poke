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

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=lkajdsfapifjghdfghjkw';

export function fetchSpeed() {
  const request = axios.get('http://restricted.dynu.com:8080/status')
    console.log('ok')
    return{
      type: SPEED,
      payload: request
    };
}

export function fetchPosts(){
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
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
