import logo from '../logo2.svg';
import BasicLayout from "../layouts/BasicLayout";
import BasicSlider from "../components/BasicSlider"
import { useEffect, useState } from "react";
import axios from 'axios';
import {Outlet, Link} from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const md5 = require("blueimp-md5");
const sourceUrl = 'https://ws.audioscrobbler.com/2.0/';
const authUrl   = 'http://www.last.fm/api/auth/';
const apiKey    = '2c7a7f34f3f8af01dcdae0baf5402da0';
const format    = 'json';


const MainPage = ()=>
{
  // 클라이언트와 서버가 통신할때 쿠키와 같은 인증 정보 값을 공유하겠다는 설정
  // axios.defaults.withCredentials = true;
  console.log('md5 : ');
  console.log(md5('안녕하세요'));

  let method = 'track.search';
  const track = 'Believe';
  let requestUrl = `${sourceUrl}?method=${method}&track=${track}&api_key=${apiKey}&format=${format}`;
  
  
  const [datas, setDatas]     = useState([])
  const [token, setToken]     = useState('')
  const [loading, setLoading] = useState(false);
    
  // const getApiSession = ()=>{
    
  //   let method = 'auth.gettoken';
  //   let requestUrl = `${sourceUrl}?method=${method}&api_key=${apiKey}&format=${format}`;
  //   axios.get(requestUrl, { withCredentials: true })
  //        .then((response)=>{setToken(response.data.token)})
  //        .catch((error)=>{console.log(error);});
        
  //   useEffect(()=>{
  //     console.log('token : ');
  //     console.log(token);
  //     let requestAuth = `${authUrl}?api_key=${apiKey}&token=${token}`;
  //     axios.get(requestAuth, { withCredentials: true }).then((response)=>{
  //       console.log('requestAuth : ');
  //       console.log(response);
  
  //       setDatas(response.data);
  
  //       setLoading(false)
  //     });
  //   },[token]);
  // }
useEffect(()=>{
  // getApiSession();
  axios.get(requestUrl).then((response)=>{setDatas(response.data.results.trackmatches.track);setLoading(false);});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  console.log('hey')
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
    <BasicLayout title={'Main Page'}>
    <div className="mb-10 p-20 slider-container w-full text-green-700">
      <BasicSlider/>
    </div>
    <section>
        <table className="table-auto mt-4 bg-slate-200 border-separate border-spacing-0 w-full rounded-[10px] overflow-hidden">
        <thead>
            <tr>
            <th className="border-b border-r border-white">No.</th>
            <th className="border-b border-r border-white">Name</th>
            <th className="border-b border-r border-white">Artist</th>
            <th className="border-b border-r border-white">Link</th>
            </tr>
        </thead>
        <tbody>
            {datas.map((data, index)=>{
                return (
                <tr key={index}>
                    <td className="border-b border-r border-white">{index+1}</td>
                    <td className="border-b border-r border-white">{data.name}</td>
                    <td className="border-b border-r border-white">{data.artist}</td>
                    <td className="border-b border-r border-white"><Link to={data.url}>{data.artist}'s Link</Link></td>
                </tr>
                )
            })}
        </tbody>
    </table>
        <Outlet/>
    </section>
    <section className="App-header mt-1">
      <img src={logo} className="App-logo mb-10" alt="logo" />
      <p>
        Edit <code>src/App.js</code> git branch test
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </section>
    
    </BasicLayout>
  ); 
}

export default MainPage;
