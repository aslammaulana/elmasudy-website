import SvgDivider from "@/components/elements/SvgDivider"

type SectionHeaderProps = {
  title: string
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <p className="text-[28px] md:text-[38px] text-center font-extrabold text-[#253c56] font-lato uppercase leading-tight mb-[-20px] md:mb-[0px]">
        {title}
      </p>
      <SvgDivider />
    </div>
  )
}
