import {createSlice } from "@reduxjs/toolkit"



const initialState={
   userProfile: { }
}

export const UserSlice=createSlice({
    name:"users",
    initialState,
    reducers:{
        setInitialState:(state,action)=>{
            const LoggedinUser=action.payload;
            state.userProfile=LoggedinUser;
        },
        addUser:(state,action)=>{
            state.userProfile = action.payload

        },
        clearUser: (state) => {
            state.userProfile= {};
          },
       
       
    }
})

export const {addUser,  clearUser,setInitialState
   
} = UserSlice.actions

export default UserSlice.reducer