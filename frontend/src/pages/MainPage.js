import BasicLayout from "../layouts/BasicLayout";
import BasicSlider from "../components/BasicSlider"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainPage = ()=>
{
    return (
      <BasicLayout title={'Main Page'}>
        <div className="mb-10 py-20 px-10 slider-container w-full">
          <BasicSlider/>
        </div>
      </BasicLayout>
    ); 
}

export default MainPage;
