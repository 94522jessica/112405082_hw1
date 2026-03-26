import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      <div className="bg-gray-200 w-[320px]">左邊</div>
      <div className="bg-gray-200 w-full">右邊</div>
    </div>
  )
}