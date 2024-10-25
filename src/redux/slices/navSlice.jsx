import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ACTIVE_PAGE } from "../../Utils/Constants";

const initialState={
    activeSideMenu: 0,
    ActivePage: DEFAULT_ACTIVE_PAGE,
    breadcrumb: ["Portfolio", DEFAULT_ACTIVE_PAGE]     
}

export const NavigationSlice= createSlice({
    name: "Navigation",
    initialState,
    reducers: {
        setActiveSideMenu: (state, action) => {
            state.activeSideMenu= action.payload.activeSideMenu
            // state.breadcrumb[1]= action.payload.activeSideMenu
        },
        setActivePage: (state, action) => {
            state.ActivePage= action.payload.activePage
        }
    }
})

export const {setActiveSideMenu, setActivePage} = NavigationSlice.actions
export default NavigationSlice.reducer;