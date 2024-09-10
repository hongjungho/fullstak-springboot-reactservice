import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = (props)=>
{
  const { menuDatas, userMenus, userData } = props;

  return (
    <div className="md:hidden block transition-all duration-500 ease-in-out origin-bottom" id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
        {menuDatas.map((menu, index)=>{return <Link key={index} to={menu.pageUrl} className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:text-gray-700 hover:underline">{menu.name}</Link>})}
      </div>
      <div className="border-t border-gray-200 pb-3 pt-4">
        <div className="flex items-center px-5">
          <div className="flex-shrink-0">
            <svg className="h-7 w-7 rounded-full size-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </div>
          <div className="ml-3">
            <div className="text-base font-medium leading-none text-gray-400 hover:text-gray-900">{userData.name}</div>
            <div className="text-sm font-medium leading-none text-gray-400">{userData.email}</div>
          </div>
          <button type="button" className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="absolute -inset-1.5"></span>
            <span className="sr-only">View notifications</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
          </button>
        </div>
        <div className="mt-3 space-y-1 px-2">
          {userMenus.map((menu, index)=>{return <Link key={index} to={menu.userPath} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400 hover:text-white" role="menuitem" tabIndex="-1">{menu.userMenuName}</Link>})}
        </div>
      </div>
    </div>
  ); 
}

export default MobileMenu;
