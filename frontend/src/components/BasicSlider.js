import React from "react";
import Slider from "react-slick";


function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button type="button"
        className={className + ' slickCustNext'}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }
  
  function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    console.log(className);
    return (
      <button type="button"
        className={className + ' slickCustPrev'}
        style={{ ...style, display: "block", color: "#B5C18E" }}
        onClick={onClick}
      />
    );
  }
  

const BasicSlider = ()=>
{
  let varClassName = 'rounded-lg bg-gray-200 text-center';

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow/>,
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
            initialSlide: 1
          }
        }
      ]
  };
  

    return (
        <Slider {...settings}>
          <div className={varClassName} >
            <h3>1</h3>
            <img className="m-auto rounded-xl" src={'https://lastfm.freetls.fastly.net/i/u/300x300/eca329563f4a13cd7c0c319aa3c7ac97.jpg'} alt="album1"/>
          </div>
          <div className={varClassName}>
            <h3>2</h3>
            <img className="m-auto rounded-xl" src={'https://lastfm.freetls.fastly.net/i/u/300x300/a75f27c2e2bb01c6e6f0e4d123b31270.jpg'} alt="album2"/>
          </div>
          <div className={varClassName}>
            <h3>3</h3>
            <img className="m-auto rounded-xl" src={'https://lastfm.freetls.fastly.net/i/u/300x300/1c09ef23940ff8de50c3d186cc4d27f3.jpg'} alt="album3"/>
          </div>
          <div className={varClassName}>
            <h3>4</h3>
            <img className="m-auto rounded-xl" src={'https://lastfm.freetls.fastly.net/i/u/300x300/363326365bf275e534f3bf7d6164de4f.jpg'} alt="album4"/>
          </div>
          <div className={varClassName}>
            <h3>5</h3>
            <img className="m-auto rounded-xl" src={'https://lastfm.freetls.fastly.net/i/u/300x300/b277bdd160200a7fd3581978bdf50ed7.jpg'} alt="album5"/>
          </div>
          <div className={varClassName}>
            <h3>6</h3>
            <img className="m-auto rounded-xl" src={'https://lastfm.freetls.fastly.net/i/u/300x300/59baba3e1ed85301139dbcd2f70dbb8e.jpg'} alt="album6"/>
          </div>
          <div className={varClassName}>
            <h3>7</h3>
            <img className="m-auto rounded-xl" src={'https://lastfm.freetls.fastly.net/i/u/300x300/bb03c6c590de5c1db3fc4814d62a12cb.jpg'} alt="album7"/>
          </div>
          <div className={varClassName}>
            <h3>8</h3>
            <img className="m-auto rounded-xl" src={'https://lastfm.freetls.fastly.net/i/u/300x300/d9e37fdd10e54542c868aee45c9734e0.jpg'} alt="album8"/>
          </div>
          <div className={varClassName}>
            <h3>9</h3>
            <img className="m-auto rounded-xl" src={'https://lastfm.freetls.fastly.net/i/u/300x300/cc6483e13e6f5ccef947bcaebcf738dd.jpg'} alt="album9"/>
          </div>
        </Slider>
    ); 
}

export default BasicSlider;
