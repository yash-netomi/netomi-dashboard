import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  username: string;
};
const initialState: InitialState = {
    username: "Yash",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { setUsername } = authSlice.actions;
