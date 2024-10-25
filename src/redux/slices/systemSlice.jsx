import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_DRAWER_FLAG, LightTheme } from "../../Utils/Constants";

const initialState={
    uiTheme: LightTheme,
    drawerOpen: DEFAULT_DRAWER_FLAG,
    snackbarOpen: false,
    snackbarMessage: ""
}

export const SystemSlice= createSlice({
    name: "System",
    initialState,
    reducers: {
        setUITheme: (state, action) => {
            state.uiTheme= action.payload.uiTheme
        },
        setDrawerOpen: (state, action) => {
            console.log("DrawerOpen ",action.payload.drawerOpen)
            state.drawerOpen= action.payload.drawerOpen
        },
        setSnackbarOpen: (state, action) => {
            state.snackbarOpen= action.payload.snackbarOpen
            state.snackbarMessage= action.payload.snackbarMessage
        }
    }
})

export const {setUITheme, setDrawerOpen, setSnackbarOpen} = SystemSlice.actions
export default SystemSlice.reducer;