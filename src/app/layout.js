'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { createContext, useRef, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })


export const search = createContext()
export default function RootLayout({ children }) {
  const [searchValue,  setSearchValue] = useState('')
  return (
    <search.Provider value={{searchValue}}>
      <html lang="en">
        <body className={`${inter.className} bg-white`}>
          <div className='lg:max-w-6xl m-auto'>
            <header className='flex justify-between items-center my-[32px]'>
              <Link href='/'>
              <img src='/Logo.png' className='h-[36px] w-[158px]'/>
              </Link>
              <div className='flex gap-[40px] text-[20px]'>
                <Link href="/">
                  <p>Home</p>
                </Link>
                <Link href="/blogPage">
                  <p>Blog</p>
                </Link>
                <Link href='/contactPage'>
                  <p>Contact</p>
                </Link>
              </div>
              <div className='flex items-center relative'>
                <input type='text' onChange={(event)=>{setSearchValue(event.target.value)}} className='pl-[10px] h-[30px] w-[160px] bg-[#F4F4F5]' placeholder='search'/>
                <img src='/searchLogo.png' style={{height:"16px", width:"16px", position:"absolute", right:"10px"}}/>
              </div>
            </header>
            {children}
            <footer className='flex flex-col justify-between items-center my-[32px]'>
              <div className='flex justify-between w-[100%]'>
                <div className='flex flex-col w-1/3 justify-between'>
                  <h2 className='mb-[10px] text-[18px] font-semibold'>About</h2>
                  <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                  <div className='flex flex-col gap-[5px] my-[20px]'>
                    <p>Email : info@jstemplate.net</p>
                    <p>Phone : 880 123 456 789</p>
                  </div>
                </div>
                <div className='flex flex-col gap-[20px] w-1/3 items-center'>
                  <Link href='/'>
                    <p>Home</p>
                  </Link>
                  <Link href='/blogPage'>
                    <p>Blog</p>
                  </Link>
                  <Link href='contactPage'>
                    <p>Contact</p>
                  </Link>
                </div>
                <div className='flex gap-[20px] w-1/3 justify-center'>
                  <a className='h-[24px] w-[24px]'><img src='/facebook-svgrepo-com.svg'/></a>
                  <a className='h-[24px] w-[24px]'><img src='/twitter-154-svgrepo-com.svg'/></a>
                  <a className='h-[24px] w-[24px]'><img src='/instagram-svgrepo-com.svg'/></a>
                  <a className='h-[24px] w-[24px]'><img src='/linkedin-svgrepo-com.svg'/></a>
                </div>
              </div>
              <div className='flex w-[100%] justify-between items-center my-[25px] border-t-2 py-[10px]'>
                <img src='/footerLogo.png' className='h-[36px] w-[158px]'/>
                <div className='flex justify-between gap-[32px] text-[#3B3C4A]'>
                  <a>Terms of Use</a>
                  <a>Privacy Policy</a>
                  <a>Cookie Policy</a>
                </div>
              </div>
            </footer>
          </div>
        </body>
      </html>
    </search.Provider>
  )
}
