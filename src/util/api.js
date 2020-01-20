import axios from 'axios';

export async function getUsers(){
    const res = await axios.get('http://jsonplaceholder.typicode.com/users');
    return res.data;
}

export async function getUser(id){
    const res = await axios.get(`http://jsonplaceholder.typicode.com/${id}`);
    return res.data;
}

// API 통신할 프로미스 함수 정의
// (예시)
//export async function getPosts(){
//    const res = await axios.get(`http://jsonplaceholder.typicode.com/posts`);
//    return res.data;
//}