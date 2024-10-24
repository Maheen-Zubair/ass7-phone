import Image from "next/image";
import image from "../public/Banner 2.png"
export default function Section7() {
    return (
        <div>
            <div className="flex justify-center">
                <Image
                    src={image}
                    alt="image"
                />
            </div>
        </div>
    )
}