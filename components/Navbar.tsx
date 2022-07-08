import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import { GoogleLogin, googleLogout  } from '@react-oauth/google';
import Logo from '../utils/tiktik-logo.png';
import { createOrGetUser } from '../utils';

function Navbar() {
  const user = false;
  return (
    <div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
        <Link href='/'>
        <div className='w-[100px] md:w-[129px]'>
          <Image
            className='cursor-pointer'
            src={Logo}
            alt='logo'
            layout='responsive'
          />
        </div>
      </Link>
      <div>Search</div>
      {user?(
        <p>Logged in</p>
      ):(
        <GoogleLogin 
        onSuccess={credentialResponse => {
          createOrGetUser(credentialResponse)
        }}
        onError={() => {
          console.log('Login Failed');
        }}
        />
      )}
    </div>
  )
}

export default Navbar