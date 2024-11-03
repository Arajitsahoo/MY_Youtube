import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        chatMessage: []
    },
    reducers: {
        addMessage: (state, action)=>{
            if(state.chatMessage.length>16)
                state.chatMessage.splice(state.chatMessage.length-1,1)
            state.chatMessage.unshift(action.payload);
        }
    }
});

export const {addMessage}=chatSlice.actions;
export default chatSlice.reducer;