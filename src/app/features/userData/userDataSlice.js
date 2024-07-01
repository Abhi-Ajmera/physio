import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: 0,
};

export const userDataSlice = createSlice({
	name: "userData",
	initialState,
	reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = userDataSlice.actions;

export default userDataSlice.reducer;
