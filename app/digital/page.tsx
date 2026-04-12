"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

// 沿用一致的標題特效
const textOutlineStyle = "text-5xl font-black italic text-white [-webkit-text-stroke:2px_#1f62a8] [text-shadow:4px_4px_0px_#1f62a8,0_0_15px_rgba(31,98,168,0.5)] drop-shadow-2xl";

export default function DigitalPage() {
  // Remindish 專案的頁面切換狀態
  const [remindishPage, setRemindishPage] = useState(1);

  return (
    <div className="flex flex-col gap-12 animate-in fade-in duration-1000 pb-10">

      {/* --- 專案 1: Remindish (含分頁功能) --- */}
      <section className="max-w-5xl mx-auto w-full group">
              <div className="bg-[#1f62a8] rounded-[3.5rem] shadow-2xl overflow-hidden border-4 border-white/10 transition-all duration-500">
                
                {/* 上半部：互動區域 (兩頁切換) [cite: 111, 112] */}
                <div className="relative w-full aspect-[16/9] bg-white/5">
                  {/* 第一頁：圖片展示 [cite: 112] */}
                  {remindishPage === 1 && (
                    <Link href="/remindish.png" target="_blank" className="relative block w-full h-full cursor-pointer group/img">
                      <Image 
                        src="/remindish.png" 
                        alt="Remindish App 介面" 
                        fill 
                        className="object-cover transition-all duration-700 group-hover/img:scale-105 group-hover/img:brightness-50 group-hover/img:blur-[2px]"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-500">
                        <div className="bg-white/20 backdrop-blur-md px-12 py-5 rounded-full border-2 border-white/50">
                          <span className="text-white text-3xl font-black tracking-widest">觀看完整內容</span>
                        </div>
                      </div>
                    </Link>
                  )}

                  {/* 第二頁：影片預覽 (使用 remindish_pic.jpg) [cite: 112] */}
                  {remindishPage === 2 && (
                    <Link href="/remindish_video.mp4" target="_blank" className="relative block w-full h-full cursor-pointer group/vid">
                      <Image 
                        src="/remindish_pic.jpg" 
                        alt="Remindish 影片預覽" 
                        fill 
                        className="object-cover transition-all duration-700 group-hover/vid:scale-105 group-hover/vid:brightness-75"
                      />
                      {/* 播放鈕互動 [cite: 112] */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-md border-2 border-white/50 group-hover/vid:scale-110 group-hover/vid:bg-white/50 transition-all duration-300 shadow-2xl">
                          <div className="w-0 h-0 border-t-[18px] border-t-transparent border-l-[30px] border-l-white border-b-[18px] border-b-transparent ml-2"></div>
                        </div>
                      </div>
                    </Link>
                  )}

                  {/* 分頁切換按鈕 [cite: 112] */}
                  <button 
                    onClick={() => setRemindishPage(remindishPage === 1 ? 2 : 1)}
                    className="absolute right-6 top-1/2 -translate-y-1/2 z-50 bg-white/20 hover:bg-white/40 p-4 rounded-full backdrop-blur-md border border-white/30 text-white transition-all shadow-lg"
                  >
                    {remindishPage === 1 ? <ChevronRight size={40} /> : <ChevronLeft size={40} />}
                  </button>
                  
                  {/* 頁碼指示器 */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-50">
                    <div className={`w-3 h-3 rounded-full transition-all ${remindishPage === 1 ? 'bg-white w-8' : 'bg-white/40'}`}></div>
                    <div className={`w-3 h-3 rounded-full transition-all ${remindishPage === 2 ? 'bg-white w-8' : 'bg-white/40'}`}></div>
                  </div>
                </div>

                {/* 下半部：文字說明 [cite: 111] */}
                <div className="p-12 text-white border-t-2 border-white/10">
                  <h2 className="text-4xl font-black mb-6 ">Remindish - 冰箱食材管理App</h2>
                  <div className="space-y-6 text-xl leading-relaxed">
                    <p className="opacity-95">
                      本專案聚焦現代逐年增加的獨居青年和小家庭，希望解決他們應生活忙碌不常煮飯或忘記冰箱食材效期，導致食材浪費的痛點 。 App四大功能：冰箱食材管理、智慧食譜推薦、線上食材預定、差一項購物清單，提供一條龍服務 。
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-lg">
                      <div className="bg-white/10 p-6 rounded-[2rem] border border-white/5">
                        <p className="font-black text-[#a3c6ff] mb-2 italic">負責部分：</p>
                        <p className="opacity-90">計畫發想、prototype設計、wireframe設計、影片製作</p>
                      </div>
                      <div className="bg-white/10 p-6 rounded-[2rem] border border-white/5">
                        <p className="font-black text-[#a3c6ff] mb-2 italic">使用工具：</p>
                        <p className="opacity-90">Figma、Canva、AU </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* --- 專案 2: 汪汪聯絡簿 --- */}
            <section className="max-w-5xl mx-auto w-full group">
              <div className="bg-[#1f62a8] rounded-[3.5rem] shadow-2xl overflow-hidden border-4 border-white/10 transition-all duration-500">
                
                {/* 上半部：PDF 互動 (使用 dog_pic.jpg 作為縮圖)  */}
                <Link href="/dog.pdf" target="_blank" className="relative block w-full aspect-[16/9] cursor-pointer group/img">
                  <Image 
                    src="/dog_pic.png" 
                    alt="汪汪聯絡簿 專案預覽" 
                    fill 
                    className="object-cover transition-all duration-700 group-hover/img:scale-105 group-hover/img:brightness-50 group-hover/img:blur-[2px]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-500">
                    <div className="bg-white/20 backdrop-blur-md px-12 py-5 rounded-full border-2 border-white/50 shadow-xl">
                      <span className="text-white text-3xl font-black tracking-widest">觀看完整內容</span>
                    </div>
                  </div>
                </Link>

                {/* 下半部：文字說明 [cite: 113] */}
                <div className="p-12 text-white border-t-2 border-white/10">
                  <h2 className="text-4xl font-black mb-6 ">汪汪聯絡簿 - 寵物照顧檔案App</h2>
                  <div className="space-y-6 text-xl leading-relaxed">
                    <p className="opacity-95">
                      本專案聚焦狗狗飼主與臨時照顧者，解決臨時委託照顧時資訊不對等、溝通效率不佳的問題，設計了系統化的寵物檔案建立與照顧回報模組。
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-lg">
                      <div className="bg-white/10 p-6 rounded-[2rem] border border-white/5">
                        <p className="font-black text-[#a3c6ff] mb-2 italic">負責部分：</p>
                        <p className="opacity-90">擔任小組組長、問題及痛點洞察、使用流程規劃、上台發表 </p>
                      </div>
                      <div className="bg-white/10 p-6 rounded-[2rem] border border-white/5">
                        <p className="font-black text-[#a3c6ff] mb-2 italic">使用工具：</p>
                        <p className="opacity-90">Figma、Canva、Gemini </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        );
      }