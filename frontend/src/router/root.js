import { Suspense, lazy } from "react";
import ProgresSpin from "../components/ProgresSpin";
const {createBrowserRouter} = require("react-router-dom");

const Loading = <ProgresSpin/>

const Main       = lazy(()=>import("../pages/MainPage"))
const Mypage     = lazy(()=>import("../pages/MyPage"))
const Board      = lazy(()=>import("../pages/board/BoardIndex"))
const BrdDetail  = lazy(()=>import("../pages/board/BoardDetail"))
const BrdEdit    = lazy(()=>import("../pages/board/BoardEdit"))
const Musics     = lazy(()=>import("../pages/musics/MusicIndex"))
const Login      = lazy(()=>import("../pages/Login"))

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
        path:"musics",
        element:<Suspense fallback={Loading}><Musics/></Suspense>
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