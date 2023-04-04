const initialState = {
  data: null,
  loading: false,
  error: null,
};

const fetchAPIDATA = (state = initialState, action) => {
  switch (action.type) {
    case "API_START":
      return {
        ...state,   
        data: action.payload,
      };
    case "LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default fetchAPIDATA;
