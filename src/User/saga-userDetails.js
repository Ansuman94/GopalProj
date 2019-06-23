import "regenerator-runtime/runtime";
import { put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";

function* fetchUserDetails(action) {
  let userData = {};
  try {
    const fetchedData = yield axios.get(
      `https://itunes-search-iypahdbpmn.now.sh/api/search?media=all&term=${
        action.searchedString
      }%0D(${action.searchedString}`
    );
    let responseData = fetchedData["data"];
    yield put({ type: "RECEIVED_USER_DETAILS", payload: responseData });
  } catch (error) {
    console.log(error);
  }
}

export default function* actionWatcherUserDetails() {
  yield takeLatest("USER_DETAILS", fetchUserDetails);
}
