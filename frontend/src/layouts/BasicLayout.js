import logo from '../logo2.svg';
import MobileMenuBtn from '../components/MobileMenuBtn';
import MobileMenu from '../components/MobileMenu';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

const userData = 
  {
    name : 'woochan',
    email : 'tom@musicreview.com'
  }
const menuDatas = [
  {
    name : 'MainPage',
    pageUrl : '/'
  },
  {
    name : 'Board',
    pageUrl : '/board'
  },
  {
    name : 'Music',
    pageUrl : '/musics'
  }
];

const userMenus = [
  {
      userMenuName:'Your Profile',
      userPath:'/mypage'
  },
  {
      userMenuName:'Settings',
      userPath:'#'
  },
  {
      userMenuName:'Log out',
      userPath:'/login'
  }
]

const BasicLayout = ({children, title}) => {
  const [mobileToggle, setMobileToggle] = useState(false);
  
  const onClickMenu = ()=>
  {
    setMobileToggle(!mobileToggle);
  }
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
                <button className="relative rounded-full p-1 text-gray-400 hover:text-gray-800">
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">View notifications</span>
                  <svg className="h-7 w-7 size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </button>
                <Link to={'/login'} className="relative rounded-full p-1 text-gray-400 hover:text-gray-800">
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">View notifications</span>
                  <svg className="bi bi-box-arrow-in-right h-7 w-7 size-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
                      <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                    </svg>
                </Link>

                <Popover className="relative ml-3">
                  <PopoverButton type="button" className="relative flex max-w-xs items-center rounded-full text-gray-400 hover:text-gray-800 text-sm " id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <svg className="h-7 w-7 rounded-full size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  </PopoverButton>
                  <PopoverPanel transition anchor="bottom" className="flex flex-col transition duration-200 ease-out absolute scale-95 opacity-0 data-[open]:scale-100 data-[open]:opacity-100 right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1" achor="bottom start">
                    {userMenus.map((menu, index)=>{
                      return <Link key={index} to={menu.userPath} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400 hover:text-white" role="menuitem" tabIndex="-1">{menu.userMenuName}</Link>
                    })}
                  </PopoverPanel>
                </Popover>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <MobileMenuBtn mobileToggle={mobileToggle} onClickMenu={onClickMenu}/>
            </div>
          </div>
          {
            mobileToggle?
            <MobileMenu menuDatas={menuDatas} userMenus={userMenus} userData={userData}/>:null
          }
        </div>

      </nav>
      <hr/>
      <header>
        <div className="mx-auto max-w-7xl px-4 py-1 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
        </div>
      </header>
    </div>
    <div className="mt-5 mx-auto max-w-7xl py-1 sm:px-0 "> 
      <div aria-hidden="true" className="absolute inset-x-0 top-80 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-80">
        <div
          style={{clipPath:'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',}}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"/>
      </div>
      <main className="w-full pb-10">
          {children}
      </main>
    </div>
  </>);
}

export default BasicLayout;