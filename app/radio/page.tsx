
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

// 調整後的標題特效：
// 手機版 (預設)：文字設為藍色 #1f62a8，移除外框與所有陰影
// 電腦版 (md:)：切換為白色文字，補回 2px 藍色外框、4px 硬陰影與光暈
const textOutlineStyle = `
  text-3xl md:text-5xl font-black italic leading-tight
  text-[#1f62a8] [-webkit-text-stroke:0px] [text-shadow:none] drop-shadow-none
  md:text-white
  md:[-webkit-text-stroke:2px_#1f62a8] 
  md:[text-shadow:4px_4px_0px_#1f62a8] 
  md:drop-shadow-lg
  transition-all duration-500
`;

export default function RadioPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const closeImageView = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeImageView();
      }
    };
    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <div className="flex flex-col gap-8 md:gap-12 animate-in fade-in duration-1000 pb-10 relative">
      
      {/* 頁面大標題 */}
      <header className="w-full flex justify-start px-2 md:px-6 pt-4 md:pt-6 relative z-30 transition-transform hover:-translate-y-1">
        <h1 className={textOutlineStyle}>政大之聲實習廣播電台</h1>
      </header>

      {/* --- 作品 1: 專題新聞 (寬版) --- */}
      <section className="flex flex-col gap-6">
        <div className="bg-[#1f62a8] text-white p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-xl">
          <h2 className="text-2xl md:text-3xl font-black mb-4 ">1. 農田與野生動物共存的平衡點 台灣猴害如何防治</h2>
          <p className="text-base md:text-lg font-bold opacity-80 mb-2">2024 | 政大之聲克斯托盃最佳個人專題新聞</p>
          <p className="text-sm md:text-md font-medium mb-4">
            新聞連結：
            <a 
              href="https://vnccu.nccu.edu.tw/PageDoc/Detail?fid=11226&id=31741" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-[#a3c6ff] transition-colors break-all"
            >
              https://vnccu.nccu.edu.tw/PageDoc/Detail?fid=11226&id=31741
            </a>
          </p>
          <p className="text-lg md:text-xl font-medium leading-relaxed opacity-90">
            這是我在擔任新聞部見習助理時獨立撰寫並錄製的廣播專題新聞~ 從約訪、採訪、撰稿到剪輯，一手包辦！
          </p>
        </div>
        
        {/* 作品 1 圖片：手機 1 欄，電腦 3 欄 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {["/monkey1.jpg", "/monkey2.jpg", "/monkey3.jpg"].map((src, idx) => (
            <div 
              key={idx}
              className="relative h-48 md:h-64 rounded-[2rem] overflow-hidden shadow-lg border-4 border-white/20 cursor-pointer group hover:scale-[1.02] md:hover:scale-105 transition-all duration-300" 
              onClick={() => setSelectedImage(src)}
            >
              <Image src={src} alt={`猴害防治新聞照片 ${idx + 1}`} fill className="object-contain p-4 transition-transform duration-300 group-hover:scale-110" /> 
            </div>
          ))}
        </div>
      </section>

      {/* --- 作品 2、3、4: 廣播節目 (通用響應式佈局) --- */}
      {[
        { 
          id: 2, 
          title: "時尚珍珠音調", 
          time: "2025 | 政大之聲廣播節目", 
          desc: "我是主持人露亞，從企劃發想到執行，每週都會和夥伴一起剪音檔、寫 Rundown。",

          audioSrc: "/audio/melody.mp3",
          imgs: ["/1132melody1.png", "/1132melody2.png"] 
        },
        { 
          id: 3, 
          title: "顫慄童話夜", 
          time: "2025 | 政大之聲廣播節目", 
          desc: "一檔雙人主持、和暗黑童話有關的資訊性節目。我是主持人「說說」~ 企劃發想執行，和我的夥伴「講講」一起。",

          audioSrc: "/audio/story.mp3",
          imgs: ["/1141story1.png", "/1141story2.png"] 
        },
        { 
          id: 4, 
          title: "給我一首歌的時間", 
          time: "2026 | 政大之聲廣播節目", 
          desc: "一檔單人主持、和沉澱情緒有關的音樂網節目。我是主持人「西卡」~ 這是我第一個完成的單人節目。",

          audioSrc: "/audio/music.mp3",
          imgs: ["/1142music1.png", "/1142music2.png"] 
        }
      ].map((proj) => (
        <section key={proj.id} className="flex flex-col md:flex-row gap-4 md:gap-6 items-stretch">
          <div className="flex-[3] bg-[#1f62a8] text-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-xl flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-black mb-2 md:mb-4">{proj.id}. {proj.title}</h2>
            <p className="text-sm md:text-lg font-bold opacity-80 mb-4">{proj.time}</p>
            <p className="text-lg md:text-xl font-medium leading-relaxed opacity-90">{proj.desc}</p>
            {/* 新增音檔播放器 */}
            <div className="w-full mt-2">
              <p className="text-xs font-bold mb-2 opacity-70">🎧 節目片段：</p>
              <audio controls className="w-full h-10 custom-audio-player">
                <source src={proj.audioSrc} type="audio/mpeg" />
                您的瀏覽器不支持音訊播放。
              </audio>
            </div>
          </div>
          <div className="flex flex-row md:flex-1 gap-4 h-40 md:h-auto">
            {proj.imgs.map((src, idx) => (
              <div 
                key={idx}
                className="flex-1 relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-lg border-4 border-white/20 cursor-pointer group hover:scale-[1.02] md:hover:scale-105 transition-all"
                onClick={() => setSelectedImage(src)}
              >
                <Image src={src} alt={`${proj.title} ${idx + 1}`} fill className="object-contain p-2 md:p-4 transition-transform group-hover:scale-110" />
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* --- 作品 5: 回家，不回家 --- */}
      <section className="flex flex-col md:flex-row gap-4 md:gap-6 items-stretch">
        <div className="flex-[3] bg-[#1f62a8] text-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-xl flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-black mb-2 md:mb-4">5. 回家 ，不回家</h2>
          <p className="text-sm md:text-lg font-bold opacity-80 mb-4">2025 | 政大之聲聲音創作展 - 分聲 - 展品</p>
          <p className="text-lg md:text-xl font-medium leading-relaxed opacity-90">
            這是我在擔任二級助理時製作的廣播劇作品。作品呈現在面對家的矛盾型態時---溫暖、爭吵；關心、控制，選擇回家或不回家後的心境。
          </p>
          {/* 雙音檔播放區 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            {/* 音檔 1: 回家 */}
            <div className="w-full">
              <p className="text-xs font-bold mb-2 opacity-70">🎧 回家：</p>
              <audio controls className="w-full h-10 custom-audio-player">
                <source src="/audio/home_yes.mp3" type="audio/mpeg" />
                您的瀏覽器不支持音訊播放。
              </audio>
            </div>
                      
          {/* 音檔 2: 不回家 */}
          <div className="w-full">
            <p className="text-xs font-bold mb-2 opacity-70">🎧 不回家：</p>
            <audio controls className="w-full h-10 custom-audio-player">
              <source src="/audio/home_no.mp3" type="audio/mpeg" />
               您的瀏覽器不支持音訊播放。
            </audio>
          </div>
        </div>
      </div>
        <div 
          className="flex-[2] relative h-64 md:h-auto rounded-[2rem] overflow-hidden shadow-lg border-4 border-white/20 cursor-pointer group transition-all"
          onClick={() => setSelectedImage("/home2.png")}
        >
          <Image src="/home2.png" alt="回家，不回家 展品照片" fill className="object-contain p-4 transition-transform group-hover:scale-105" />
        </div>
      </section>

      {/* 圖片放大顯示的遮罩 */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-[1000] flex justify-center items-center cursor-pointer p-4 md:p-10"
          onClick={closeImageView}
        >
          <div className="relative w-full h-full max-w-[95vw] max-h-[90vh]">
            <Image src={selectedImage} alt="圖片放大顯示" fill className="object-contain" />
            <button 
              onClick={closeImageView}
              className="absolute top-0 right-0 md:top-4 md:right-4 text-white font-bold text-4xl md:text-5xl"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}