import { useEffect, useState } from 'react'
import './App.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function App() {

  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    console.log(openMenu);

    if (openMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    document.addEventListener('keyup', (e) => (e.keyCode === 27 || e.keyCode === 32) && setOpenMenu(false))
  }, [openMenu])

  return (
    <>
      <main className="grid grid-cols-12 gap-8">
        <section className={`absolute z-50 top-0 right-0 bottom-0 xl:col-span-3 direction-ltr xl:static ${openMenu ? 'overflow-y-scroll pb-10 lg:pb-0' : ''}`}>
          <div onClick={() => setOpenMenu(prev => !prev)} className={`menu-btn cursor-pointer absolute top-0 bottom-0 -left-6 m-auto bg-white h-16 hidden items-center justify-center border border-r-0 rounded-s-2xl border-neutral-100 sm:flex xl:hidden ${openMenu ? 'left-0 rotate-180' : ''}`}>
            <i className={`h-max `}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </i>
          </div>
          <div className={`direction-rtl w-0 p-0 overflow-hidden h-max transition-all duration-300 bg-white flex flex-col gap-8 ${openMenu ? '!p-6 !w-[95vw] overflow-auto sm:!w-max' : ''} xl:!p-6 xl:!w-full xl:overflow-auto`}>
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-12 rounded-full flex items-center justify-center bg-[#3B71FE]">
                    <i className="text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                      </svg>
                    </i>
                  </div>
                  <div className="flex flex-col">
                    <h5 className="text-2xl font-bold">علیرضا عبدی</h5>
                    <p className="text-xs text-neutral-300 font-bold">28 ساله, دکتر</p>
                  </div>
                </div>
                <i onClick={() => setOpenMenu(prev => !prev)} className="cursor-pointer sm:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </i>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-xl text-blue-800 font-bold">6,2</span>
                  <p className="text-xs text-neutral-300 font-bold">قد</p>
                </div>
                <i className="w-px h-8 bg-neutral-100"></i>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-xl text-blue-800 font-bold">99</span>
                  <p className="text-xs text-neutral-300 font-bold">وزن</p>
                </div>
                <i className="w-px h-8 bg-neutral-100"></i>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-xl text-blue-800 font-bold">6,2</span>
                  <p className="text-xs text-neutral-300 font-bold">گروه خون</p>
                </div>
              </div>
            </div>
            <i className="w-full h-px bg-neutral-100"></i>
            <div className="flex flex-col gap-6">
              <div className="relative group">
                <p className="flex items-center gap-3 cursor-pointer">
                  <span className="text-xl font-bold">July</span>
                  <i className="transition-all duration-300 group-hover:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                      <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                    </svg>
                  </i>
                </p>
                <ul className="z-10 opacity-0 invisible absolute -top-10 right-0 w-full transition-all duration-300 flex flex-col gap-4 p-4 rounded-xl bg-white hover:shadow-[0px_10px_20px_0px_#ededed] group-hover:top-10 group-hover:opacity-100 group-hover:visible">
                  <li className="font-bold">January</li>
                  <li className="font-bold">May</li>
                  <li className="font-bold">October</li>
                </ul>
              </div>
              <Swiper
                slidesPerView={'auto'}
                spaceBetween={16}
                className="mySwiper w-full overflow-y-visible h-28">
                <SwiperSlide className='!w-14'>
                  <div className="cursor-pointer group w-full pt-3 rounded-[32px] flex flex-col items-center gap-2 border border-neutral-100 font-bold text-lg transition-all duration-300 overflow-hidden hover:bg-green-900 hover:shadow-[0px_7px_8px_0px_#e5e5e5]">
                    <p className="text-neutral-200 transition-all duration-300 group-hover:text-white">Sa</p>
                    <span className="pt-2 pb-3 w-full flex justify-center rounded-t-full transition-all duration-300 group-hover:text-white group-hover:bg-green-700">6</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='!w-14'>
                  <div className="cursor-pointer group w-full pt-3 rounded-[32px] flex flex-col items-center gap-2 border border-neutral-100 font-bold text-lg transition-all duration-300 overflow-hidden hover:bg-green-900 hover:shadow-[0px_7px_8px_0px_#e5e5e5]">
                    <p className="text-neutral-200 transition-all duration-300 group-hover:text-white">Su</p>
                    <span className="pt-2 pb-3 w-full flex justify-center rounded-t-full transition-all duration-300 group-hover:text-white group-hover:bg-green-700">8</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='!w-14'>
                  <div className="cursor-pointer group w-full pt-3 rounded-[32px] flex flex-col items-center gap-2 border border-neutral-100 font-bold text-lg transition-all duration-300 overflow-hidden hover:bg-green-900 hover:shadow-[0px_7px_8px_0px_#e5e5e5]">
                    <p className="text-neutral-200 transition-all duration-300 group-hover:text-white">Mo</p>
                    <span className="pt-2 pb-3 w-full flex justify-center rounded-t-full transition-all duration-300 group-hover:text-white group-hover:bg-green-700">6</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='!w-14'>
                  <div className="cursor-pointer group w-full pt-3 rounded-[32px] flex flex-col items-center gap-2 border border-neutral-100 font-bold text-lg transition-all duration-300 overflow-hidden hover:bg-green-900 hover:shadow-[0px_7px_8px_0px_#e5e5e5]">
                    <p className="text-neutral-200 transition-all duration-300 group-hover:text-white">Tu</p>
                    <span className="pt-2 pb-3 w-full flex justify-center rounded-t-full transition-all duration-300 group-hover:text-white group-hover:bg-green-700">6</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='!w-14'>
                  <div className="cursor-pointer group w-full pt-3 rounded-[32px] flex flex-col items-center gap-2 border border-neutral-100 font-bold text-lg transition-all duration-300 overflow-hidden hover:bg-green-900 hover:shadow-[0px_7px_8px_0px_#e5e5e5]">
                    <p className="text-neutral-200 transition-all duration-300 group-hover:text-white">Wd</p>
                    <span className="pt-2 pb-3 w-full flex justify-center rounded-t-full transition-all duration-300 group-hover:text-white group-hover:bg-green-700">6</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='!w-14'>
                  <div className="cursor-pointer group w-full pt-3 rounded-[32px] flex flex-col items-center gap-2 border border-neutral-100 font-bold text-lg transition-all duration-300 overflow-hidden hover:bg-green-900 hover:shadow-[0px_7px_8px_0px_#e5e5e5]">
                    <p className="text-neutral-200 transition-all duration-300 group-hover:text-white">Th</p>
                    <span className="pt-2 pb-3 w-full flex justify-center rounded-t-full transition-all duration-300 group-hover:text-white group-hover:bg-green-700">6</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='!w-14'>
                  <div className="cursor-pointer group w-full pt-3 rounded-[32px] flex flex-col items-center gap-2 border border-neutral-100 font-bold text-lg transition-all duration-300 overflow-hidden hover:bg-green-900 hover:shadow-[0px_7px_8px_0px_#e5e5e5]">
                    <p className="text-neutral-200 transition-all duration-300 group-hover:text-white">Fr</p>
                    <span className="pt-2 pb-3 w-full flex justify-center rounded-t-full transition-all duration-300 group-hover:text-white group-hover:bg-green-700">6</span>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="font-bold text-xl">قرار ملاقات</h4>
              <div className="flex flex-col items-center gap-12">
                <div className="w-full flex flex-col gap-5">
                  <div className="w-full flex flex-col gap-4 p-4 rounded-2xl transition-all duration-300 border border-neutral-100 hover:shadow-[0px_10px_20px_0px_#ededed]">
                    <h5 className="border-b border-neutral-100 pb-1 font-bold">چکاپ پزشکی</h5>
                    <div className="flex items-center justify-between text-neutral-300 text-xs font-bold">
                      <p className="flex items-center gap-2">
                        <i className="">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                          </svg>
                        </i>
                        آقای دکتر داش علیرضا
                      </p>
                      <p className="flex items-center gap-2">
                        <i className="">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                          </svg>
                        </i>
                        10 صبح - 12 شب
                      </p>
                    </div>
                    <button className='flex items-center justify-center w-full rounded-3xl bg-[#3B71FE] text-white px-3 py-2'>دیدن جزعیات</button>
                  </div>
                  <div className="w-full flex flex-col gap-4 p-4 rounded-2xl transition-all duration-300 border border-neutral-100 hover:shadow-[0px_10px_20px_0px_#ededed]">
                    <h5 className="border-b border-neutral-100 pb-1 font-bold">چکاپ پزشکی</h5>
                    <div className="flex items-center justify-between text-neutral-300 text-xs font-bold">
                      <p className="flex items-center gap-2">
                        <i className="">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                          </svg>
                        </i>
                       اقای دکتر داش علیرضا
                      </p>
                      <p className="flex items-center gap-2">
                        <i className="">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                          </svg>
                        </i>
                        10 صبح - 12 شب
                      </p>
                    </div>
                    <button className='flex items-center justify-center w-full rounded-3xl bg-[#3B71FE] text-white px-3 py-2'>دیدن جزعیات</button>
                  </div>
                </div>
              </div>
              <button className='flex items-center justify-center gap-5 w-full rounded-3xl text-neutral-300 font-bold px-3 py-2 border border-double'>
                <i className="">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                    <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                  </svg>
                </i>
                دیدن جزعیات
              </button>
            </div>
          </div>
        </section>
        <section className="p-6 col-span-12 flex flex-col gap-12 sm:gap-24 lg:col-span-10 xl:col-span-8">
          <form className="flex items-center justify-between w-full p-3 border border-neutral-100 rounded-3xl">
            <input placeholder='هر چیزی را از اینجا پیدا کنید' type="text" className="w-full h-full bg-inherit text-neutral-500 placeholder:!text-neutral-300 placeholder:text-sm outline-none" />
            <i className="text-neutral-300 flex justify-end">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </i>
          </form>
          <div className="flex flex-col gap-8 p-6 bg-white rounded-3xl rounded-tr-none sm:relative">
            <div className="w-12 flex items-center justify-center h-max fixed top-0 bottom-0 right-0 my-auto z-20 sm:absolute sm:-top-10 sm:-right-0.5 sm:my-0 sm:w-max sm:block">
              <ul className="flex items-center -rotate-90 sm:rotate-0">
                <li className="py-2 w-[8.5rem] rounded-t-2xl flex items-center justify-center cursor-pointer bg-white border border-b-0 border-neutral-100 transition-all duration-300 font-bold hover:shadow-[0px_-6px_9px_0_#e9e9e9] lg:w-40">خانه</li>
                <li className="py-2 w-[8.5rem] rounded-t-2xl flex items-center justify-center cursor-pointer bg-white border border-b-0 border-neutral-100 transition-all duration-300 font-bold hover:shadow-[0px_-6px_9px_0_#e9e9e9] lg:w-40">سند ها</li>
                <li className="py-2 w-[8.5rem] rounded-t-2xl flex items-center justify-center cursor-pointer bg-white border border-b-0 border-neutral-100 transition-all duration-300 font-bold hover:shadow-[0px_-6px_9px_0_#e9e9e9] lg:w-40">قرار ملاقات</li>
                <li className="py-2 w-[8.5rem] rounded-t-2xl flex items-center justify-center cursor-pointer bg-white border border-b-0 border-neutral-100 transition-all duration-300 font-bold hover:shadow-[0px_-6px_9px_0_#e9e9e9] lg:w-40">قرار پزشکی</li>
              </ul>
            </div>
            <div style={{ background: 'url("../public/images/img container3.png") no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} className="p-6 flex flex-col justify-end relative w-full h-52 rounded-2xl overflow-hidden">
              <i className="absolute inset-0 m-auto text-white w-max h-max">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                </svg>
              </i>
              <div className="w-full flex items-center justify-between text-white">
                <h3 className="text-3xl font-bold lg:text-4xl">واکسن زدی؟</h3>
                <i className="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                  </svg>
                </i>
              </div>
            </div>
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-3">
              <div className="w-full relative p-4 rounded-xl border border-neutral-100 flex gap-2 transition-all duration-300 hover:shadow-[-5px_12px_20px_3px_#efefef]">
                <div className="rounded-full size-12 flex items-center justify-center bg-green-300">
                  <i className="text-green-600">
                    <svg className='size-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" fill='currentColor' />
                    </svg>
                  </i>
                </div>
                <div className="flex flex-col">
                  <h6 className="text-2xl lg:text-3xl">تشخیص</h6>
                  <p className="text-sm text-neutral-300">بیماری ها را لیست کنید</p>
                </div>
                <div className="absolute top-2 left-2 text-3xl text-green-600 cursor-pointer">
                  +
                </div>
              </div>
              <div className="w-full relative p-4 rounded-xl border border-neutral-100 flex gap-2 transition-all duration-300 hover:shadow-[-5px_12px_20px_3px_#efefef]">
                <div className="rounded-full size-12 flex items-center justify-center bg-green-300">
                  <i className="text-green-600">
                    <svg className='size-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" fill='currentColor' />
                    </svg>
                  </i>
                </div>
                <div className="flex flex-col">
                  <h6 className="text-2xl lg:text-3xl">تشخیص</h6>
                  <p className="text-sm text-neutral-300">بیماری ها را لیست کنید</p>
                </div>
                <div className="absolute top-2 left-2 text-3xl text-green-600 cursor-pointer">
                  +
                </div>
              </div>
              <div className="w-full relative p-4 rounded-xl border border-neutral-100 flex gap-2 transition-all duration-300 hover:shadow-[-5px_12px_20px_3px_#efefef]">
                <div className="rounded-full size-12 flex items-center justify-center bg-green-300">
                  <i className="text-green-600">
                    <svg className='size-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" fill='currentColor' />
                    </svg>
                  </i>
                </div>
                <div className="flex flex-col">
                  <h6 className="text-2xl lg:text-3xl">تشخیص</h6>
                  <p className="text-sm text-neutral-300">بیماری ها را لیست کنید</p>
                </div>
                <div className="absolute top-2 left-2 text-3xl text-green-600 cursor-pointer">
                  +
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="px-6 py-8 flex flex-col col-span-2 justify-between text-white bg-[#3B71FE] rounded-2xl lg:col-span-1">
                <h3 className="text-3xl font-bold self-start lg:text-4xl">ضربان قلب</h3>
                <i className="self-end">
                  <svg
                  fill='currentColor'
                    xmlns="http://www.w3.org/2000/svg"
                    width="140"
                    height="120"
                    version="1"
                    viewBox="0 0 100 100"
                  >
                    <path
                      d="M528 865c-3-3-23-93-44-200s-41-195-44-195-16 34-28 75c-19 66-25 75-46 75-19 0-28-12-54-70l-31-70h-65c-36 0-68 5-71 10-12 19-54 10-71-15-31-48 16-92 72-66 14 6 59 11 100 11h74l17 35c9 19 19 35 22 35 4 0 17-39 31-86 30-105 42-123 67-108 14 8 27 54 55 185 20 96 37 170 37 164 26-204 81-529 92-535 30-19 45 9 84 169l39 161h42c24 0 46-4 49-10 11-17 51-11 71 11 17 19 17 23 3 47-17 31-42 39-73 23-11-6-48-12-81-13l-60-3-24-93c-13-51-25-91-27-90-1 2-19 118-40 258-20 140-41 265-45 278-8 20-38 30-51 17z"
                      transform="matrix(.1 0 0 -.1 0 100)"
                    ></path>
                  </svg>
                </i>
                <p className='text-6xl font-medium'>120<span className='font-thin text-base ml-2'>pbm</span></p>
              </div>
              <div className="px-6 py-8 col-span-2 flex flex-col gap-6 bg-[#81A178] rounded-2xl lg:col-span-1">
                <h3 className="text-3xl font-bold text-white lg:text-4xl">آخرین نتایج</h3>
                <p className="text-sm text-neutral-300">کار خوبی کردی, ادامه بده</p>
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-12 items-center gap-3">
                    <i className="col-span-1 size-3 rounded-full bg-amber-600"></i>
                    <p className="col-span-2 text-2xl text-white">گلوکز</p>
                    <div className="relative col-span-7 h-1.5 w-full bg-neutral-300 rounded-full before:content-[''] before:absolute before:top-0 before:right-0 before:rounded-full before:h-full before:w-2/4 before:bg-amber-600"></div>
                    <p className="col-span-2 text-sm text-neutral-300 font-bold">72گ</p>
                  </div>
                  <div className="grid grid-cols-12 items-center gap-3">
                    <i className="col-span-1 size-3 rounded-full bg-amber-600"></i>
                    <p className="col-span-2 text-2xl text-white">گلوکز</p>
                    <div className="relative col-span-7 h-1.5 w-full bg-neutral-300 rounded-full before:content-[''] before:absolute before:top-0 before:right-0 before:rounded-full before:h-full before:w-3/4 before:bg-amber-600"></div>
                    <p className="col-span-2 text-sm text-neutral-300 font-bold">72گ</p>
                  </div>
                  <div className="grid grid-cols-12 items-center gap-3">
                    <i className="col-span-1 size-3 rounded-full bg-amber-600"></i>
                    <p className="col-span-2 text-2xl text-white">گلوکز</p>
                    <div className="relative col-span-7 h-1.5 w-full bg-neutral-300 rounded-full before:content-[''] before:absolute before:top-0 before:right-0 before:rounded-full before:h-full before:w-2/4 before:bg-amber-600"></div>
                    <p className="col-span-2 text-sm text-neutral-300 font-bold">72گ</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex items-center justify-between">
                <h3 className="text-3xl font-bold lg:text-4xl">آخرین گزارش ها</h3>
                <a href="#" className="text-green-800 font-bold">دیدن همه</a>
              </div>
              <div className="flex items-center justify-between flex-wrap">
                <p className="text-neutral-300 text-sm">#22</p>
                <p className="font-bold">توموگرافی کامپیوتری اسکن تمام بدن</p>
                <p className="text-neutral-300 text-sm">1403/6/19</p>
                <button className='px-3 py-2 border border-blue-900 rounded-3xl text-blue-900 font-bold'>نمایش نتیجه</button>
              </div>
            </div>
          </div>
        </section>
        <section className="col-span-12 bg-white z-[100] sticky bottom-0 left-0 right-0 flex flex-col gap-6 border border-neutral-100 lg:col-span-2 lg:top-0 lg:h-screen xl:col-span-1">
          <div className="py-6 hidden items-center justify-center border-b border-neutral-100 lg:flex">
            <div className="flex items-center justify-center size-14 rounded-md text-neutral-50 font-bold text-xs bg-[#81A178]">HEDID</div>
          </div>
          <ul className="p-6 py-3 flex items-center justify-between lg:gap-10 lg:flex-col">
            <li className="flex items-center justify-center text-neutral-50 size-11 rounded-full bg-[#3B71FE]">
              <i className="">
                <svg className='stroke-neutral-400 size-6' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" fill='currentColor' />
                </svg>
              </i>
            </li>
            <li className="flex items-center justify-center text-neutral-50 size-9 rounded-full">
              <i className="">
                <svg className='stroke-neutral-400 size-6' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" fill='currentColor' />
                </svg>
              </i>
            </li>
            <li className="flex items-center justify-center text-neutral-50 size-9 rounded-full">
              <i className="">
                <svg className='stroke-neutral-400 size-6' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" fill='currentColor' />
                </svg>
              </i>
            </li>
            <li className="flex items-center justify-center text-neutral-50 size-9 rounded-full">
              <i className="">
                <svg className='stroke-neutral-400 size-6' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" fill='currentColor' />
                </svg>
              </i>
            </li>
            <i onClick={() => setOpenMenu(prev => !prev)} className="cursor-pointer sm:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
              </svg>
            </i>
          </ul>
        </section>
      </main>
    </>
  )
}

export default App
