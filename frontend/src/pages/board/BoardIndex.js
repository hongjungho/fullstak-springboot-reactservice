import { useEffect, useState } from "react";
import React from "react";
import BasicLayout from "../../layouts/BasicLayout";
import {Outlet, Link} from "react-router-dom";

const BoardIndex = ()=>{

    let [datas, setDatas]     = useState([])
    let otherDatas = [];
    const [loading, setLoading] = useState(false)

    const callApi = ()=>{
        // const urlAddress = 'https://jsonplaceholder.typicode.com/users'
        const urlAddress = 'http://localhost:8080/api/board'
        // const urlAddress = '/api/board'
        setLoading(true);
        fetch(urlAddress)
        .then((response) => response.json())
        .then((json) => {
            setDatas(json)
            otherDatas = json
            console.log(json)
            console.log(otherDatas)
            console.log(datas)
            setLoading(false);
        });
    }

    useEffect(()=>{
        callApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) {
        return (
        <div className="flex items-center justify-center">
            <h3 className="text-3xl font-bold items-center flex ">로딩중 입니다...</h3><br/>
                <svg className="animate-spin ml-1 mr-1 h-32 w-32 flex items-center  text-teal-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </div>
        )}
    return (
        
    <BasicLayout title={'Board List'}>
        <h3 className="text-3xl font-bold">Board List 입니다.</h3>
        <div className="w-full text-right mt-10">
            <button className="border border-[#A2B29F] rounded bg-[#BDD2B6] hover:bg-[#A2B29F] w-20 h-8 text-white" >
                <Link to={'/board/edit/'}>등록</Link>
            </button>
        </div>
        <table className="table-auto mt-4 bg-slate-200 border-separate border-spacing-0 w-full rounded-[10px] overflow-hidden">
        <thead>
            <tr>
            <th className="border-b border-r border-white">No.</th>
            <th className="border-b border-r border-white">Subject</th>
            <th className="border-b border-r border-white">Date</th>
            </tr>
        </thead>
        <tbody>
            {datas.map((data, index)=>{
                return (
                <tr key={index}>
                    <td className="border-b border-r border-white">{index+1}</td>
                    <td className="border-b border-r border-white"><Link to={'/board/'+data.id}>{data.subject}</Link></td>
                    <td className="border-b border-r border-white">{data.createDate}</td>
                </tr>
                )
            })}
        </tbody>
    </table>
        <Outlet/>
    </BasicLayout>
    );
}
export default BoardIndex;