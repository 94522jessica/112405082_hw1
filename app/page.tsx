"use client";
import { difference } from "next/dist/build/utils";
import Link from "next/link";
import { useState, useEffect } from "react";
import AboutPage from "./about/page"; // 直接引入關於我頁面
import Image from "next/image";

// 1. 定義滿天星星的配置資料
const starsConfig = [
  { size: "w-20", top: "10%", left: "15%", delay: "0s", rotateSpeed: "spin-fast" },
  { size: "w-24", top: "25%", left: "70%", delay: "0.5s", rotateSpeed: "spin-normal" },
  { size: "w-16", top: "60%", left: "5%", delay: "1s", rotateSpeed: "spin-slow" },
  { size: "w-28", top: "5%", left: "45%", delay: "1.5s", rotateSpeed: "spin-fast" },
  { size: "w-12", top: "50%", left: "90%", delay: "2s", rotateSpeed: "spin-slow" },
  { size: "w-32", top: "80%", left: "20%", delay: "2.5s", rotateSpeed: "spin-normal" },
  { size: "w-16", top: "75%", left: "75%", delay: "3s", rotateSpeed: "spin-fast" },
  { size: "w-24", top: "15%", left: "85%", delay: "3.5s", rotateSpeed: "spin-slow" },
  { size: "w-14", top: "90%", left: "50%", delay: "0.2s", rotateSpeed: "spin-fast" },
  { size: "w-10", top: "35%", left: "25%", delay: "0.8s", rotateSpeed: "spin-normal" },
  { size: "w-8",  top: "55%", left: "15%", delay: "1.2s", rotateSpeed: "spin-slow" },
  { size: "w-10", top: "65%", left: "80%", delay: "1.8s", rotateSpeed: "spin-fast" },
  { size: "w-12", top: "85%", left: "95%", delay: "2.2s", rotateSpeed: "spin-slow" },
  { size: "w-9",  top: "40%", left: "55%", delay: "2.8s", rotateSpeed: "spin-normal" },
  { size: "w-14", top: "20%", left: "35%", delay: "0.3s", rotateSpeed: "spin-fast" },
  { size: "w-16", top: "70%", left: "40%", delay: "1.1s", rotateSpeed: "spin-slow" },
  { size: "w-10", top: "95%", left: "10%", delay: "2.9s", rotateSpeed: "spin-normal" },
  { size: "w-8",  top: "10%", left: "98%", delay: "3.2s", rotateSpeed: "spin-fast" },
];

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* 1. 開場動畫層 (滿天星斗版) */}
      {loading && (
        <div className="fixed inset-0 z-[100] bg-[#1f62a8] overflow-hidden">
          
          {/* 星星群背景 */}
          {starsConfig.map((star, i) => (
            <div 
              key={i}
              className={`absolute ${star.size} aspect-square flex items-center justify-center`}
              style={{ top: star.top, left: star.left, animationDelay: star.delay }}
            >
              <div className={`relative w-full h-full group animate-float-glow ${star.rotateSpeed}`}>
                <Image 
                  src="/star-blue-new.png" 
                  alt="star" 
                  fill 
                  className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]" 
                />
              </div>
            </div>
          ))}

          {/* 修正：Loading 文字與姓名 - 精確置中 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-50 animate-in fade-in-up delay-1000">
            <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-[0.6em] drop-shadow-2xl">
              SHI-HAN TSENG
            </h2>
            {/* 動態生長線條 */}
            <div className="h-1 w-0 bg-white mt-6 animate-width-grow mx-auto shadow-[0_0_10px_white]"></div>
            <p className="text-white/80 mt-8 font-bold tracking-[0.3em] text-sm md:text-base uppercase animate-pulse">
              Portfolio Loading...
            </p>
          </div>
        </div>
      )}

      {/* 2. 主內容層 */}
      <div className={`transition-all duration-1500 ${loading ? "opacity-0 translate-y-20" : "opacity-100 translate-y-0"}`}>
        <AboutPage />
      </div>
    </div>
  );
}