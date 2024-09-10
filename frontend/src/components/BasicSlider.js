import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

//슬라이드 화살표 색상변경하기 위한 커스텀
//App.css 에 .slickCustArrow 로 !important 로 줘야함
function CustomArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button type="button"
        className={className + ' slickCustArrow'}
        style={{ ...style}}
        onClick={onClick}
      />
    );
  }

//기본적으로 이미지는 3개씩 보여주고 반응형으로 너비가 줄어들면 1개만 표시하도록
const BasicSlider = ()=>
{
  //api 사용하기전 임시 데이터
  const datas = [
      {
          songNo:1,
          imgUrl:'https://lastfm.freetls.fastly.net/i/u/300x300/eca329563f4a13cd7c0c319aa3c7ac97.jpg',
          altDesc:'album1',
      },
      {
          songNo:2,
          imgUrl:'https://lastfm.freetls.fastly.net/i/u/300x300/a75f27c2e2bb01c6e6f0e4d123b31270.jpg',
          altDesc:'album2',
      },
      {
          songNo:3,
          imgUrl:'https://lastfm.freetls.fastly.net/i/u/300x300/1c09ef23940ff8de50c3d186cc4d27f3.jpg',
          altDesc:'album3',
      },
      {
          songNo:4,
          imgUrl:'https://lastfm.freetls.fastly.net/i/u/300x300/363326365bf275e534f3bf7d6164de4f.jpg',
          altDesc:'album4',
      },
      {
          songNo:5,
          imgUrl:'https://lastfm.freetls.fastly.net/i/u/300x300/b277bdd160200a7fd3581978bdf50ed7.jpg',
          altDesc:'album5',
      },
      {
          songNo:6,
          imgUrl:'https://lastfm.freetls.fastly.net/i/u/300x300/59baba3e1ed85301139dbcd2f70dbb8e.jpg',
          altDesc:'album6',
      },
      {
          songNo:7,
          imgUrl:'https://lastfm.freetls.fastly.net/i/u/300x300/bb03c6c590de5c1db3fc4814d62a12cb.jpg',
          altDesc:'album7',
      },
      {
          songNo:8,
          imgUrl:'https://lastfm.freetls.fastly.net/i/u/300x300/d9e37fdd10e54542c868aee45c9734e0.jpg',
          altDesc:'album8',
      },
      {
          songNo:9,
          imgUrl:'https://lastfm.freetls.fastly.net/i/u/300x300/cc6483e13e6f5ccef947bcaebcf738dd.jpg',
          altDesc:'album9',
      }
  ]
  //SlickCarousel 기본세팅
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow/>,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            infinite: true,
            dots: true
          }
        }
      ]
  };
  

    return (
        <Slider {...settings}>

          {datas.map((data, index)=>{
            return (
              <div key={index} className="relative text-center w-full p-5">
                <span className="absolute top-0 left-0 p-5 w-full h-full rounded-[2rem]">
                  <div className="top-0 left-0 w-full h-full bg-gradient-to-b from-black/[0.0] to-black/[0.4] rounded-[2rem]" src={data.imgUrl} alt={data.altDesc}/>
                </span>
                <img className="w-full  rounded-[2rem]" src={data.imgUrl} alt={data.altDesc}/>

                <Link to={'#'} className="absolute bg-white/[0.5] hover:bg-white/[0.8] left-12 top-12 text-white text-3xl w-10 h-10 rounded-full cursor-pointer">
                  <svg className="bi bi-play-fill pl-1 w-10 h-10 text-gray/[0.7] hover:text-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                  </svg>
                </Link>
                <h3 className="absolute	left-12 bottom-12 text-white text-3xl">{data.songNo}</h3>
              </div>
            )
          })}
        </Slider>
    ); 
}

export default BasicSlider;
