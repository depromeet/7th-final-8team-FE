export function createAsyncDispatcher(type, promiseFunc){
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;

  async function actionHandler(dispatch, ...rest) {
      dispatch({ type });
      try {
          const data = await promiseFunc(...rest);
          dispatch({
              type: SUCCESS,
              data
          })
      } catch (e) {
          dispatch({
              type: ERROR,
              error: e
          });
      }
  }
  return actionHandler;
}

export const initAsyncState = { loading: false, data: null, error: null }
const loadingState = { loading:true, data:null, error:null };
const success = data =>({ loading: false, data, error: null });
const error = e =>({ loading: false, data:null, error: e });

// reducer에서 action에 따른 동작을 정의하는 코드(createAsyncHandler)
export function createAsyncHandler(type, key){
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`; 
  function handler(state, action) {
      switch(action.type){
          case type: 
              return {
                  ...state,
                  [key]: loadingState
              };
          case SUCCESS:
              return {
                  ...state,
                  [key]: success(action.data)
              };
          case ERROR:
              return {
                  ...state,
                  [key]: error(action.error)
              };
          default:
              return state;
      }
  }
  return handler;
}