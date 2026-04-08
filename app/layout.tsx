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

  // 定義選單資料，方便維護
  const navItems = [
    { name: "關於我", href: "/about", color: "hover:bg-rose-100" },
    { name: "廣播作品", href: "/radio", color: "hover:bg-blue-100" },
    { name: "廣告企劃", href: "/ad", color: "hover:bg-amber-100" },
    { name: "數位專案", href: "/digital", color: "hover:bg-emerald-100" },
  ];

  return (
    <html lang="zh-TW" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="bg-gray-100 min-h-screen flex p-6 gap-6"> 
        {/* 外層 body 加上 p-4 與 bg-gray-100 可以讓整個網頁四周有「留白」感*/}

        {/* 左側側邊欄 */}
        <aside className="w-[300px] flex flex-col items-center py-8 px-6 bg-white rounded-[2rem] shadow-sm border border-gray-100">
          
          {/* 大頭貼：增加外框與陰影 */}
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105">
            <Image src="/me.jpg" alt="曾詩涵" fill className="object-cover" />
          </div>

          <div className="text-center mt-6">
            <h1 className="text-xl font-bold text-gray-800 tracking-wider">曾詩涵</h1>
            <p className="text-sm text-gray-500 mt-1">21y | NCCU AD | NCCU DCT</p>
          </div>

          {/* 社群連結：使用簡單的圖示或文字 */}
          <div className="flex gap-4 mt-6">
            <a href="https://www.facebook.com/ceng.shi.han.924610?locale=zh_TW" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity"><FaFacebook /></a>
            <a href="https://instagram.com/4h.____" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity"><RiInstagramFill /></a>
            <a href="https://www.linkedin.com/in/%E8%A9%A9%E6%B6%B5-%E6%9B%BE-9a91a5312/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity"><GrLinkedin /></a>
          </div>

          {/* 導覽按鈕區 */}
          <nav className="w-full mt-10 space-y-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="block group">
                <div className={`
                  w-full py-4 px-6 rounded-2xl text-center font-medium text-gray-600
                  bg-gray-50 border border-transparent
                  transition-all duration-300 ease-in-out
                  group-hover:scale-105 group-hover:shadow-md group-active:scale-95
                  ${item.color} group-hover:text-gray-800 group-hover:border-gray-200
                `}>
                  {item.name}
                </div>
              </Link>
            ))}
          </nav>
          
          <div className="mt-auto text-[10px] text-gray-300 italic">© 2026 SHI-HAN TSENG</div>
        </aside>

        {/* 右側內容區：主容器也使用大圓角 */}
        <main className="flex-1 bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden overflow-y-auto relative">
          <div className="p-8 h-full">
            {children}
          </div>
        </main>

      </body>
    </html>
);
}
