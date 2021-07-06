import produce from "immer";
import { actionTypes } from "../actions/LoginActions";

let initialState = {
    user:null,
}
const successGetUser = (draft:any, data:any)=>{
    draft.user = data
}
const reducer = (state = initialState, action:any)=>{
    return produce(state, draft=>{
        switch(action.type){
            case actionTypes.GET_USER_SUCCESS:
                successGetUser(draft,action.payload.data);
                break;
        }
    })
}
export default reducer;