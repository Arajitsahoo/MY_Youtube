import { createSlice } from "@reduxjs/toolkit";

const appSlice =  createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
    },
    reducers: {
        sidebarhandeler: (state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeSideBar: (state)=>{
            state.isMenuOpen = false;
        }
    }
})

export const {sidebarhandeler,closeSideBar} = appSlice.actions;

export default appSlice.reducer;