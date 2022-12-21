import {createSlice} from '@reduxjs/toolkit';


export const userSlice = createSlice({
name: 'username', 
initialState: {
    username: null,
},
reducers: {
    login: (state, action) => {
        state.username = action.payload;
    },
    logout: (state) => {
        state.username = null;
    },
} 

});
export const { login, logout } = userSlice.actions;
export const selectUser= (state) => state.username.username; 
export default userSlice.reducer;