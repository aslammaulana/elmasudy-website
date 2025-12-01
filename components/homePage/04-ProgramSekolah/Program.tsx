"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { easeOut } from "framer-motion"

type Item = {
  img: string
  title: string
  desc: string
  link: string
}

const items: Item[] = [
  {
    img: "/images/program/MQL-1.png",
    title: "MQL",
    desc: "Markazul Quran wal Lughah Berbasis Asrama",
    link: "https://elmasudy.com/program/mql/"
  },
  {
    img: "/images/program/Program-4.png",
    title: "MATAYA",
    desc: "Sekolah Tahfidz Al-Qur'an yang khusus untuk Anak Yatim dan Dhuafa",
    link: "#"
  },
  {
    img: "/images/program/Program-9.png",
    title: "STO",
    desc: "Program Tahfidz & Tahsin Berbasis Digital",
    link: "#"
  },
  {
    img: "/images/program/Program-2.png",
    title: "ElMas'udy Privat",
    desc: "Program Tahfidz dan Tahsin Personal",
    link: "#"
  }
]

// Animasi container
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18
    }
  }
}

// Animasi setiap card
const fadeItem = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut }
  }
}

export default function ProgramSection() {
  const isLessThanFour = items.length < 4

  return (
    <section className="w-full py-12">
      <motion.div
        className={`mx-auto w-[90%] md:w-[80%] ${
          isLessThanFour
            ? "flex justify-center gap-10 flex-wrap"
            : "grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-10"
        }`}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeItem}
            className="bg-white shadow-[0_0_25px_-2px_rgba(101,101,101,0.18)] hover:shadow-[0_0_25px_-2px_rgba(101,101,101,0.45)] pb-5 relative w-full max-w-[250px]"
          >
            <div className="h-15 md:h-20 w-full bg-[linear-gradient(148deg,#4b7aaa,#afc5dc)] relative">
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
                className="text-[#4777a8] my-7 text-[14px] inline-block font-semibold border-b-2 border-[#ffffff] hover:border-[#4777a8] transition-all"
              >
                Selengkapnya
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
