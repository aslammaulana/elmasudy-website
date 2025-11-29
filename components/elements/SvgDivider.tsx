export default function SvgDivider() {
  return (
    <div className="w-full py-10 flex justify-center">
      <div
        className="h-5 w-[25%] md:w-[10%] "
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%' viewBox='0 0 240 24' fill='none' stroke='%23fbc102' stroke-width='3' stroke-linecap='square'%3E%3Cpolyline points='0,18 12,6 24,18 36,6 48,18 60,6 72,18 84,6 96,18 108,6 120,18 132,6 144,18 156,6 168,18 180,6 192,18 204,6 216,18 228,6 240,18' /%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "center",
          backgroundSize: "auto 100%"
        }}
      ></div>
    </div>
  )
}
