import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.error = null;
    },
    clearAuth: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
})


export const loginUser = ({ user, password }) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/login', { user, password });
    console.log(response)
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      dispatch(setAuth({user:response.data.user}));
    } else {
      dispatch(setError('Invalid credentials'));
    }
  } catch (error) {
    dispatch(setError('Failed to login'));
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch(clearAuth());
};

export const { setAuth, clearAuth, setError } = authSlice.actions;


export default authSlice.reducer;
