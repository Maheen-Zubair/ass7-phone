import Image from "next/image";
import image from "../public/Iphone Image (1).png"
export default function Section1() {
  return (
    <div>
      <div className=" h-[632px]  w-full bg-CustomSec1Black flex items-center pl-[160px] pr-[160px]">

        <div className="  w-[714px] h-[256px] ">
          <div className="text-[26px] font-semibold h-[32px] text-custom909090">Pro.Beyond.</div>
          <div className=" phone text-[96px] mt-[-10px] text-customFFFFFF font-thin ">IPhone 14 <span className="font-semibold ">Pro</span></div>
          <div className=" phone2 text-[18px] font-medium h-[24px] mt-[-10px] text-custom909090">Created to change everything for the better. For everyone</div>
          <button className=" w-[191px] h-[56px] text-customFFFFFF border-[1px] rounded-[6px] mt-4 hover:bg-white hover:text-black  duration-300 ease-in-out">Shop Now</button>
        </div>
        <div className="h-[623px] w-[406px]">
          <Image
            src={image}
            alt="phone-image"
          />
        </div>
      </div>
    </div>
  );
}
