"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

// 標題與日期特效 (對標虎牌啤酒與猴害新聞風格)
const titleStyle = "text-4xl font-black mb-8"; 
const dateStyle = "text-lg font-bold opacity-80 mb-2";
const textOutlineStyle = "text-5xl font-black italic text-white [-webkit-text-stroke:2px_#1f62a8] [text-shadow:4px_4px_0px_#1f62a8,0_0_15px_rgba(31,98,168,0.5)] drop-shadow-2xl";

export default function PhotographPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // ESC 鍵關閉放大視窗
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") setSelectedImage(null); };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col gap-10 animate-in fade-in duration-1000 pb-20 relative">

      {/* --- 單一大型整合區塊 (像部落格文章，無空隙) --- */}
      <main className="max-w-5xl mx-auto w-full bg-[#1f62a8] rounded-[3.5rem] shadow-2xl border-4 border-white/10 overflow-hidden">
        
        <article className="p-12 text-white space-y-12">
          
          {/* 1. 標題與日期 */}
          <header className="mb-14">
            <h2 className={titleStyle}>
              我也曾經想過這樣殺了我自己 - 概念攝影  
            </h2>
            <p className={dateStyle}>
              2023 | 靜態影像設計期末專題
            </p>
          </header>

          {/* 2. 前言敘事 (分行正確) */}
          <p className="whitespace-pre-line text-xl leading-relaxed font-medium opacity-90 tracking-wide">
            青春期的迷惘、家庭失和的不安全感、無法融入同儕的失落、對於成績的得失心
            {"\n\n"}或者…單純對生活中的一切感到無趣且疲乏
            {"\n\n"}快節奏的城市裡，來往的汽車、嘈雜的人聲，日復一日迴旋反覆 
          </p>

          {/* 3. 第一組圖 (me1, me2) + 圖說 */}
          <InlineGallery 
            images={["/me2.jpg", "/me1.jpg"]} 
            onImageClick={setSelectedImage}
            caption="「驚 ! 國內一個月，就有13萬人曾認真想過自殺 !?」...你不是一個人，我們都是這樣活著的。 "
          />

          {/* 4. 第二段敘述 */}
          <p className="whitespace-pre-line text-xl leading-relaxed font-medium opacity-90 tracking-wide">
            我很清楚，我不屬於這裡
            {"\n\n"}我很清楚，我沒有精神疾病 
          </p>

          {/* 5. 第二組圖 (me8) + 圖說 */}
          <InlineGallery 
            images={["/me8.jpg"]} 
            onImageClick={setSelectedImage}
            caption="「快節奏的城市裡...我總會忍不住想，要是就這樣被淹沒….」 "
          />

          {/* 6. 第三組圖 (me3, me4, me5) + 圖說 */}
          <InlineGallery 
            images={["/me3.jpg", "/me4.jpg", "/me5.jpg"]} 
            onImageClick={setSelectedImage}
            caption="「我想埋葬自己的模樣，活成其他人喜歡的形狀」 "
          />

          {/* 7. 第三段敘述 */}
          <p className="whitespace-pre-line text-xl leading-relaxed font-medium opacity-90 tracking-wide">
            可是
            {"\n\n"}如果我死了 是不是就不用再煩惱這些事了? 
          </p>

          {/* 8. 第四組圖 (me6, me7) + 圖說 */}
          <InlineGallery 
            images={["/me6.jpg", "/me7.jpg"]} 
            onImageClick={setSelectedImage}
            caption="「那些我賴以維生的，令我窒息」 "
          />

          {/* 9. 第五組圖 (me11) + 圖說 */}
          <InlineGallery 
            images={["/me11.jpg"]} 
            onImageClick={setSelectedImage}
            caption="「社群平台上，展示著他人光鮮亮麗的精采人生，我好像從出生起就輸了」 "
          />

          <p className="whitespace-pre-line text-xl leading-relaxed font-medium opacity-90 tracking-wide">
          如果我死了 是不是一切的困難就結束了?
          </p>

          {/* 10. 第六組圖 (me9, me10) + 圖說 */}
          <InlineGallery 
            images={["/me9.jpg", "/me10.jpg"]} 
            onImageClick={setSelectedImage}
            caption="「夠了。他們根本不了解。他們恣意在你身上貼標籤；他們只看得見他們想看見的」 "
          />

          {/* 11. 第四段敘述 */}
          <p className="whitespace-pre-line text-xl leading-relaxed font-medium opacity-90 tracking-wide">
            於是
            {"\n\n"}在教室裡、在頂樓上、在無人的浴室裡、在人來人往的街上、在每天都會經過的天橋上、在獨自看海發呆的時候、在靜靜聽著洗衣機運轉聲的午後
            {"\n\n"}我曾經想過這樣殺了我自己。 
          </p>

          {/* 12. 第七組圖 (me12, me13) + 圖說 */}
          <InlineGallery 
            images={["/me12.jpg", "/me13.jpg"]} 
            onImageClick={setSelectedImage}
            caption="「我對未來感到迷惘，對自己感到失望」 "
          />

          {/* 13. 第五段敘述 */}
          <p className="whitespace-pre-line text-xl leading-relaxed font-medium opacity-90 tracking-wide">
            可是
            {"\n\n"}我沒有勇氣。
            {"\n\n"}但這不就是人生嗎?
            {"\n\n"}無數次想放棄，再無數次拾起 
          </p>

          {/* 14. 第八組圖 (me14) + 圖說 */}
          <InlineGallery 
            images={["/me14.jpg"]} 
            onImageClick={setSelectedImage}
            caption="「成『枷』立業」 "
          />

          {/* 15. 結尾敘述 */}
          <p className="whitespace-pre-line text-xl leading-relaxed font-medium opacity-90 tracking-wide">
            我們曾如此渴望命運的波瀾，到最後才發現：人生最曼妙的風景，竟是內心的淡定與從容。
            {"\n\n"}我們曾如此期盼外界的認可，到最後才知道：世界是自己的，與他人毫無關係。
            {"\n\n"}於是 
            {"\n\n"}在教室裡、在頂樓上、在無人的浴室裡、在人來人往的街上、在每天都會經過的
            {"\n\n"}天橋上、在獨自看海發呆的時候、在靜靜聽著洗衣機運轉聲的午後
            {"\n\n"}我想 
            {"\n\n"}活著活著 總有一天… 
          </p>

          {/* 16. 最終圖 (me15) + 圖說 */}
          <InlineGallery 
            images={["/me15.jpg"]} 
            onImageClick={setSelectedImage}
            caption="「終究是一個人來，一個人走」 "
          />

        </article>
      </main>

      {/* 圖片放大 Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-[2000] flex justify-center items-center p-10 cursor-zoom-out" 
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full">
            <Image src={selectedImage} alt="Zoom" fill className="object-contain" />
          </div>
          <button className="absolute top-10 right-10 text-white text-6xl font-thin">×</button>
        </div>
      )}
    </div>
  );
}

// 修改後的圖集元件：黑色背景 + 底部圖說
function InlineGallery({ 
  images, 
  onImageClick, 
  caption 
}: { 
  images: string[], 
  onImageClick: (src: string) => void, 
  caption: string 
}) {
  const [index, setIndex] = useState(0);

  return (
    <div className="space-y-4">
      {/* 影像區：純黑色背景 */}
      <div className="relative w-full aspect-video bg-black rounded-[2.5rem] overflow-hidden border-2 border-white/10 group">
        <div className="relative w-full h-full cursor-pointer" onClick={() => onImageClick(images[index])}>
          <Image 
            src={images[index]} 
            alt={`gallery-${index}`} 
            fill 
            className="object-contain p-4 transition-transform duration-500 hover:scale-[1.02]" 
          />
        </div>

        {/* 分頁控制 */}
        {images.length > 1 && (
          <>
            <button 
              onClick={() => setIndex((index - 1 + images.length) % images.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/30 p-3 rounded-full backdrop-blur-md text-white transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              onClick={() => setIndex((index + 1) % images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/30 p-3 rounded-full backdrop-blur-md text-white transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={28} />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <div key={i} className={`h-1.5 rounded-full transition-all ${index === i ? 'bg-white w-6' : 'bg-white/30 w-1.5'}`}></div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* 圖說區：與影像下方貼齊，區隔於主體文字 */}
      <div className="px-6 py-4 bg-white/5 rounded-2xl border-l-4 border-[#a3c6ff]">
        <p className="text-lg font-bold italic text-[#a3c6ff] tracking-wider">
          {caption}
        </p>
      </div>
    </div>
  );
}