import {createSlice} from "@reduxjs/toolkit"


const initialState={
   list: [],
   selectedIndex: null,
 
}

export const TodoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        setInitialState:(state,action)=>{
            const listofTodos=action.payload;
            state.list=listofTodos;
        },
        clearInitialState: (state) => {
            state.list= [];
          },
        addTodo:(state,action)=>{
            state.list.push(action.payload)
        },
        removeTodo:(state,action)=>{
            state.list.splice(action.payload,1)

        },
        editTodo:(state,action)=>{
            state.list[state.selectedIndex] = {...state.list[state.selectedIndex], title: action.payload}
        },
        setSelectedIndex:(state,action)=>{
            state.selectedIndex = action.payload
        },
        doneTodo:(state,action)=>{
            state.list[state.selectedIndex].completed=true;
        },
      
    }
})

export const {addTodo,
    removeTodo,
    editTodo,
    setSelectedIndex,
    doneTodo,
    setInitialState,
    clearInitialState
   
   
} = TodoSlice.actions


export default TodoSlice.reducer