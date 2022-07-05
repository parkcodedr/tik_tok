import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import GoogleLogin from 'react-google-login';
import Link from 'next/link';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import Discover from './Discover';
import SuggestedAccounts from './SuggestedAccounts';
import Footer from './Footer';

const Sidebar:NextPage =()=> {
    const { pathname } = useRouter();
    const [showSidebar, setShowSidebar] = useState<Boolean>(true);
    const activeLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#F51997] rounded';
    const normalLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold rounded';
    const userProfile = false;
  return (
    <div>
      <div
        className='block xl:hidden m-2 ml-4 mt-3 text-xl'
        onClick={() => setShowSidebar((prev)=>!prev)}
      >
        {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      {showSidebar && (
        <div className='xl:w-300 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3 '>
          <div className='xl:border-b-2 border-gray-200 xl:pb-4'>
            <Link href='/'>
              <div className={pathname === '/' ? activeLink : normalLink}>
                <p className='text-2xl'>
                  <AiFillHome />
                </p>
                <span className='capitalize text-xl hidden xl:block'>
                  For You
                </span>
              </div>
            </Link>
          </div>
          {!userProfile && (
            <div className='px-2 py-4 hidden xl:block'>
                <p className='text-gray-400'>Login to like and comment on Videos</p>
                <div className='pr-4'>
                <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    render={(renderProps) => (
      <button className='text-[#F51997] border-[1px] border-[#F51997]
      font-semibold px-6 py-3 rounded-md outline-none w-full mt-3  hover:text-white
      hover:bg-[#F51997]
       bg-white text-lg'
      onClick={renderProps.onClick} 
      disabled={renderProps.disabled}>Login</button>
    )}
    buttonText="Login"
    onSuccess={()=>{}}
    onFailure={()=>{}}
    cookiePolicy={'single_host_origin'}
  />
                    </div>
            </div>
          )}

        <Discover />
          <SuggestedAccounts
            // fetchAllUsers={fetchAllUsers}
            // allUsers={allUsers}
          />
          <Footer />
          </div>

            

      )}

    </div>
  )
}

export default Sidebar