import { call, put, takeLatest } from "redux-saga/effects";
import getAllDataApi from "../../const.config.api/api/getAllDataApi";
import { actionTypes, getUserSuccess } from "../actions/LoginActions";
import Router from 'next/router';


//
function* loadContractDataSaga(action) {
  try {
    const {userName,password} = action.payload.value;
    const respon = yield call(getAllDataApi);
    const userList = respon.data;
    if(respon.status){
      const checkUser =  yield userList.some(user=>{return user["userName"] === userName});
      const checkPassWord =  yield userList.some(user=>{return user["password"] === password});
      if(checkUser === true && checkPassWord === true){
        const userLogin = userList.filter((user)=>{return user["userName"]===userName});
        yield put(getUserSuccess(userLogin));
        Router.push('/homepage')
      }else{
        alert("nhap sai user hoac password");
      }
    }
    
    //
  } catch (error) {
  }
}
//

//

//
//
const ContractSaga = [
  takeLatest(actionTypes.GET_USER, loadContractDataSaga),
];

export default ContractSaga;
