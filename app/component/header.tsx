import Image from "next/image"
import image from "../public/Logo Vector.png"
export default function Header() {
  return (
    <div>
      <div className="bg-customFFFFFF h-[88px]  w-full flex  px-[160px] gap-10  items-center">
        <div className="">
          <Image
            src={image}
            alt="logo"
          /></div>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center pl-3 ">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search " placeholder="Search" className=" placeholder:font-medium w-[372px] h-[56px]  p-4 ps-10 bg-customF5F5F5 rounded-[8px]" />
        </div>
        <div className="w-[369px] h-[19px]  text-customB5B5B5  flex justify-around ">
          <div className=" text-[16px] font-medium hover:text-black ">Home</div>
          <div className="text-[16px] font-medium hover:text-black ">About</div>
          <div className="text-[16px] font-medium hover:text-black ">Contact</div>
          <div className="text-[16px] font-medium hover:text-black ">Blog</div>

        </div>
        <div className="w-[144px] h-[32px] flex justify-between items-center ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>


        </div>
      </div>
    </div>
  )
}