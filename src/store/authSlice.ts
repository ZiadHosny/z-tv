import { createSlice } from "@reduxjs/toolkit"

type AuthState = {
    user: {
        email: string
    },
}

const initialState: AuthState = {
    user: {
        email: ''
    },
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, { payload }: { payload: string | null | undefined }) => {
            state.user.email = payload ?? ''
        },
    }
})

export const { setUser } = authSlice.actions

export const authReducer = authSlice.reducer