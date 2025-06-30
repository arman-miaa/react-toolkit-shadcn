// src/redux/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  email: string;
  picture: string;
  id: string;
}

const initialState: UserState = {
  name: "",
  email: "",
  picture: "",
  id: "",
};
  

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFacebookUser: (state, action: PayloadAction<UserState>) => {
      return action.payload;
    },
    clearUser: () => initialState,
  },
});

export const { setFacebookUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
