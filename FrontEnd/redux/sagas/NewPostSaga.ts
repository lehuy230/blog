import { call, put, takeLatest } from "redux-saga/effects";
import createNewPostApi from "../../const.config.api/api/createNewpostApi";
import getNewPostApi from "../../const.config.api/api/getNewPostApi";
import { actionTypes, } from "../actions/NewPost";
import Router from 'next/router';


//
function* createNewPostSaga(action) {
    try {
        var s4=()=>{
            return Math.floor((1+Math.random()) * 0x10000).toString().substring(1);
          }
         var genarateID=()=>{
            return s4() + s4() + "-" + s4() + s4() + "-" + s4() + s4() + "-" + s4() + s4() + "-" + s4() + s4();
          }
        const id = genarateID();
        const { user_id,description,imagesPost} = action.payload.value;
        const prams = {user_id,description,imagesPost,id}
        const respon = yield call(createNewPostApi,prams);
        //         const user = respon.data;
        // const respons = yield call(getAllDataApi);
        // const userList = respons.data;
        // if(respons.status){
        //     const checkUser = userList.some(user=>{return user["userName"] === userName});
        //     if(checkUser === true){
        //       alert("User đã tồn tại!")
        //     }else{
        //         const respon = yield call(postUserApi,prams);
        //         const user = respon.data;
        //         if(respon.status === 201){
        //             alert(`${user.userName} đã được tạo thành công`);
        //             Router.push('/')
        //           }else{
        //             alert("đã xảy ra lỗi trong quá trình tạo tài khoản");
        //           }
        //     }
        //   }
    
       
       
        //
      } catch (error) {
      }
}

function* getNewPostSaga(action) {
  try {
    const { value } = action.payload;
    console.log(value)
      const respon = yield call(getNewPostApi,value);
      //         const user = respon.data;
      // const respons = yield call(getAllDataApi);
      // const userList = respons.data;
      // if(respons.status){
      //     const checkUser = userList.some(user=>{return user["userName"] === userName});
      //     if(checkUser === true){
      //       alert("User đã tồn tại!")
      //     }else{
      //         const respon = yield call(postUserApi,prams);
      //         const user = respon.data;
      //         if(respon.status === 201){
      //             alert(`${user.userName} đã được tạo thành công`);
      //             Router.push('/')
      //           }else{
      //             alert("đã xảy ra lỗi trong quá trình tạo tài khoản");
      //           }
      //     }
      //   }
  
     
     
      //
    } catch (error) {
    }
}
//

//

//
//
const NewPostSaga = [
  takeLatest(actionTypes.NEW_POST, createNewPostSaga),
  takeLatest(actionTypes.GET_NEW_POST, getNewPostSaga),
];

export default NewPostSaga;
