import logo from '../logo2.svg';
import React from "react";
import { Link } from "react-router-dom";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

function onClickMenu()
{
  let eleDiv = document.getElementById('mobile-menu');
  eleDiv.classList.contains('hidden')?eleDiv.classList.remove('hidden'):eleDiv.classList.add('hidden');
}

const BasicLayout = ({children, title}) => {

  const menuDatas = [
    {
      name : 'MainPage',
      pageUrl : '/'
    },
    {
      name : 'Board',
      pageUrl : '/board'
    }
  ];

  return (<>
<div className="min-h-full">
  <nav>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img className="h-8 w-8" src={logo} alt="Your Company"/>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuDatas.map((menu, index)=>{return <Link key={index} to={menu.pageUrl} className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:text-gray-700 hover:underline">{menu.name}</Link>})}
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="ml-4 flex items-center md:ml-6">
            <button type="button" className="relative rounded-full p-1 text-gray-400 hover:text-gray-800">
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
            </button>

            <Popover className="relative ml-3">
                <PopoverButton type="button" className="relative flex max-w-xs items-center rounded-full text-gray-400 hover:text-gray-800 text-sm " id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <svg className="h-7 w-7 rounded-full size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </PopoverButton>

              <PopoverPanel className="flex flex-col absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1" achor="bottom start">
                <Link to={'/mypage'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400 hover:text-white" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</Link>
                <Link to={'#'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400 hover:text-white" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</Link>
                <Link to={'/login'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400 hover:text-white" role="menuitem" tabIndex="-1" id="user-menu-item-2">Log out</Link>
              </PopoverPanel>
            </Popover>
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-lime-700 hover:text-white " aria-controls="mobile-menu" aria-expanded="false" onClick={onClickMenu}>
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open main menu</span>
            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    <div className="md:hidden hidden transition-all" id="mobile-menu">
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
            <div className="text-base font-medium leading-none text-gray-400 hover:text-gray-900">Tom Cook</div>
            <div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
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
          <Link to={'/mypage'} className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:text-underline hover:text-gray-700">Your Profile</Link>
          <Link to={'#'} className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:text-underline hover:text-gray-700">Settings</Link>
          <Link to={'/login'} className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:text-underline hover:text-gray-700">Log out</Link>
        </div>
      </div>
    </div>
    </div>

  </nav>
  <hr/>
  
    <header className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-1 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 bg-white">{title}</h1>
        </div>
    </header>

</div>

    <div className=" bg-white mt-5 mx-auto max-w-7xl px-4 py-1 sm:px-0 lg:px-8"> 
        <main className="bg-gray-100 w-full pb-10">
            {children}
        </main>
    </div>
    </>);
}

export default BasicLayout;