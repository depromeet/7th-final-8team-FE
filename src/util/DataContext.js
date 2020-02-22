import React, { useReducer, createContext, useContext } from 'react';
import * as api from './api';
import { createAsyncDispatcher, initAsyncState, createAsyncHandler } from './asyncActions';

const initState = {
	// users: initAsyncState,
    // user: initAsyncState,
    locations: initAsyncState,
    location: initAsyncState
    // (필수) 추가할 데이터에 대한 초기값을 지정
    // (예시) posts: initAsyncState,
};

// const usersHandler = createAsyncHandler('GET_USERS', 'users');
// const userHandler = createAsyncHandler('GET_USER', 'user');
const locationsHandler = createAsyncHandler('GET_LOCATIONS', 'locations');
const locationHandler = createAsyncHandler('GET_LOCATION', 'location');
// (필수) 추가할 데이터에 대한 reduce Handler을 생성
// (예시) const postsHandler = createAsyncHandler('GET_POSTS', 'posts');


function dataReducer(state, action){
    console.log(action.type)
    switch(action.type){
        // // USERS
        // case 'GET_USERS':
        // case 'GET_USERS_SUCCESS':
        // case 'GET_USERS_ERROR':
        //     return usersHandler(state, action);
        // // USER
        // case 'GET_USER':
        // case 'GET_USER_SUCCESS':
        // case 'GET_USER_ERROR':
        //     return userHandler(state, action);
        // LOCATIONS
        case 'GET_LOCATIONS':
        case 'GET_LOCATIONS_SUCCESS':
        case 'GET_LOCATIONS_ERROR':
            return locationsHandler(state, action);
        // LOCATION/ID
        case 'GET_LOCATION':
        case 'GET_LOCATION_SUCCESS':
        case 'GET_LOCATION_ERROR':
            return locationHandler(state, action);
        // (필수) 추가할 데이터에 대한 분기 케이스를 지정하고 Handler 연결
        // (예시) POST
        // case 'GET_POSTS':
        // case 'GET_POSTS_SUCCESS':
        // case 'GET_POSTS_ERROR':
        //     return postsHandler(state, action);
        default:
            throw new Error('Unhandled action type', action.type);
    }
}

// export const getUsers = createAsyncDispatcher('GET_USERS', api.getUsers);
// export const getUser = createAsyncDispatcher('GET_USER', api.getUser);
export const getLocations = createAsyncDispatcher('GET_LOCATIONS', api.getLocations);
export const getLocation = createAsyncDispatcher('GET_LOCATION', api.getLocation);
// (필수) HTTP 통신으로 데이터를 호출할 컴포넌트에서 사용할 함수명을 정의하고 createAsyncDispatcher() 반환값 할당(하고 비동기로 작업할 내용 )
// (예시) export const getPosts = createAsyncDispatcher('GET_POSTS', api.getPosts);



const DataStateContext = createContext(null);
const DataDispatchContext = createContext(null);

export function useDataState(){
    const state = useContext(DataStateContext);
    if(!state){
        throw new Error('Cannot find DataProvider');
    }
    return state;
}
export function useDataDispatch(){
    const dispatch = useContext(DataDispatchContext);
    if(!dispatch){
        throw new Error('Cannot find DataProvider');
    }
    return dispatch;
}

export function DataProvider({children}){
    const [state, dispatch] = useReducer(dataReducer, initState)
    console.log(state);
    return (
        <DataStateContext.Provider value={state}>
            <DataDispatchContext.Provider value={dispatch}>
                {children}
            </DataDispatchContext.Provider>
        </DataStateContext.Provider>
    )
}