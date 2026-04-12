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

  // 定義選單資料 (已根據你的需求將「關於我」設為首頁 /)
  const navItems = [
    { name: "關於我", href: "/" },
    { name: "廣播作品", href: "/radio" },
    { name: "廣告企劃", href: "/ad" },
    { name: "數位專案", href: "/digital" },
    { name: "影像製作", href: "/photograph" },
  ];

  return (
    <html lang="zh-TW" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      {/* 1. flex-col md:flex-row -> 手機垂直，桌機水平
          2. p-4 md:p-12 -> 手機縮小留白，桌機維持大留白
          3. min-h-screen md:h-screen -> 手機隨內容延伸，桌機固定高度
          4. md:overflow-hidden -> 僅桌機禁止全網頁捲動
      */}
      <body className="bg-[#1f62a8] min-h-screen md:h-screen md:overflow-hidden flex flex-col md:flex-row p-4 md:p-12 gap-4 md:gap-8"> 

        {/* 2. 左側側邊欄：手機版寬度 100%，桌機版固定 300px */}
        <aside className="w-full md:w-[300px] shrink-0 flex flex-col items-center py-6 md:py-8 px-6 bg-[#f8e3e2] rounded-[2rem] md:rounded-4xl shadow-lg">
          
          {/* 大頭貼：手機版稍微縮小 */}
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md transition-transform duration-300 hover:scale-105">
            <Image src="/me.jpg" alt="曾詩涵" fill className="object-cover" />
          </div>

          <div className="text-center mt-4 md:mt-6">
            <h1 className="text-lg md:text-xl font-bold text-[#1f62a8] tracking-wider">曾詩涵</h1>
            <p className="text-[10px] md:text-[11px] text-[#1f62a8] opacity-70 mt-1 font-medium">21y | NCCU AD | NCCU DCT</p>
          </div>

          {/* 社群連結 */}
          <div className="flex gap-4 md:gap-5 mt-4 md:mt-6">
            <a href="https://www.facebook.com/ceng.shi.han.924610?locale=zh_TW" target="_blank" rel="noopener noreferrer" 
               className="text-[#1f62a8] text-xl md:text-2xl hover:scale-110 transition-transform"><FaFacebook /></a>
            <a href="https://instagram.com/4h.____" target="_blank" rel="noopener noreferrer" 
               className="text-[#1f62a8] text-xl md:text-2xl hover:scale-110 transition-transform"><RiInstagramFill /></a>
            <a href="https://www.linkedin.com/in/%E8%A9%A9%E6%B6%B5-%E6%9B%BE-9a91a5312/" target="_blank" rel="noopener noreferrer" 
               className="text-[#1f62a8] text-xl md:text-2xl hover:scale-110 transition-transform"><GrLinkedin /></a>
          </div>

          {/* 導覽按鈕區：手機版間距變小 */}
          <nav className="w-full mt-6 md:mt-10 space-y-2 md:space-y-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="block group">
                <div className="
                  w-full py-3 md:py-4 px-4 md:px-6 rounded-xl md:rounded-2xl text-center font-bold tracking-widest text-sm md:text-base
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
          
          <div className="mt-6 md:mt-auto text-[10px] text-[#1f62a8] opacity-40 italic font-medium">© 2026 SHI-HAN TSENG</div>
        </aside>

        {/* 3. 右側內容區：
            - md:h-full: 桌機版才需要撐滿
            - md:overflow-y-auto: 桌機版內容多時出現內部捲動條
        */}
        <main className="flex-1 md:h-full bg-[#f8e3e2] rounded-[2rem] md:rounded-[3rem] shadow-lg overflow-y-auto relative">
          <div className="p-6 md:p-10 text-[#1f62a8]">
            {children}
          </div>
        </main>

      </body>
    </html>
  );
}