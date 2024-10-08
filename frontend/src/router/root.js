import { Suspense, lazy } from "react";
const {createBrowserRouter} = require("react-router-dom");

const Loading =
<div className="flex items-center justify-center">
    <h3 className="text-3xl font-bold items-center flex ">로딩중 입니다...</h3><br/>
        <svg className="animate-spin ml-1 mr-1 h-32 w-32 flex items-center  text-teal-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
</div>

const Main       = lazy(()=>import("../pages/MainPage"))
const Mypage     = lazy(()=>import("../pages/MyPage"))
const Board      = lazy(()=>import("../pages/board/BoardIndex"))
const BrdDetail  = lazy(()=>import("../pages/board/BoardDetail"))
const BrdEdit    = lazy(()=>import("../pages/board/BoardEdit"))
const Login      = lazy(()=>import("../pages/member/Login"))
const Logout      = lazy(()=>import("../pages/member/Logout"))

const root = createBrowserRouter([
    {
        path:"",
        element:<Suspense fallback={Loading}><Main/></Suspense>
    },
    {
        path:"mypage",
        element:<Suspense fallback={Loading}><Mypage/></Suspense>
    },
    {
        path:"login",
        element:<Suspense fallback={Loading}><Login/></Suspense>
    },
    {
        path:"logout",
        element:<Suspense fallback={Loading}><Logout/></Suspense>
    },
    {
        path:"board",
        element:<Suspense fallback={Loading}><Board/></Suspense>
    },
    {
        path:"board/:bid",
        element:<Suspense fallback={Loading}><BrdDetail/></Suspense>
    },
    {
        path:"board/edit/:bid",
        element:<Suspense fallback={Loading}><BrdEdit/></Suspense>
    },
    {
        path:"board/edit",
        element:<Suspense fallback={Loading}><BrdEdit/></Suspense>
    }
])

export default root;