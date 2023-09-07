import {createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";





export const loginAsync=createAsyncThunk('users/loginAsync', async(userData)=>{
 
  try{
      const response =  await axios.post("https://dummyjson.com/auth/login",userData);
      // addUser(response.data);
      if (Object.keys(response.data).length > 0) {
        setInitialState(response.data);
      }
      localStorage.setItem("user",JSON.stringify(response.data));
      return response.data;
    }
  catch(error){
    throw error;
  }
})

const initialState={
   userProfile: {},
   loading:false,
   error:null
}

export const UserSlice=createSlice({
    name:"users",
    initialState,
    reducers:{
        setInitialState:(state,action)=>{
            const LoggedinUser=action.payload;
            state.userProfile=LoggedinUser;
        },
        // addUser:(state,action)=>{
        //     state.userProfile = action.payload

        // },
        clearUser: (state) => {
            state.userProfile= {};
          },
       
       
    },
    extraReducers: (builder) => {
      builder
        .addCase(loginAsync.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(loginAsync.fulfilled, (state, action) => {
          state.loading = false;
          state.userProfile=action.payload;
          // state.data = action.payload;
        })
        .addCase(loginAsync.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
})


export const {  clearUser,setInitialState
   
} = UserSlice.actions

export default UserSlice.reducer