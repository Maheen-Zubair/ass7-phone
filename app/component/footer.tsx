import Image from "next/image";
import image from "../public/Social Icons.png"
import image1 from "../public/Logo.png"

export default function Footer() {
    return (
        <div>
            <div className="h-[504px] w-full bg-black flex flex-col justify-center items-center">
                <div className="w-[1120px] h-[256px] bg-black flex ">
                    <div className=" w-[384px] h-[94.87px] bg-black mr-36">
                        <Image src={image1} alt="image" />
                        <p className="text-customB5B5B5 text-[14px] font-medium mt-5">We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
                    </div>

                    <div className=" w-[295.5px] h-[256px] text-white flex flex-col gap-4 bg-black">
                        <h4 className="font-semibold text-[16px]">Services</h4>
                        <h5 className="text-[14px] font-normal text-customB5B5B5">Bonus program</h5>
                        <h5 className="text-[14px] font-normal text-customB5B5B5">Gift cards</h5>
                        <h5 className="text-[14px] font-normal text-customB5B5B5">Credit and payments</h5>
                        <h5 className="text-[14px] font-normal text-customB5B5B5">Service Contracts</h5>
                        <h5 className="text-[14px] font-normal text-customB5B5B5">Non-crash account</h5>
                        <h5 className="text-[14px] font-normal text-customB5B5B5">Payment</h5>

                    </div>

                    <div className="w-[295.5px] h-[256px] text-white flex flex-col gap-4 bg-black">
                        <h4 className="font-semibold text-[16px]">Assistance to the buyer</h4>
                        <h5 className="text-[14px] font-normal text-customB5B5B5">Find and order</h5>
                        <h5 className="text-[14px] font-normal text-customB5B5B5">Terms of delivery</h5>
                        <h5 className="text-[14px] font-normal text-customB5B5B5">Exchange and return of goods</h5>
                        <h5 className="text-[14px] font-normal text-customB5B5B5">Guarantee</h5>
                        <h5 className="text-[14px] font-normal text-customB5B5B5">Frequently asked question</h5>
                        <h5 className="text-[14px] font-normal text-customB5B5B5">Terms of use of the site</h5>
                    </div>
                </div>


                <div className="flex  justify-start w-[1120px] mt-5 ">
                    <div>  <Image src={image} alt="image" /></div>
                </div>
            </div>
        </div>
    )
}