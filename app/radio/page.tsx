"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const textOutlineStyle = `
  text-3xl md:text-5xl font-black italic text-white 
  [-webkit-text-stroke:1px_#1f62a8] md:[-webkit-text-stroke:2px_#1f62a8] 
  [text-shadow:2px_2px_0px_#1f62a8] md:[text-shadow:4px_4px_0px_#1f62a8] 
  drop-shadow-lg
`;

export default function RadioPage() {
  // 3. 定義一個狀態變數，用來儲存當前被點擊放大的圖片路徑
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 關閉放大圖片的函數
  const closeImageView = () => {
    setSelectedImage(null);
  };

  // 處理按下 Escape 鍵關閉圖片的邏輯
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
    <div className="flex flex-col gap-12 animate-in fade-in duration-1000 pb-10 relative">
      
      {/* 頁面大標題 */}
      <header className="w-full flex justify-start px-2 pt-4 transition-transform hover:-translate-y-1">
        <h1 className={textOutlineStyle}>政大之聲實習廣播電台</h1>
      </header>

      {/* --- 作品 1: 專題新聞 (寬版) --- */}
      <section className="flex flex-col gap-6">
        <div className="bg-[#1f62a8] text-white p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-300">
          <h2 className="text-3xl font-black mb-4 hover:text-[#a3c6ff] transition-colors">1. 農田與野生動物共存的平衡點 台灣猴害如何防治</h2>
          <p className="text-lg font-bold opacity-80 mb-2">2024 | 政大之聲克斯托盃最佳個人專題新聞</p>
          <p className="text-md font-medium mb-4">
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
          <p className="text-xl font-medium leading-relaxed opacity-90">
            這是我在擔任新聞部見習助理時獨立撰寫並錄製的廣播專題新聞~ 從約訪、採訪、撰稿到剪輯，一手包辦！
          </p>
        </div>
        
        {/* 作品 1 的三張照片：加入 cursor-pointer 和 onClick 功能 */}
        <div className="grid grid-cols-3 gap-6">
          <div 
            className="relative h-64 rounded-[2rem] overflow-hidden shadow-lg border-4 border-white/20 cursor-pointer group hover:scale-105 hover:border-white transition-all duration-300" 
            onClick={() => setSelectedImage("/monkey1.jpg")} // 點擊時設定圖片路徑
          >
            {/* 4. 修改 CSS: 從 object-cover 改為 object-contain，並加入 p-4 內距
                object-contain 確保圖片完整顯示不被切到 */}
            <Image src="/monkey1.jpg" alt="猴害防治新聞照片 1" fill className="object-contain p-4 transition-transform duration-300 group-hover:scale-110" /> 
          </div>
          <div 
            className="relative h-64 rounded-[2rem] overflow-hidden shadow-lg border-4 border-white/20 cursor-pointer group hover:scale-105 hover:border-white transition-all duration-300"
            onClick={() => setSelectedImage("/monkey2.jpg")}
          >
            <Image src="/monkey2.jpg" alt="猴害防治新聞照片 2" fill className="object-contain p-4 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <div 
            className="relative h-64 rounded-[2rem] overflow-hidden shadow-lg border-4 border-white/20 cursor-pointer group hover:scale-105 hover:border-white transition-all duration-300"
            onClick={() => setSelectedImage("/monkey1.jpg")} // 使用存在的圖片檔名
          >
            <Image src="/monkey1.jpg" alt="猴害防治新聞照片 3" fill className="object-contain p-4 transition-transform duration-300 group-hover:scale-110" />
          </div>
        </div>
      </section>

      {/* --- 作品 2: 時尚珍珠音調 (橫向排列) --- */}
      <section className="flex gap-6 items-stretch">
        <div className="flex-[3] bg-[#1f62a8] text-white p-8 rounded-[2.5rem] shadow-xl flex flex-col justify-center hover:shadow-2xl transition-all duration-300">
          <h2 className="text-3xl font-black mb-4 hover:text-[#a3c6ff] transition-colors">2. 時尚珍珠音調</h2>
          <p className="text-lg font-bold opacity-80 mb-4">2025 | 政大之聲廣播節目</p>
          <p className="text-xl font-medium leading-relaxed opacity-90">
            這是我在擔任節目部見習助理時製作的廣播節目~ 我是主持人露亞，從企劃發想到執行，每週都會和其他夥伴一起剪音檔、寫 Rundown。
          </p>
        </div>
        <div 
          className="flex-[1] relative rounded-[2rem] overflow-hidden shadow-lg border-4 border-white/20 cursor-pointer group hover:scale-105 hover:border-white transition-all duration-300"
          onClick={() => setSelectedImage("/1132melody1.png")}
        >
          <Image src="/1132melody1.png" alt="時尚珍珠音調 1" fill className="object-contain p-4 transition-transform duration-300 group-hover:scale-110" />
        </div>
        <div 
          className="flex-[1] relative rounded-[2rem] overflow-hidden shadow-lg border-4 border-white/20 cursor-pointer group hover:scale-105 hover:border-white transition-all duration-300"
          onClick={() => setSelectedImage("/1132melody2.png")}
        >
          <Image src="/1132melody2.png" alt="時尚珍珠音調 2" fill className="object-contain p-4 transition-transform duration-300 group-hover:scale-110" />
        </div>
      </section>

      {/* --- 作品 3: 顫慄童話夜 --- */}
      <section className="flex gap-6 items-stretch">
        <div className="flex-[3] bg-[#1f62a8] text-white p-8 rounded-[2.5rem] shadow-xl flex flex-col justify-center hover:shadow-2xl transition-all duration-300">
          <h2 className="text-3xl font-black mb-4 hover:text-[#a3c6ff] transition-colors">3. 顫慄童話夜</h2>
          <p className="text-lg font-bold opacity-80 mb-4">2025 | 政大之聲廣播節目</p>
          <p className="text-xl font-medium leading-relaxed opacity-90">
            這是我在擔任二級助理時製作的廣播節目，一檔雙人主持、和暗黑童話有關的資訊性節目。我是主持人「說說」~企劃發想執行，和我的夥伴「講講」一起。
          </p>
        </div>
        <div 
          className="flex-[1] relative rounded-[2rem] overflow-hidden shadow-lg border-4 border-white/20 cursor-pointer group hover:scale-105 hover:border-white transition-all duration-300"
          onClick={() => setSelectedImage("/1141story1.png")}
        >
          <Image src="/1141story1.png" alt="顫慄童話夜 1" fill className="object-contain p-4 transition-transform duration-300 group-hover:scale-110" />
        </div>
        <div 
          className="flex-[1] relative rounded-[2rem] overflow-hidden shadow-lg border-4 border-white/20 cursor-pointer group hover:scale-105 hover:border-white transition-all duration-300"
          onClick={() => setSelectedImage("/1141story2.png")}
        >
          <Image src="/1141story2.png" alt="顫慄童話夜 2" fill className="object-contain p-4 transition-transform duration-300 group-hover:scale-110" />
        </div>
      </section>

      {/* --- 作品 4: 給我一首歌的時間 --- */}
      <section className="flex gap-6 items-stretch">
        <div className="flex-[3] bg-[#1f62a8] text-white p-8 rounded-[2.5rem] shadow-xl flex flex-col justify-center hover:shadow-2xl transition-all duration-300">
          <h2 className="text-3xl font-black mb-4 hover:text-[#a3c6ff] transition-colors">4. 給我一首歌的時間</h2>
          <p className="text-lg font-bold opacity-80 mb-4">2026 | 政大之聲廣播節目</p>
          <p className="text-xl font-medium leading-relaxed opacity-90">
            這是我在擔任二級助理時製作的廣播節目，一檔單人主持、和沉澱情緒有關的音樂網節目。我是主持人「西卡」~ 這是我第一個完成的單人節目。
          </p>
        </div>
        <div 
          className="flex-[1] relative rounded-[2rem] overflow-hidden shadow-lg border-4 border-white/20 cursor-pointer group hover:scale-105 hover:border-white transition-all duration-300"
          onClick={() => setSelectedImage("/1142music1.png")}
        >
          <Image src="/1142music1.png" alt="給我一首歌的時間 1" fill className="object-contain p-4 transition-transform duration-300 group-hover:scale-110" />
        </div>
        <div 
          className="flex-[1] relative rounded-[2rem] overflow-hidden shadow-lg border-4 border-white/20 cursor-pointer group hover:scale-105 hover:border-white transition-all duration-300"
          onClick={() => setSelectedImage("/1142music2.png")}
        >
          <Image src="/1142music2.png" alt="給我一首歌的時間 2" fill className="object-contain p-4 transition-transform duration-300 group-hover:scale-110" />
        </div>
      </section>

      {/* --- 作品 5: 回家，不回家 (雙欄配置) --- */}
      <section className="flex gap-6 items-stretch">
        <div className="flex-[3] bg-[#1f62a8] text-white p-8 rounded-[2.5rem] shadow-xl flex flex-col justify-center hover:shadow-2xl transition-all duration-300">
          <h2 className="text-3xl font-black mb-4 hover:text-[#a3c6ff] transition-colors">5. 回家 ，不回家</h2>
          <p className="text-lg font-bold opacity-80 mb-4">2025 | 政大之聲聲音創作展 - 分聲 - 展品</p>
          <p className="text-xl font-medium leading-relaxed opacity-90">
            這是我在擔任二級助理時製作的廣播劇作品。作品呈現在面對家的矛盾型態時---溫暖、爭吵；關心、控制，選擇回家或不回家後我們生活的模樣和心境。
          </p>
        </div>
        <div 
          className="flex-[2] relative rounded-[2rem] overflow-hidden shadow-lg border-4 border-white/20 min-h-[300px] cursor-pointer group hover:scale-105 hover:border-white transition-all duration-300"
          onClick={() => setSelectedImage("/home2.png")}
        >
          <Image src="/home2.png" alt="回家，不回家 展品照片" fill className="object-contain p-4 transition-transform duration-300 group-hover:scale-110" />
        </div>
      </section>

      {/* 5. 圖片放大顯示的遮罩與容器 (Modal/Overlay) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-[1000] flex justify-center items-center cursor-pointer p-10 animate-fade-in"
          onClick={closeImageView} // 點擊黑色背景處可以關閉
        >
          <div className="relative w-full h-full max-w-[90vw] max-h-[90vh]">
            <Image src={selectedImage} alt="圖片放大顯示" fill className="object-contain" />
            <button 
              onClick={closeImageView}
              className="absolute top-4 right-4 text-white hover:text-rose-300 font-bold text-5xl z-[1001]"
              aria-label="關閉顯示"
            >
              ×
            </button>
          </div>
        </div>
      )}

    </div>
  );
}