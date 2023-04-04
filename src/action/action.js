export const apiStart = (data) => {
    return{
        type: 'API_START',
        payload: data
    }
  };
  export const loading = (data) => {
    return{
        type: 'LOADING',
        payload: data
    }
  };
  export const error = (data) => {
    return{
        type: 'ERROR',
        payload: data
    }
  };