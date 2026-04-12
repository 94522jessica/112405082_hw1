import Image from "next/image";
export default function photograph() {
  return (
    <div className="grid grid-col-3 gap-4">
      <div className="text-[32px]">數位專案</div>
      <div className="bg-amber-50 rounded-2xl h-20 flex justify-center items-center row-span-2">專案1</div>
      <div className="bg-amber-50 rounded-2xl h-20 flex justify-center items-center row-span-2">專案2</div>
    </div>
  )
}