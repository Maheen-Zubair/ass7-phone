import Image from "next/image";
import image from "../public/image 12.png"
import image1 from "../public/image 64.png"
import image2 from "../public/image 41.png"
import image3 from "../public/Macbook 1.png"

export default function Section5() {
    return (
        <div>
            <div className="w-full h-[640px] flex justify-center bg-customFFFFFF ">
                <div className="w-[360px] h-[640px] flex flex-col p-[32px] items-center">
                    <div className="1 h-[290px]"><Image src={image} alt="image" /></div>
                    <div className="2 flex flex-col gap-5"> <h3 className="text-[33px] font-light">Popular Products</h3> <p className="font-medium text-[14px] text-custom909090">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p> <button className="border-[1px] w-[191px] h-[56px] border-black rounded-[6px] font-medium text-[16px]  hover:bg-custom8B8B8B    hover:text-black  duration-300 ease-in-out">Shop Now</button></div>
                </div>
                <div className="w-[360px] h-[640px] bg-customF9F9F9">
                    <div className="w-[360px] h-[640px] flex flex-col p-[32px] items-center">
                        <div className="1 h-[290px]"><Image src={image1} alt="image" /></div>
                        <div className="2 flex flex-col gap-5"> <h3 className="text-[33px] font-light">Ipad Pro</h3> <p className="font-medium text-[14px] text-custom909090">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p> <button className="border-[1px] w-[191px] h-[56px] border-black rounded-[6px] font-medium text-[16px]  hover:bg-custom8B8B8B  hover:text-black  duration-300 ease-in-out">Shop Now</button></div>
                    </div>
                </div>
                <div className="w-[360px] h-[640px] bg-customEAEAEA">
                    <div className="w-[360px] h-[640px] flex flex-col p-[32px] items-center">
                        <div className="1 h-[290px]"><Image src={image2} alt="image" /></div>
                        <div className="2 flex flex-col gap-5"> <h3 className="text-[33px] font-light">Samsung Galaxy </h3> <p className="font-medium text-[14px] text-custom909090">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p> <button className="border-[1px] w-[191px] h-[56px] border-black rounded-[6px] font-medium text-[16px] hover:bg-custom8B8B8B hover:text-black  duration-300 ease-in-out">Shop Now</button></div>
                    </div>
                </div>
                <div className="w-[360px] h-[640px] bg-custom2C2C2C">
                    <div className="w-[360px] h-[640px] flex flex-col p-[32px] items-center">
                        <div className="1 h-[290px]"><Image src={image3} alt="image" /></div>
                        <div className="2 flex flex-col gap-5"> <h3 className="text-[33px] text-white font-light" >Macbook Pro</h3> <p className="font-medium text-[14px] text-custom909090">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p> <button className=" text-white border-[1px] w-[191px] h-[56px] border-white rounded-[6px] font-medium text-[16px]  hover:bg-white  hover:border-black  hover:text-black  duration-300 ease-in-out">Shop Now</button></div>
                    </div>
                </div>

            </div>
        </div>
    )
}