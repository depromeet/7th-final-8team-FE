import { useEffect, useReducer } from 'react';
import axios from 'axios';

function reducer(state, action){
  switch(action.type){
    case 'LOADING':
      return {loading:true, data:null, error:null};
    case 'SUCCESS':
      return {loading:false, data:action.data, error:null};
    case 'ERROR':
      return {loading:false, data:null, error:action.error};
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export default function FetchAPI(method, URL, payload=null) {
  const [state, dispatch] = useReducer(reducer, {
    loading:false,
    data:null,
    error:null
  })
  
  
  useEffect(_=>{
    const fetchData = async () => {
      dispatch({type:'LOADING'});
      try {
        const response = await axios({
          url:URL,
          method:method,
          headers:header, // header 형식 {'content-type': 'application/x-www-form-urlencoded'}
          data:payload // payload 형식 {firstName: 'Fred',lastName: 'Flintstone'}
        });
        dispatch({type:'SUCCESS', data:response.data})
      } catch (e) {
        dispatch({type:'ERROR', data:e})
      }
    }
    fetchData();
  },[method, URL, payload]);
  return state;
}