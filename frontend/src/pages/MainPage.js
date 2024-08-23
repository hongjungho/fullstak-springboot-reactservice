import logo from '../logo2.svg';
import BasicLayout from "../layouts/BasicLayout";
import BasicSlider from "../components/BasicSlider"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainPage = ()=>
{
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
