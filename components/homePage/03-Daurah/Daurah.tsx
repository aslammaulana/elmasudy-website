"use client"

import Image from "next/image"
import Link from "next/link"

const items = [
  {
    img: "/images/program/Program-4.png",
    title: "DTN",
    desc: "Daurah Tahfidz Nasional Ramadhan",
    link: "https://bit.ly/DTN9ELMASUDY2025"
  },
  {
    img: "/images/program/MQL-1.png",
    title: "MTN",
    desc: "Mukhayyam Tahfidz Nasional Ramadhan",
    link: "https://bit.ly/MTNKE9ELMASUDY2025"
  },
  {
    img: "/images/program/Program-9.png",
    title: "STOR",
    desc: "Program Tahfidz dan Tahsin Berbasis Digital Ramadhan",
    link: "#"
  }
]

export default function DaurahSection() {

  return (
    <section className="w-full pb-12 pt-6">
      <div className="mx-auto w-[90%] md:w-[80%] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-10 justify-items-center">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white shadow-[0_0_25px_-2px_rgba(101,101,101,0.18)] hover:shadow-[0_0_25px_-2px_rgba(101,101,101,0.45)] pb-5 relative w-full "
          >
            <div className="h-20 w-full bg-[linear-gradient(148deg,#4b7aaa,#afc5dc)] relative">
              <div className="absolute left-6 -bottom-8 w-15 h-15 md:w-18 md:h-18 border-2 border-[#4777a8] bg-white rounded-full flex items-center justify-center">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={50}
                  height={48}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="mt-12 px-6 text-left">
              <h3 className="text-[14.5px] font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-[14px] mt-2 font-lato leading-relaxed">
                {item.desc}
              </p>
              <Link
                href={item.link}
                className="text-[#4777a8] my-7 text-[14px] inline-block font-semibold border-b-2 border-[#ffffff]  hover:border-b-2 hover:border-[#4777a8] transition-all"
              >
                Selengkapnya
              </Link>

            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
