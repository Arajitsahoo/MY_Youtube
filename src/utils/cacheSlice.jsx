import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
    name: "SuggestionSlice",
    initialState: {

    },
    reducers: {
        cachesResults: (state, action)=>{
            state = Object.assign(state, action.payload)
        }
    }
});

export const {cachesResults} = cacheSlice.actions;
export default cacheSlice.reducer;