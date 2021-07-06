import { all, fork } from "redux-saga/effects";
import LoginSaga from "./LoginSaga";
import SignUpSaga from "./SignUpSaga";
import NewPostSaga from './NewPostSaga'

export default function* rootSaga() {
  yield all([
    ...LoginSaga,
    ...SignUpSaga,
    ...NewPostSaga
  ]);
}
