import {createSlice , PayloadAction} from "@reduxjs/toolkit"

type UserState={
    email:string
    firstName:string
    gender:string
    id:number
    image:string
    lastName:string
    token:number;
    username:string
}

const initialState={
   userProfile: { }
}

export const UserSlice=createSlice({
    name:"users",
    initialState,
    reducers:{
        addUser:(state,action:PayloadAction<UserState>)=>{
            state.userProfile = action.payload

        },
        // removeReservation:(state,action:PayloadAction<number>)=>{
        //     state.value.splice(action.payload,1)

        // }
    }
})

export const {addUser,
    // removeReservation
} = UserSlice.actions

export default UserSlice.reducer