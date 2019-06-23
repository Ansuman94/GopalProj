import { takeLatest, put, call } from "redux-saga/effects";

export const getUserDetails = searchedString => {
  return {
    type: "USER_DETAILS",
    searchedString
  };
};
export const handleSearchString = searchedString => {
  return {
    type: "HANDLE_SEARCH_STRING",
    payload: searchedString
  };
};
