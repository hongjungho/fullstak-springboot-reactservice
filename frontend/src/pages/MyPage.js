import {Link} from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";

const MyPage = ()=>{
    return (
        
    <BasicLayout title={'My Page'}>
        <div className="w-full h-full">
            <div>My Page</div>
            <Link to={'/'}>Main Page</Link>
        </div>
    </BasicLayout>
    );
}
export default MyPage;