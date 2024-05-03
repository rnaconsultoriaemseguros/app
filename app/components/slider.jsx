import Image from "next/image";

export default function Slider() {
    return (
        <div>
            <Image src="/slider.png" className="object-contain" alt="Slider" width={1920} height={600} />
        </div>
    )
}
