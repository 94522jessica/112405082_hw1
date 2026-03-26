import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

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
  description: "曾詩涵的個人履歷",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

      <div className="flex h-full">
      {/*左邊*/}
      <div className="bg-white-200 w-[320px] h-full p-4">
        
        <div className="bg-gray-200 w-[80px] h-[80px] rounded-full overflow-hidden flex justify-center items-center m-auto">
          <Image src="/me.jpg" alt="me" width={80} height={80}/>
        </div>
        <div className="text-center mt-2">名字</div>
        <div className="text-center mt-2">簡介</div>

        <div className="flex gap-2">
          <div className="mt-2 mb-2">社群連結</div>
          <div className="mt-2 mb-2">社群連結</div>
          <div className="mt-2 mb-2">社群連結</div>
        </div>

        <Link href="/hobby">
          <div className="bg-gray-300 p-[16px] rounded-md">我的興趣</div>
        </Link>
        <Link href="/about">
          <div className="bg-gray-300 p-[16px] mt-2 rounded-md">關於我</div>
        </Link>
        <div className="bg-gray-300 p-[16px] mt-2 rounded-md">設計專案</div>
        <div className="bg-gray-300 p-[16px] mt-2 rounded-md">程式專案</div>


      </div>


      <div className="bg-gray-200 w-full h-screen p-4 ">右邊  {children}
      </div>
    </div>


      


      </body>
    </html>
  );
}
