import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsers } from '../../services/userApi';

export const getUsersFromAPI = createAsyncThunk('users/fetch', async (_, { rejectWithValue }) => {
  try {
    return await fetchUsers();
  } catch (err) {
    return rejectWithValue(err.message);
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState: { users: [], loading: false, error: null },
  reducers: {
    addUser: (state, action) => {
      state.users.push({
        id: state.users.length ? Math.max(...state.users.map(u => u.id)) + 1 : 1,
        ...action.payload,
      });
    },
    updateUser: (state, action) => {
      const idx = state.users.findIndex(u => u.id === action.payload.id);
      if (idx !== -1) state.users[idx] = { ...state.users[idx], ...action.payload };
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(u => u.id !== action.payload);
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersFromAPI.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsersFromAPI.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsersFromAPI.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addUser, updateUser, deleteUser, clearError } = usersSlice.actions;
export default usersSlice.reducer;
