import { Lekton } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

export default function AdPage() {
  return (
    <div className="flex flex-col gap-10 animate-in fade-in duration-1000 pb-10">
      {/* --- 虎牌啤酒企劃：整合式卡片區塊 --- */}
      <section className="max-w-5xl mx-auto w-full group">
        
        {/* 整體容器：圓角、深藍背景、溢出隱藏（確保縮圖圓角貼合） */}
        <div className="bg-[#1f62a8] rounded-[3.5rem] shadow-2xl overflow-hidden border-4 border-white/10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(31,98,168,0.4)]">
          
          {/* 上半部：PDF 互動縮圖區 */}
          <Link href="/tiger.pdf" target="_blank" className="relative block w-full aspect-[16/9] cursor-pointer">
            <Image 
              src="/tiger_thumb.png" 
              alt="虎牌啤酒企劃縮圖" 
              fill 
              className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-50 group-hover:blur-[2px]"
            />
            
            {/* 游標懸停顯示文字：使用毛玻璃效果 */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="bg-white/20 backdrop-blur-md px-12 py-5 rounded-full border-2 border-white/50 shadow-xl">
                <span className="text-white text-3xl font-black tracking-widest">觀看完整內容</span>
              </div>
            </div>
          </Link>

          {/* 下半部：企劃文字說明區 */}
          <div className="p-12 text-white border-t-2 border-white/10">
            <h2 className="text-4xl font-black mb-8 flex items-center gap-4 hover:text-[#a3c6ff] transition-colors">
              虎牌啤酒 - 廣告企劃提案
            </h2>
            
            <div className="space-y-8 text-xl leading-relaxed font-medium">
              <p className="opacity-95">
                本專案針對 18-24 歲年輕消費族群。以街頭籃球為核心，結合賽事、社群與文化活動，深化虎牌與年輕族群的連結，突破既有的市場挑戰，並逐步讓虎牌成為台灣街頭文化的代表品牌 。
              </p>
              
              <p className="opacity-95">
                我們透過深入的市場洞察，將虎牌啤酒「勇敢、釋放自我」的品牌個性與年輕族群打球所追求的「爽快社交感做連結」 。
              </p>
              
              {/* 獎項與負責部分：採用網格排列 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                <div className="bg-white/10 p-8 rounded-[2rem] border border-white/5 transition-colors group-hover:bg-white/20">
                  <p className="font-black text-[#a3c6ff] text-2xl mb-3 italic">榮獲獎項</p>
                  <p className="opacity-90">受聯廣集團和虎牌啤酒評選為提案第三名、企劃書第一名 </p>
                </div>
                
                <div className="bg-white/10 p-8 rounded-[2rem] border border-white/5 transition-colors group-hover:bg-white/20">
                  <p className="font-black text-[#a3c6ff] text-2xl mb-3 italic">負責部分</p>
                  <p className="opacity-90">內外部分析、波段二廣告規劃、上台提案 </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* 底部提示文字 */}
      <footer className="text-center mt-6">
        <p className="text-[#1f62a8] font-bold opacity-60 italic text-sm italic">
          * 點擊圖片區塊即可開啟完整 PDF 提案文件
        </p>
      </footer>

    </div>
  );
}