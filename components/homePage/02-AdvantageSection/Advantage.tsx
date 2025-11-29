"use client"

import Image from "next/image"

type FeatureItem = {
  src: string
  title: string
  desc: string
}

const items: FeatureItem[] = [
  {
    src: "/images/advantage/quran-2.png",
    title: "Tenaga Pengajar",
    desc: "Tenaga Pengajar yang Berpengalaman dan Berkompeten Dibidangnya dari Dalam dan Luar Negeri.",
  },
  {
    src: "/images/advantage/quran.png",
    title: "Pendidikan",
    desc: "Memadukan pembelajaran Al-Qur'an dan pendidikan umum untuk menghasilkan santri yang berkualitas dan berwawasan luas.",
  },
  {
    src: "/images/advantage/quran-3.png",
    title: "Standar International",
    desc: "Kurikulum dan pembelajaran yang unggul menuju standar internasional dengan memadukan pendidikan umum dan agama.",
  },
]

export default function AdvantageSection() {
  return (
    <section className="w-full py-[70px]">
      <div className="mx-auto w-[90%] md:w-[80%] grid grid-cols-1 md:grid-cols-3 gap-10">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-4 px-5">
            <Image
              src={item.src}
              alt={item.title}
              width={60}
              height={200}
              className="object-contain"
            />

            <h3 className="text-[14px] font-semibold">{item.title}</h3>

            <p className="text-gray-600 font-lato">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
