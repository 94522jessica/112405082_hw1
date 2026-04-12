import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "曾詩涵的個人履歷",
  description: "曾詩涵的個人履歷 - NCCU AD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

// 定義選單資料
const navItems = [
  { name: "關於我", href: "/about" },
  { name: "廣播作品", href: "/radio" },
  { name: "廣告企劃", href: "/ad" },
  { name: "數位專案", href: "/digital" },
  { name: "影像製作", href: "/photograph" },
];

return (
  <html lang="zh-TW" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
    {/* 1. h-screen + overflow-hidden: 讓整個 body 跟螢幕一樣高，且禁止全網頁滾動
        2. p-12: 增加四周留白，讓深藍色背景露出來更多
    */}
    <body className="bg-[#1f62a8] h-screen overflow-hidden flex p-12 gap-8"> 

      {/* 2. 左側側邊欄：
          - flex-shrink-0: 確保側邊欄寬度不會因為右邊內容多而被擠壓
          - h-full: 填滿 body 的高度
      */}
      <aside className="w-[300px] h-full shrink-0 flex flex-col items-center py-8 px-6 bg-[#f8e3e2] rounded-4xl shadow-lg">
        
        {/* 大頭貼 */}
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md transition-transform duration-300 hover:scale-105">
          <Image src="/me.jpg" alt="曾詩涵" fill className="object-cover" />
        </div>

        <div className="text-center mt-6">
          <h1 className="text-xl font-bold text-[#1f62a8] tracking-wider">曾詩涵</h1>
          <p className="text-[11px] text-[#1f62a8] opacity-70 mt-1 font-medium">21y | NCCU AD | NCCU DCT</p>
        </div>

        {/* 社群連結 */}
        <div className="flex gap-5 mt-6">
          <a href="https://www.facebook.com/ceng.shi.han.924610?locale=zh_TW" target="_blank" rel="noopener noreferrer" 
             className="text-[#1f62a8] text-2xl hover:scale-110 transition-transform"><FaFacebook /></a>
          <a href="https://instagram.com/4h.____" target="_blank" rel="noopener noreferrer" 
             className="text-[#1f62a8] text-2xl hover:scale-110 transition-transform"><RiInstagramFill /></a>
          <a href="https://www.linkedin.com/in/%E8%A9%A9%E6%B6%B5-%E6%9B%BE-9a91a5312/" target="_blank" rel="noopener noreferrer" 
             className="text-[#1f62a8] text-2xl hover:scale-110 transition-transform"><GrLinkedin /></a>
        </div>

        {/* 導覽按鈕區 */}
        <nav className="w-full mt-10 space-y-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="block group">
              <div className="
                w-full py-4 px-6 rounded-2xl text-center font-bold tracking-widest
                bg-[#1f62a8] text-white
                transition-all duration-300 ease-in-out
                group-hover:scale-105 group-hover:bg-[#a3c6ff] group-hover:text-[#1f62a8]
                group-hover:shadow-xl group-active:scale-95
              ">
                {item.name}
              </div>
            </Link>
          ))}
        </nav>
        
        <div className="mt-auto text-[10px] text-[#1f62a8] opacity-40 italic font-medium">© 2026 SHI-HAN TSENG</div>
      </aside>

      {/* 3. 右側內容區：
          - flex-1: 佔滿剩下的空間
          - h-full: 跟 body 的 p-12 後的高度一樣高
          - overflow-y-auto: 內容超過高度時，自己這一區出現捲動條
      */}
      <main className="flex-1 h-full bg-[#f8e3e2] rounded-[3rem] shadow-lg overflow-y-auto relative">
        <div className="p-10 text-[#1f62a8]">
          {children}
        </div>
      </main>

    </body>
  </html>
);
}