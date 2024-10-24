import Image from "next/image"
import image1 from "../public/Smart Watches.png"
import image2 from "../public/Arrow`s.png"
import image3 from "../public/Headphones.png"
import image4 from "../public/Gaming.png"
import image5 from "../public/Computers.png"
import image6 from "../public/Phones.png"
import image7 from "../public/Cameras.png"

export default function Section3() {
    return (
        <div>
            {/* ----------------main-container----------- */}
            <div className="h-[352px] w-full bg-customFAFAFA flex flex-col justify-center items-center">
                <div className="w-[1120px] h-[32px] flex justify-between ">
                    <div className="font-sans font-medium text-[24px]">Browse By Category</div>
                    <Image
                        src={image2}
                        alt="image"
                    />
                </div>
                <div className=" mt-[32px] w-[1120px] h-[128px] flex justify-between">
                    <div className=" w-[160px] h-[128px] bg-customEDEDED rounded-[15px] flex flex-col items-center justify-center">
                        <Image
                            src={image6}
                            alt="image"
                        />
                        <h1 className=" font-medium text-[16px]">Phones</h1>

                    </div>
                    <div className=" w-[160px] h-[128px] bg-customEDEDED rounded-[15px] flex flex-col items-center justify-center">
                        <Image
                            src={image1}
                            alt="image"
                        />
                        <h1 className=" font-medium text-[16px]">Smart Watches</h1>

                    </div>
                    <div className=" w-[160px] h-[128px] bg-customEDEDED rounded-[15px] flex flex-col items-center justify-center">
                        <Image
                            src={image7}
                            alt="image"
                        />
                        <h1 className=" font-medium text-[16px]">Cameras</h1>

                    </div>
                    <div className=" w-[160px] h-[128px] bg-customEDEDED rounded-[15px] flex flex-col items-center justify-center">
                        <Image
                            src={image3}
                            alt="image"
                        />
                        <h1 className=" font-medium text-[16px]">Headphones</h1>

                    </div>
                    <div className=" w-[160px] h-[128px] bg-customEDEDED rounded-[15px] flex flex-col items-center justify-center">
                        <Image
                            src={image5}
                            alt="image"
                        />
                        <h1 className=" font-medium text-[16px]">Computers</h1>

                    </div>
                    <div className=" w-[160px] h-[128px] bg-customEDEDED rounded-[15px] flex flex-col items-center justify-center">
                        <Image
                            src={image4}
                            alt="image"
                        />
                        <h1 className=" font-medium text-[16px]">Gaming</h1>

                    </div>



                </div>
            </div>













        </div>
    )
}