export const actionTypes = {
    GET_SIGN_UP : "GET_SIGN_UP",
    GET_SIGN_UP_SUCCESS : "GET_SIGN_UP_SUCCESS",
}
export function getSignUp(value){
    return{
        type:actionTypes.GET_SIGN_UP,
        payload:{
            value,
        }
    };
}
export function getSignUpSuccess(data){
    return{
        type:actionTypes.GET_SIGN_UP_SUCCESS,
        payload:{
            data
        }
    };
}