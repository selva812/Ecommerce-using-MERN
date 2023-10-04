import {createReducer} from "@reduxjs/toolkit"
const intialstate={
    isAuthenticated :false,
}
export const userreducer= createReducer(intialstate,{
    LoadUserRequest:(state) =>{
        state.loading = true
    },
    LoadUserSuccess :(state,action)=>{
        state.isAuthenticated=true
        state.loading=false
        state.user =action.payload
    },
    LoadUserFail:(state,action)=>{
        state.loading=false
        state.error=action.payload
        state.isAuthenticated=false
    },
    ClearErrors:(state)=>{
        state.error=null
    }
})