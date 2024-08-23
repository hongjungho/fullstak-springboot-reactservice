import { useEffect, useState } from "react";
import React from "react";
import BasicLayout from "../../layouts/BasicLayout";
import {Outlet, useParams, Link, useNavigate} from "react-router-dom";

const BoardDetail = ()=>{

    const {bid} = useParams();
    const navi = useNavigate();
    const [data, setData]       = useState({})
    const [loading, setLoading] = useState(false)
    // const urlAddr = 'https://jsonplaceholder.typicode.com/users/';
    const urlAddr = 'http://localhost:8080/api/board/';

    const callApi = ()=>{
        
        setLoading(true);
        fetch(urlAddr + bid)
        .then((response) => response.json())
        .then((json) => {
            setData(json)
            setLoading(false);
        });
    }

    useEffect(()=>{
        callApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function onDeleteBoard(event)
    {
        if(window.confirm('정말 삭제?'))
        {
            fetch('/api/board/' + bid, 
                {
                    method: 'DELETE'
                }).then(() => 
                {
                    alert('삭제가 완료되었습니다.');
                    // location.replace('/articles');
                    navi('/board');
                });
        }
    }

    if (loading) {
        return (
        <>
        <div className="flex items-center justify-center">
            <h3 className="text-3xl font-bold items-center flex ">로딩중 입니다...</h3><br/>
                <svg className="animate-spin ml-1 mr-1 h-32 w-32 flex items-center  text-teal-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </div>
        </>
    )}
    return (
        
    <BasicLayout title={'Board Detail'}>
        <h3 className="text-3xl font-bold">Board Detail 입니다.</h3>
        <table className="table-auto mt-10 bg-slate-200 border-separate border-spacing-0 w-full rounded-[10px] overflow-hidden">
            <tbody>
                <tr><th className="border-b border-r border-white">ID</th><td className="border-b border-r border-white">{data.id}</td></tr>
                <tr><th className="border-b border-r border-white">Subject</th><td className="border-b border-r border-white">{data.subject}</td></tr>
                <tr><th className="border-b border-r border-white">Content</th><td className="border-b border-r border-white">{data.content}</td></tr>
                <tr><th className="border-b border-r border-white">Created Dt.</th><td className="border-b border-r border-white">{data.createDate}</td></tr>
                <tr><th className="border-b border-r border-white">Modified Dt.</th><td className="border-b border-r border-white">{data.modifyDate}</td></tr>
            </tbody>
        </table>
        <div className="w-full text-right mt-4">
            <button className="border border-[#A2B29F] rounded bg-[#BDD2B6] hover:bg-[#A2B29F] w-20 h-8 text-white" >
                <Link to={'/board/edit/' + data.id}>수정</Link>
            </button>
            <button className="border border-red-600 rounded bg-red-300 hover:bg-red-400 w-20 h-8 text-white ml-3" onClick={onDeleteBoard}>삭제</button>
            <button className="border border-[#A2B29F] rounded bg-white hover:bg-gray-200 w-20 h-8 text-[#798777] ml-3" to={'/board'}>
                <Link to={'/board'}>목록</Link>
            </button>
            
        </div>
        <Outlet/>
    </BasicLayout>
    );
}
export default BoardDetail;