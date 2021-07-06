import { call, put, takeLatest } from "redux-saga/effects";
import postUserApi from "../../const.config.api/api/postUserApi";
import { actionTypes, getSignUpSuccess} from "../actions/SignUpAction";
import Router from 'next/router'
import getAllDataApi from "../../const.config.api/api/getAllDataApi";

//
function* signUpSaga(action) {
  try {
    var s4=()=>{
        return Math.floor((1+Math.random()) * 0x10000).toString().substring(1);
      }
     var genarateID=()=>{
        return s4() + s4() + "-" + s4() + s4() + "-" + s4() + s4() + "-" + s4() + s4() + "-" + s4() + s4();
      }
    const id = genarateID();
    const {userName,password,name,images,introduce,address} = action.payload.value;
    const prams = {userName,password,name,id,introduce,address,images}
    const respons = yield call(getAllDataApi);
    const userList = respons.data;
    if(respons.status){
        const checkUser = userList.some(user=>{return user["userName"] === userName});
        if(checkUser === true){
          alert("User đã tồn tại!")
        }else{
            const respon = yield call(postUserApi,prams);
            const user = respon.data;
            if(respon.status === 201){
                alert(`${user.userName} đã được tạo thành công`);
                Router.push('/')
              }else{
                alert("đã xảy ra lỗi trong quá trình tạo tài khoản");
              }
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
  takeLatest(actionTypes.GET_SIGN_UP, signUpSaga),
];

export default ContractSaga;
