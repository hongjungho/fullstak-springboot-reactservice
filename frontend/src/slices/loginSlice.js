import { createSlice } from "@reduxjs/toolkit";
const initState = {
    email: ''
}

export const loginPostAsync = createAsyncThunk('loginPostAsync', (param) => {
    return loginPost(param)
})

const loginSlice = createSlice({
    name: 'LoginSlice' ,
    initialState: initState,
    reducers: {
        login : (state,action) => {
            console.log("login....")
            //{email, pw로 구성 }
            const data = action.payload
            console.log(data);
            //새로운 상태
            return {email: data.email}
        },
        logout : (state,action) => {
            console.log("logout....")
            return {...initState}
        }
    },
    extraReducers: (builder) => {
        builder.addCase( loginPostAsync.fulfilled, (state, action) => {
            console.log("fulfilled")
        })
        .addCase(loginPostAsync.pending, (state,action) => {
        console.log("pending")
        })
        .addCase(loginPostAsync.rejected, (state,action) => {
        console.log("rejected")
        })
    }
})
export const {login,logout} = loginSlice.actions
export default loginSlice.reducer