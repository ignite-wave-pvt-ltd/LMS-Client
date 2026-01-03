import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type User = {
  sub?: string;
  name?: string;
  email?: string;
  picture?: string;
  roles?: string[];
};

export type AuthState = {
  token: string | null;
  user: User | null;
};

const initialState: AuthState = {
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ token: string; user?: Partial<User> }>
    ) => {
      state.token = action.payload.token;
      state.user = { ...(state.user || {}), ...(action.payload.user || {}) };
    },
    clearCredentials: (state) => {
      state.token = null;
      state.user = null;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { setCredentials, clearCredentials, setUser } = authSlice.actions;
export default authSlice.reducer;
