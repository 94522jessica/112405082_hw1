import Image from "next/image";
import Menu from "../../component/Menu";
import { MoveRight } from "lucide-react";

// 標題特效：超粗白字 + 深藍外框 + 加強陰影
const textOutlineStyle = "text-5xl font-black italic text-white [-webkit-text-stroke:2px_#1f62a8] [text-shadow:4px_4px_0px_#1f62a8,0_0_15px_rgba(31,98,168,0.5)] drop-shadow-2xl";

// 1. 定義分散且大小不一的星星特質資料 (根據紅圈位置調整)
const starTraits = [
  { text: "ENFP", top: "10%", left: "22%", size: "w-45 h-45" },          // 中
  { text: "團隊凝聚者", top: "40%", left: "0%", size: "w-59 h-59" },   // 小
  { text: "多元學習", top: "65%", left: "20%", size: "w-48 h-48" },    // 大
  { text: "熱情大方", top: "0%", left: "55%", size: "w-50 h-50" },     // 小
  { text: "挑戰自我", top: "15%", left: "82%", size: "w-52 h-52" },     // 大
  { text: "抗壓性強", top: "50%", left: "75%", size: "w-50 h-50" },    // 中
  { text: "好奇心", top: "0%", left: "0%", size: "w-40 h-40" },      // 小
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-12 animate-in fade-in duration-1000">
      
      {/* --- 區塊 1: 視覺中心 --- */}
      <section className="relative flex flex-col items-center">
        
        {/* 頂部左側標題 */}
        <div className="w-full flex justify-start px-6 pt-6 relative z-30">
          <h2 className={textOutlineStyle}>政治大學 廣告學系</h2>
        </div>

        {/* 照片與巨型星星區 */}
        <div className="relative w-full h-[600px] z-10 flex justify-center items-center">
          {/* 星星群 */}
          {starTraits.map((star, i) => (
            <div 
              key={i}
              className={`absolute ${star.size} flex items-center justify-center animate-float`}
              style={{ top: star.top, left: star.left, animationDelay: `${i * 0.7}s` }}
            >
              <div className="relative w-full h-full">
                <Image src="/star-blue-new.png" alt="star" fill className="object-contain drop-shadow-2xl" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-black text-lg text-center p-4 leading-tight">
                  {star.text}
                </span>
              </div>
            </div>
          ))}

          {/* 去背照片 - 移除下方的 margin 並微調位置確保與藍框對接 */}
          <div className="relative w-[420px] h-[520px] z-35 mt-25">
            <Image 
              src="/me-remove.png" 
              alt="曾詩涵" 
              fill 
              className="object-contain translate-y-6" 
              priority
            />
          </div>

          {/* 雙主修 數位內容 - 定位在綠色區域 (照片右側，藍框上方) */}
          <div className="absolute bottom-[10%] top-[80%] right-[0%] z-40">
            <h2 className={textOutlineStyle}>雙主修 數位內容</h2>
          </div>
        </div>

        {/* 自視藍框 - 使用負 margin 向上移動，與照片下緣直接銜接 */}
        <div className="w-full relative z-30 -mt-8">
          <div className="w-full bg-[#1f62a8] text-white p-12 rounded-[3rem] shadow-2xl border-4 border-white/20">
            <p className="leading-relaxed text-xl font-bold whitespace-pre-line tracking-wide">
              我是曾詩涵～目前就讀於國立政治大學廣告學系，雙主修數位內容學位學程，以及外語傳播第二專長學程的西文組 。
              {"\n\n"}個性熱情大方、樂於助人，在團體中通常扮演凝聚者和外交家，擅長促進團隊整合以及與外界溝通 。
              {"\n\n"}我很喜歡交朋友，喜歡團隊合作，享受人與人之間想法和靈感碰撞的時刻 。
              {"\n\n"}對我而言，好奇心是持續進化的動力，這也促使我累積各種領域的經驗...每一次挑戰都是自我突破的契機！！ 
            </p>
          </div>
        </div>

{/* 西文組標題 - 靠左對齊 */}
        <div className="w-full flex justify-start mt-10 px-6">
          <h3 className={textOutlineStyle}>
            外語傳播第二專長學程_西文組
          </h3>
        </div>
      </section>


      {/* --- 區塊 2: 軟體能力 (1) --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-[#1f62a8] text-white p-10 rounded-[3rem] shadow-xl flex flex-col gap-8">
          <h3 className="text-3xl font-black text-center mb-2 border-b-2 border-white/20 pb-4">影音內容製作 </h3>
          <div className="space-y-8">
            <SkillItem level="熟練" name="Adobe Audition" logo="/logos/au_new.png" desc="廣播節目剪輯、音檔後期處理" />
            <SkillItem level="中階" name="Adobe After Effects" logo="/logos/ae_new.png" desc="動畫製作" />
            <SkillItem level="初階" name="Adobe Premiere Pro" logo="/logos/pr_new.png" desc="基礎影片剪輯" />
          </div>
        </div>

        <div className="bg-[#1f62a8] text-white p-10 rounded-[3rem] shadow-xl flex flex-col gap-8">
          <h3 className="text-3xl font-black text-center mb-2 border-b-2 border-white/20 pb-4">數據分析與視覺化 </h3>
          <div className="space-y-8">
            <SkillItem level="中階" name="Excel" logo="/logos/excel.png" desc="樞紐分析、報表整理" />
            <SkillItem level="中階" name="PowerPoint" logo="/logos/pp.png" desc="簡報製作" />
            <SkillItem level="初階" name="Tableau" logo="/logos/tableau_new.png" desc="資訊圖表視覺化" />
          </div>
        </div>
      </section>

      {/* --- 區塊 3: 軟體能力 (2) --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-[#1f62a8] text-white p-10 rounded-[3rem] shadow-xl flex flex-col gap-8">
          <h3 className="text-3xl font-black text-center mb-2 border-b-2 border-white/20 pb-4">數位設計與 UI/UX </h3>
          <div className="space-y-8">
            <SkillItem level="中階" name="Figma" logo="/logos/figma_new.png" desc="Prototype、Wireframe、海報設計" />
            <SkillItem level="初階" name="Blender" logo="/logos/blender.png" desc="基礎建模、3D列印" />
            <SkillItem level="初階" name="Lightroom Classic" logo="/logos/lrc_new.png" desc="照片後製與調色" />
          </div>
        </div>

        <div className="bg-[#1f62a8] text-white p-10 rounded-[3rem] shadow-xl flex flex-col gap-8">
          <h3 className="text-3xl font-black text-center mb-2 border-b-2 border-white/20 pb-4">其他文書表達能力 </h3>
          <ul className="space-y-8 text-2xl font-bold italic text-white-100 px-4">
            <li className="flex gap-6 items-start"><span className="text-5xl text-white font-black">1.</span> 廣告、公關、節目企劃書及提案 </li>
            <li className="flex gap-6 items-start"><span className="text-5xl text-white font-black">2.</span> 創意點子黑客松 競賽提案 </li>
            <li className="flex gap-6 items-start"><span className="text-5xl text-white font-black">3.</span> 專題、社區新聞撰寫及播報 </li>
          </ul>
        </div>
      </section>

      {/* --- 區塊 4: 證書與背景 --- */}
      <section className="space-y-8">
        <div className="bg-[#1f62a8] text-white p-10 rounded-[3rem] shadow-xl flex items-center gap-10">
          <h3 className="text-3xl font-black whitespace-nowrap">檢定證書 </h3>
          <div className="flex gap-6 flex-wrap">
            {["TOEIC 870", "TOEFL 76", "GEPT 中高級"].map(cert => (
              <span key={cert} className="bg-white text-[#1f62a8] px-8 py-3 rounded-full text-xl font-black shadow-lg">
                {cert}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-[#1f62a8] text-white p-10 rounded-[3rem] shadow-xl space-y-6">
          <div className="flex justify-between items-center border-b-2 border-white/20 pb-4">
            <h3 className="text-3xl font-black">校內創作背景 - 政大之聲實習廣播電台 </h3>
            <span className="text-xl font-black italic opacity-80">2024 ~ 2026 </span>
          </div>
          <p className="text-xl font-medium leading-relaxed opacity-90">
            喜歡講話、喜歡音樂的我，在大二選擇加入校內實習平台---政大之聲 。在節目部，我學到了節目企劃、主持技巧、剪輯與設備操作；在新聞部則訓練了採訪技巧與播報 。
          </p>
        </div>

        <div className="bg-[#1f62a8] text-white p-10 rounded-[3rem] shadow-xl space-y-6">
          <div className="flex justify-between items-center border-b-2 border-white/20 pb-4">
            <h3 className="text-3xl font-black">校內創作背景 - 數位內容學士學位學程 </h3>
            <span className="text-xl font-black italic opacity-80">2025 ~ 2027 </span>
          </div>
          <p className="text-xl font-medium leading-relaxed opacity-90">
            喜歡設計、喜歡跨領域學習的我，在大三開始學習一系列數位內容課程 。包括專案管理、人機介面、3D動畫、網頁設計等，實際作品的產出讓我感到非常有成就感。
          </p>
        </div>
      </section>
    </div>
  );
}

function SkillItem({ level, name, logo, desc }: { level: string, name: string, logo: string, desc: string }) {
  const finalLogo = logo.startsWith('/') ? logo : `/${logo}`;
  return (
    <div className="flex items-center gap-6 group">
      <div className="text-sm font-black [writing-mode:vertical-lr] border-r-2 border-white/30 pr-4 h-16 flex items-center justify-center">
        {level}
      </div>
      <div className="w-20 h-20 relative flex-shrink-0 bg-white p-3 rounded-2xl shadow-inner group-hover:scale-110 transition-transform">
        <Image src={finalLogo} alt={name} fill className="object-contain p-2" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-black text-2xl leading-tight">{name} :</p>
        <p className="text-lg font-medium opacity-80">{desc}</p>
      </div>
    </div>
  );
}