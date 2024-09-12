
import { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../../slices/loginSlice"


const initState = {
    email: '',
    pw:''
}
const LoginComponent = () => {
    const [loginParam,setLoginParam] = useState({...initState})
    const dispatch = useDispatch()
    const handleClickLogin = (e) => {
        dispatch(login(loginParam))
    }
        const handleChange = (e) => {
        loginParam[e.target.name] = e.target.value
        setLoginParam({...loginParam})

}
    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email
                    address</label>
                <div className="mt-2">
                    <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-500 sm:text-sm sm:leading-6"
                        name="email" type={'text'} autoComplete="email" value={loginParam.email}  onChange={handleChange}/>
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password"
                           className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    <div className="text-sm">

                    </div>
                </div>
                <div className="mt-2">
                    <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-500 sm:text-sm sm:leading-6"
                        name="pw" type={'password'} value={loginParam.pw} onChange={handleChange}/>
                </div>
            </div>

            <div className="mt-10">
                <button onClick={handleClickLogin}
                        type="button"
                        className="flex w-full justify-center rounded-md bg-lime-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600">
                    Sign in</button>
            </div>
       </div>
    );
}

export default LoginComponent;