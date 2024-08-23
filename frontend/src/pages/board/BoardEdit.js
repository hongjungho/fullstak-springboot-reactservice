import { useEffect, useState } from "react";
import React from "react";
import BasicLayout from "../../layouts/BasicLayout";
import {Outlet, useParams, Link, useNavigate} from "react-router-dom";
import { Textarea, Input } from '@headlessui/react'

const BoardEdit = ()=>{

    const {bid} = useParams();
    const navi = useNavigate();
    const [subject, setSubject] = useState("")
    const [content, setContent] = useState("")
    const [loading, setLoading] = useState(false)
    // const urlAddr = 'https://jsonplaceholder.typicode.com/users/';
    const urlAddr = 'http://localhost:8080/api/board/';

    const callApi = ()=>
    {
        if(!bid)
        {
            return false;
        }
        setLoading(true);
        fetch(urlAddr + bid)
        .then((response) => response.json())
        .then((json) => {
            setSubject(json.subject)
            setContent(json.content)
            setLoading(false);
        });
    }
    
    useEffect(()=>{
        callApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    
    function onSubjectChange(event){
        setSubject(event.target.value)
    }
    function onContentChange(event){
        setContent(event.target.value)
    }

    function clickSaveBoard()
    {
        if(bid)
        {
            fetch('/api/board/' + bid, 
                {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        subject: document.getElementById('subject').value,
                        content: document.getElementById('content').value
                    })
                }).then(() => 
                {
                    alert('수정이 완료되었습니다.');
                    navi('/board/' + bid);
                });
        }
        else
        {
            fetch('/api/board', 
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        subject: document.getElementById('subject').value,
                        content: document.getElementById('content').value
                    })
                }).then(() => 
                {
                    alert('등록 완료되었습니다.');
                    navi('/board')
                    // window.location.replace('/board');
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
        
    <BasicLayout title={'Board Edit'}>
        <h3 className="text-3xl font-bold">Board Edit 입니다.</h3>
        <div>{bid}</div>
        <table className="table-auto mt-10 bg-slate-200 border-separate border-spacing-0 w-full rounded-[10px] overflow-hidden">
            <tbody>
                <tr><th className="border-b border-r border-white">Subject</th><td className="border-b border-r border-white"><Input type="text" className="w-full" name="subject" id="subject" onChange={onSubjectChange} value={subject}/></td></tr>
                <tr><th className="border-b border-r border-white">Content</th><td className="border-b border-r border-white">
                    <Textarea className="w-full" id="content" onChange={onContentChange} value={content}/>
                </td></tr>
            </tbody>
        </table>
        <div className="w-full text-right mt-4">
            <button className="border border-[#A2B29F] rounded bg-[#BDD2B6] hover:bg-[#A2B29F] w-20 h-8 text-white" onClick={clickSaveBoard}>저장</button>
            <button className="border border-[#A2B29F] rounded bg-white hover:bg-gray-200 w-20 h-8 text-[#798777] ml-3">
                <Link to={'/board'}>목록</Link>
            </button>
        </div>
        <Outlet/>
    </BasicLayout>
    );
}
export default BoardEdit;