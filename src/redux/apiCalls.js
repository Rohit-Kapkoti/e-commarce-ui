import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess ,registerFailure,registerStart,registerSuccess} from "./userRedux"

export const login = async (dispatch, user)=>{
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login",user)
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure());
    }
}

export const register = async (dispatch, user)=>{
    dispatch(registerStart());
    try{
        console.log(user)
        const res = await publicRequest.post("/auth/register",user)
        dispatch(registerSuccess(res.data));
        console.log(res.data)


    }catch (error){
        dispatch(registerFailure())
    }
}