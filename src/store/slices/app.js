import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    roomID: null,
}

export const appSlice = createSlice({
    name: "app",
    initialState,

    reducers: {
        enterRoom: (state, action) => {
            state.roomID = action.payload.roomID
        },
    },
})

export const { enterRoom } = appSlice.actions

export const selectRoomID = (state) => state.app.roomID

export default appSlice.reducer
