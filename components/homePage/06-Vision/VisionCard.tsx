"use client"

import Image from "next/image"

type FeatureItem = {
  src: string
  title: string
  desc: string
}

const items: FeatureItem[] = [
  {
    src: "/images/advantage/quran-3.png",
    title: "Siap Sedia",
    desc: "Mendukung dalam meningkatkan kemampuan menghafal Al-Qur'an melalui metode yang efektif..",
  },
  {
    src: "/images/advantage/muslim.png",
    title: "Pengajar Berkualitas",
    desc: "Membangun Tenaga Pendidik dan Kependidikan Profesional yang Sejahtera Berstandar Internasional.",
  },
  {
    src: "/images/advantage/badge.png",
    title: "Lingkungan Berkualitas",
    desc: "Menciptakan lingkungan belajar yang kondusif dan berkualitas demi mempermudah santri memahami Al-Qur'an.",
  },
  {
    src: "/images/advantage/quran-2.png",
    title: "Kualitas dan Karakter",
    desc: "Mengembangkan potensi santri untuk menjadi pribadi berkualitas dan memiliki karakter kuat melalui pemahaman Al-Qur'an.",
  },
]

export default function VisionCard() {
  return (
    <section className="w-full py-[0px]">
      <div className="mx-auto w-[100%] md:w-[100%] grid grid-cols-1 md:grid-cols-2 gap-10  auto-rows-min">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col justify-start items-start text-left gap-4 px-5">
            <Image
              src={item.src}
              alt={item.title}
              width={60}
              height={200}
              className="object-contain"
            />

            <h3 className="text-[14px] text-gray-600  font-semibold">{item.title}</h3>

            <p className="text-gray-600 font-lato">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
