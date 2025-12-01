import * as clientImages from "@/data/images/ClientImages";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const clientImagesArray = Object.values(clientImages);

export default function MitraKami() {
  return (
    <div className="w-[100%] md:w-[87%] mx-auto">
    <Marquee speed={100} pauseOnHover={true} gradient gradientColor="white ">
      <div className="flex gap-1">
        {clientImagesArray.map((src, index) => (
          <div
            key={index}
            className="mx-4 h-20 w-40 flex-shrink-0 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-50 lg:w-50"
          >
            <div className="relative flex h-full w-full items-center justify-center">
              <Image
                src={src}
                height={100}
                alt={`Client ${index + 1}`}
                objectFit="contain"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </Marquee>
    </div>
    
  );
}
