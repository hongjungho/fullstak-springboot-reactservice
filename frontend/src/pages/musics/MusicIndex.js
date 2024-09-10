import React from "react";
import BasicLayout from "../../layouts/BasicLayout";
import ProgresSpin from "../../components/ProgresSpin";
import { useEffect, useState } from "react";
import {Outlet, Link} from "react-router-dom";

const MusicIndex = ()=>{

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
            <ProgresSpin/>
        )}
    return (
        
    <BasicLayout title={'Music Test'}>
        <h3 className="text-3xl font-bold">Music Test 입니다.</h3>
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
export default MusicIndex;