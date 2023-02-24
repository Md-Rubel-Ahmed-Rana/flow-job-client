import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { toast } from 'react-hot-toast';
import auth from '../../firebase/firebase.config';

interface User {
    password: string
    email: string
    name: string
}
interface LoginUser {
    password: string
    email: string
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export const initialState: AuthState = {
  user: {
    email: "",
    password: "",
    name: ""
  } ,
  loading: false,
  error: null,
};

export const createUser = createAsyncThunk(
  'auth/createUser',
  async (user: User, { rejectWithValue }) => {
    try {
      const {name, email, password } = user;
      const { user: newUser } = await createUserWithEmailAndPassword(auth,email,password);
      const currentUser = auth.currentUser;
      if(currentUser !== null){
          await updateProfile(currentUser, {displayName: name})
          return newUser;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({email, password}: LoginUser, { rejectWithValue }) => {
    try {
      const { user: newUser } = await signInWithEmailAndPassword(auth,email,password);
          return newUser;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


const usersSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser: (state, action) =>{
        state.user = action.payload
        state.loading = false;
    }
  },
  extraReducers: (builder) => {
      builder.addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      builder.addCase(createUser.fulfilled, (state, action: any) => {
        state.user = action.payload;
        state.loading = false;
        window.location.replace("/");
        toast.success("User created successfully")
      })
      builder.addCase(createUser.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })

      builder.addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null
      })
      builder.addCase(loginUser.fulfilled, (state, action: any) => {
        state.user = action.payload;
        state.loading = false;
        window.location.replace("/")
      })
      builder.addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })
  },
});

export const {setCurrentUser} = usersSlice.actions

export default usersSlice.reducer;
