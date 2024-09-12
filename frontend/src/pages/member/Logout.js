import LogoutComponent from "../../components/member/LogoutComponent";
import BasicLayout from "../../layouts/BasicLayout";
import logo from "../../logo2.svg";
const LogoutPage =()=> {
    return (
        <BasicLayout>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-20 w-auto" src={logo} alt="Your Company"/>
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                </div>
            <LogoutComponent></LogoutComponent>
        </div>
        </BasicLayout>
    );
}
export default LogoutPage;