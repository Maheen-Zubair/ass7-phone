import Image from "next/image";
import image from "../public/Iphone 14 pro 1.png"
import image1 from "../public/Iphone 14 pro 1 (1).png"
import image2 from "../public/Iphone 14 pro 1 (2).png"
import image3 from "../public/Iphone 14 pro 1 (3).png"
import image4 from "../public/Iphone 14 pro 1 (4).png"
import image5 from "../public/Iphone 14 pro 1 (5).png"
import image6 from "../public/Iphone 14 pro 1 (6).png"
import image7 from "../public/Iphone 14 pro 1 (7).png"

export default function Section4() {
    return (
        <div>
            <div className="w-full h-[1056px] bg-white flex flex-col justify-center items-center">
                <div className="first-container flex  gap-10 h-[32px] w-[1120px]  mb-[32px] ">

                    <h4 className=" font-medium text-[18px] text-custom8B8B8B hover:text-black ">New Arrival</h4>
                    <h4 className="font-medium text-[18px] text-custom8B8B8B hover:text-black ">Bestseller</h4>
                    <h4 className="font-medium text-[18px] text-custom8B8B8B hover:text-black ">Featured Products</h4>

                </div>
                {/* ------------2nd container part------------ */}

                <div className="second-container h-[880px] w-[1120px] flex justify-between flex-wrap  ">

                    <div className="w-[268px] h-[432px] bg-customF6F6F6 flex flex-col gap-8">
                        <div className="flex justify-end mr-5 pt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-3">
                            <div className=""><Image src={image} alt="image" /></div>
                            <div className="flex flex-col justify-center items-center text-center w-[236px] h-[160px] gap-2">
                                <div className="font-medium text-[16px] ml-5 mr-5 ">Apple iPhone 14 Pro Max 128GB Deep Purple </div>
                                <div className="font-semibold text-[24px]">$2535</div>
                                <button className="w-[188px] h-[48px] rounded-[8px] bg-black font-medium text-[14px] text-white  hover:bg-white border-[1px] hover:border-black  hover:text-black  duration-300 ease-in-out">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="w-[268px] h-[432px] bg-customF6F6F6 flex flex-col gap-8">
                        <div className="flex justify-end mr-5 pt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-3">
                            <div className=""><Image src={image1} alt="image" /></div>
                            <div className="flex flex-col justify-center items-center text-center w-[236px] h-[160px] gap-2">
                                <div className="font-medium text-[16px] ml-5 mr-5 ">Apple iPhone 14 Pro Max 128GB Deep Purple </div>
                                <div className="font-semibold text-[24px]">$399</div>
                                <button className="w-[188px] h-[48px] rounded-[8px] bg-black font-medium text-[14px] text-white  hover:bg-white border-[1px] hover:border-black  hover:text-black  duration-300 ease-in-out">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="w-[268px] h-[432px] bg-customF6F6F6 flex flex-col gap-8">
                        <div className="flex justify-end mr-5 pt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-3">
                            <div className=""><Image src={image2} alt="image" /></div>
                            <div className="flex flex-col justify-center items-center text-center w-[236px] h-[160px] gap-2">
                                <div className="font-medium text-[16px] ml-5 mr-5 ">Apple iPhone 14 Pro Max 128GB Deep Purple </div>
                                <div className="font-semibold text-[24px]">$549</div>
                                <button className="w-[188px] h-[48px] rounded-[8px] bg-black font-medium text-[14px] text-white  hover:bg-white border-[1px] hover:border-black  hover:text-black  duration-300 ease-in-out">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="w-[268px] h-[432px] bg-customF6F6F6 flex flex-col gap-8">
                        <div className="flex justify-end mr-5 pt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-3">
                            <div className=""><Image src={image3} alt="image" /></div>
                            <div className="flex flex-col justify-center items-center text-center w-[236px] h-[160px] gap-2">
                                <div className="font-medium text-[16px] ml-5 mr-5 ">Apple iPhone 14 Pro Max 128GB Deep Purple </div>
                                <div className="font-semibold text-[24px]">$900</div>
                                <button className="w-[188px] h-[48px] rounded-[8px] bg-black font-medium text-[14px] text-white  hover:bg-white border-[1px] hover:border-black  hover:text-black  duration-300 ease-in-out">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="w-[268px] h-[432px] bg-customF6F6F6 flex flex-col gap-8">
                        <div className="flex justify-end mr-5 pt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-3">
                            <div className=""><Image src={image4} alt="image" /></div>
                            <div className="flex flex-col justify-center items-center text-center w-[236px] h-[160px] gap-2">
                                <div className="font-medium text-[16px] ml-5 mr-5 ">Apple iPhone 14 Pro Max 128GB Deep Purple </div>
                                <div className="font-semibold text-[24px]">$369</div>
                                <button className="w-[188px] h-[48px] rounded-[8px] bg-black font-medium text-[14px] text-white  hover:bg-white border-[1px] hover:border-black  hover:text-black  duration-300 ease-in-out">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="w-[268px] h-[432px] bg-customF6F6F6 flex flex-col gap-8">
                        <div className="flex justify-end mr-5 pt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-3">
                            <div className=""><Image src={image5} alt="image" /></div>
                            <div className="flex flex-col justify-center items-center text-center w-[236px] h-[160px] gap-2">
                                <div className="font-medium text-[16px] ml-5 mr-5 ">Apple iPhone 14 Pro Max 128GB Deep Purple </div>
                                <div className="font-semibold text-[24px]">$1799</div>
                                <button className="w-[188px] h-[48px] rounded-[8px] bg-black font-medium text-[14px] text-white  hover:bg-white border-[1px] hover:border-black  hover:text-black  duration-300 ease-in-out">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="w-[268px] h-[432px] bg-customF6F6F6 flex flex-col gap-8">
                        <div className="flex justify-end mr-5 pt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-3">
                            <div className=""><Image src={image6} alt="image" /></div>
                            <div className="flex flex-col justify-center items-center text-center w-[236px] h-[160px] gap-2">
                                <div className="font-medium text-[16px] ml-5 mr-5 ">Apple iPhone 14 Pro Max 128GB Deep Purple </div>
                                <div className="font-semibold text-[24px]">$99.99</div>
                                <button className="w-[188px] h-[48px] rounded-[8px] bg-black font-medium text-[14px] text-white  hover:bg-white border-[1px] hover:border-black  hover:text-black  duration-300 ease-in-out">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="w-[268px] h-[432px] bg-customF6F6F6 flex flex-col gap-8">
                        <div className="flex justify-end mr-5 pt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-3">
                            <div className=""><Image src={image7} alt="image" /></div>
                            <div className="flex flex-col justify-center items-center text-center w-[236px] h-[160px] gap-2">
                                <div className="font-medium text-[16px] ml-5 mr-5 ">Apple iPhone 14 Pro Max 128GB Deep Purple </div>
                                <div className="font-semibold text-[24px]">$398</div>
                                <button className="w-[188px] h-[48px] rounded-[8px] bg-black font-medium text-[14px] text-white  hover:bg-white border-[1px] hover:border-black  hover:text-black  duration-300 ease-in-out">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}