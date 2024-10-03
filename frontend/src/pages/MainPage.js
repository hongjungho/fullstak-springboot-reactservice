import logo from '../logo2.svg';
import BasicLayout from "../layouts/BasicLayout";
import BasicSlider from "../components/BasicSlider"
import { useEffect, useState } from "react";
import axios from 'axios';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const md5 = require("blueimp-md5");
const sourceUrl = 'https://ws.audioscrobbler.com/2.0/';
const authUrl   = 'http://www.last.fm/api/auth/';
const apiKey    = '2c7a7f34f3f8af01dcdae0baf5402da0';
const format    = 'json';



const MainPage = ()=>
{
  console.log('md5 : ');
  console.log(md5('안녕하세요'));

  let method = 'track.search';
  const track = 'Believe';
  let requestUrl = `${sourceUrl}?method=${method}&track=${track}&api_key=${apiKey}&format=${format}`;
  
  
  const [datas, setDatas]     = useState([])
  axios.get(requestUrl).then((response)=>{console.log(response.data.results.trackmatches.track);});
  const [token, setToken]     = useState('')
  const [loading, setLoading] = useState(false);
    
  const getApiSession = ()=>{
    
    let method = 'auth.gettoken';
    let requestUrl = `${sourceUrl}?method=${method}&api_key=${apiKey}&format=${format}`;
    axios.get(requestUrl, { withCredentials: true }).then((response)=>{setToken(response.data.token)}).then((data)=>{
      
      console.log('data : ');
      console.log(data);

      console.log('token : ');
      console.log(token);
      let requestAuth = `${authUrl}?api_key=${apiKey}&token=${token}`;
      axios.get(requestAuth, { withCredentials: true }).then((response)=>{
        console.log('requestAuth : ');
        console.log(response);
  
        setDatas(response.data);
  
        setLoading(false);
      });
    }).catch((error)=>{console.log(error);});
    // 클라이언트와 서버가 통신할때 쿠키와 같은 인증 정보 값을 공유하겠다는 설정
    // { withCredentials: true }
  }
useEffect(()=>{
  getApiSession();

  console.log(datas);
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
    <BasicLayout title={'Main Page'}>
    <div className="mb-10 p-20 slider-container w-full text-green-700">
      <BasicSlider/>
    </div>
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
