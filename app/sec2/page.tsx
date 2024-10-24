import Image from "next/image";
import image from "../public/PlayStation.png";
import image1 from "../public/hero__gnfk5g59t0qe_xlarge_2x 1.png";
import image2 from "../public/image 36.png";
import image3 from "../public/Macbook Air.png"
import image4 from "../public/MacBook Pro 14.png"
import image5 from "../public/Playstation 5.png"
import image6 from "../public/Apple AirPods Max.png"
import image7 from "../public/Apple Vision Pro.png"

export default function Section2() {
    return (
        <div>
            <div className="flex">
                <div className="w-[50%] bg-black h-[600px] flex flex-wrap">

                    {/* ----------left-sec-top-------- */}
                    <div className="w-full h-[328px] bg-white flex items-center justify-between ">
                        <Image
                            src={image}
                            alt="image"
                        />
                        <div className=" pr-[48px] flex flex-col gap-[26px] w-[338px] h-[128px] ">
                            <Image
                                src={image5}
                                alt="image"
                            />
                            <div className="text-custom909090 font-medium text-[14px]">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</div>
                        </div>
                    </div>
                    {/* ---------------ls-sec-con2------------- */}
                    <div className="w-[50%] h-[272px] bg-customEDEDED flex items-center justify-between ">
                        <Image
                            src={image1}
                            alt="image"
                        />
                        <div className=" pr-[48px] pl-8 flex flex-col gap-[26px] w-[338px] h-[128px] ">
                            <Image
                                src={image6}
                                alt="image"
                            />
                            <div className="text-custom909090 font-medium text-[14px]">Computational audio. Listen, it's powerful</div>
                        </div>
                    </div>
                    {/* ---------------ls-sec-con3------------- */}

                    <div className="w-[50%] h-[272px] bg-custom353535 flex items-center justify-between ">
                        <Image
                            src={image2}
                            alt="image"
                        />
                        <div className=" pr-[48px] pl-8 flex flex-col gap-[26px] w-[338px] h-[128px] ">
                            <Image
                                src={image7}
                                alt="image"
                            />
                            <div className="text-custom909090 font-medium text-[14px]">An immersive way to experience entertainment</div>
                        </div>
                    </div>


                </div>

                {/* -----------main-r-sec------- */}
                <div className="w-[50%] bg-customEDEDED flex items-center justify-between ">
                    <div className="pl-[56px]  flex flex-col gap-[26px] w-[360px] ">
                        <Image
                            src={image3}
                            alt="image"
                        />
                        <div className="text-custom909090 font-medium text-[14px]">The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</div>
                        <button className=" w-[191px] h-[56px]  border-[1px] border-black rounded-[6px] mt-4  text-black hover:bg-custom909090  duration-300 ease-in-out">Shop Now</button>

                    </div>
                    <div className=" ">
                        <Image
                            src={image4}
                            alt="image"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
