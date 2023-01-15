import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './service';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const handleAuthPending = state => state;
const handleAuthRejected = (state, action) => {
  const error = action.error.message;
  toast.error(`${error}, please try again`);
};

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: handleAuthPending,
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      toast.info(
        `Registration was successful, wellcome ${action.payload.user.name}`
      );
    },
    [register.rejected]: handleAuthRejected,
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      toast.info(`Login was successful, wellcome ${action.payload.user.name}`);
    },
    [logIn.rejected]: handleAuthRejected,
    [logOut.fulfilled](state) {
      toast.info(`Logout was successful, goodbye ${state.user.name}`);
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state, action) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
