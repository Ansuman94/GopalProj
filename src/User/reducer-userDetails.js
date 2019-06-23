const initialState = {
  userData: [],
  searchedString: "",
  isLoading: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case "USER_DETAILS":
      return {
        ...state,
        isLoading: true
      };
    case "HANDLE_SEARCH_STRING":
      return {
        ...state,
        searchedString: action.payload
      };
    case "RECEIVED_USER_DETAILS":
      return {
        ...state,
        ...{ userData: action.payload },
        isLoading: false
      };
    default:
      return state;
  }
}
