import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({

    name: "note",
    initialState:[{
           
            title: "Feedback",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
           
            title: "Weekly Task",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        },
        {
            title: "Lyrics",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        }
    ],
    reducers:{
        add:(state,action)=>{
            state.push(action.payload);
        },
        edit:(state,action)=>{
            state.splice(action.payload.param, 1, action.payload.values)
        },
        del:(state,action)=>{
            state.splice(action.payload, 1);
        }
    }
       
})
export const {add, edit, del} = noteSlice.actions
export default noteSlice.reducer