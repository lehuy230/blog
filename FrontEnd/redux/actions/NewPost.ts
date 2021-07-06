export const actionTypes = {
    GET_NEW_POST : "GET_NEW_POST",
    GET_NEW_POST_SUCCESS : "GET_NEW_POST_SUCCESS",
    NEW_POST : "NEW_POST",
    NEW_POST_SUCCESS : "NEW_POST_SUCCESS",

}

export function newPost(value){
    return{
        type:actionTypes.NEW_POST,
        payload:{
            value,
        }
    };
}
export function newPostSuccess(data){
    return{
        type:actionTypes.NEW_POST_SUCCESS,
        payload:{
            data
        }
    };
}

export function getnewPost(value){
    return{
        type:actionTypes.GET_NEW_POST,
        payload:{
            value
        }
    };
}
export function getnewPostSuccess(data){
    return{
        type:actionTypes.GET_NEW_POST_SUCCESS,
        payload:{
            data
        }
    };
}
