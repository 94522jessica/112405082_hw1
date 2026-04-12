import Image from "next/image";
import Menu from "../../component/Menu";
import { MoveRight } from "lucide-react";

// 1. 動態文字外框：手機版變細 (1px)，電腦版維持 (2px)
const textOutlineStyle = `
  text-3xl md:text-5xl font-black italic text-white 
  [-webkit-text-stroke:0px_#1f62a8] md:[-webkit-text-stroke:2px_#1f62a8] 
   md:[text-shadow:4px_4px_0px_#1f62a8] 
  drop-shadow-lg leading-tight
`;

// 調整星星位置：針對手機版 (top/left) 與電腦版 (md:top/md:left) 分開設定
const starTraits = [
  { text: "ENFP", mobile: "top-[5%] left-[5%]", desktop: "md:top-[10%] md:left-[22%]", size: "w-24 h-24 md:w-44 md:h-44", delay: "0s" },
  { text: "團隊凝聚者", mobile: "top-[25%] left-[-5%]", desktop: "md:top-[37%] md:left-[0%]", size: "w-28 h-28 md:w-56 md:h-56", delay: "0.5s" },
  { text: "多元學習", mobile: "bottom-[15%] left-[5%]", desktop: "md:top-[60%] md:left-[20%]", size: "w-24 h-24 md:w-48 md:h-48", delay: "1s" },
  { text: "熱情大方", mobile: "top-0 right-[5%]", desktop: "md:top-[0%] md:left-[55%]", size: "w-28 h-28 md:w-48 md:h-48", delay: "1.5s" },
  { text: "挑戰自我", mobile: "top-[20%] right-[-5%]", desktop: "md:top-[15%] md:left-[82%]", size: "w-24 h-24 md:w-52 md:h-52", delay: "2s" },
  { text: "抗壓性強", mobile: "bottom-[20%] right-[5%]", desktop: "md:top-[43%] md:left-[73%]", size: "w-28 h-28 md:w-48 md:h-48", delay: "2.5s" },
  { text: "好奇心", mobile: "top-[-5%] left-[35%]", desktop: "md:top-[0%] md:left-[0%]", size: "w-24 h-24 md:w-40 md:h-40", delay: "3s" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-8 md:gap-16 animate-in fade-in duration-1000">
      
      {/* --- 區塊 1: 視覺中心 --- */}
      <section className="relative flex flex-col items-center">
        
        {/* 頂部左側標題 */}
        <div className="w-full flex justify-start px-2 md:px-6 pt-4 md:pt-6 relative z-30">
          <h2 className={textOutlineStyle}>政治大學 廣告學系</h2>
        </div>

        {/* 照片與星星區：手機版高度縮減 */}
        <div className="relative w-full h-[500px] md:h-[650px] z-10 flex justify-center items-center overflow-visible">
          
          {/* 星星群 */}
          {starTraits.map((star, i) => (
            <div 
              key={i}
              className={`absolute ${star.size} ${star.mobile} ${star.desktop} flex items-center justify-center animate-float z-10`}
              style={{ animationDelay: star.delay }}
            >
              <div className="relative w-full h-full group">
                <Image src="/star-blue-new.png" alt="star" fill className="object-contain drop-shadow-xl" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-black text-[10px] md:text-xl text-center p-2 md:p-6 leading-tight">
                  {star.text}
                </span>
              </div>
            </div>
          ))}

          {/* 人像照片：手機版縮小寬度 */}
          <div className="relative w-[280px] md:w-[380px] h-[350px] md:h-[480px] z-20 mt-10 md:mt-25">
            <Image 
              src="/me-remove.png" 
              alt="曾詩涵" 
              fill 
              className="object-contain translate-y-4" 
              priority
            />
          </div>

          {/* 雙主修標題：手機版調整定位與字體 */}
          <div className="absolute bottom-[5%] md:bottom-[15%] right-0 z-40">
            <h2 className={textOutlineStyle}>雙主修 數位內容</h2>
          </div>
        </div>

        {/* 自我介紹藍框 */}
        <div className="w-full relative z-30 -mt-10 md:-mt-20">
          <div className="w-full bg-[#1f62a8] text-white p-6 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl border-4 border-white/20">
            <p className="leading-relaxed text-base md:text-xl font-bold whitespace-pre-line tracking-wide">
              我是曾詩涵～目前就讀於國立政治大學廣告學系，雙主修數位內容學位學程，以及外語傳播第二專長學程的西文組。
              {"\n\n"}個性熱情大方、樂於助人，在團體中通常扮演凝聚者和外交家，擅長促進團隊整合以及與外界溝通。
              {"\n\n"}我很喜歡交朋友，喜歡團隊合作，享受人與人之間想法和靈感碰撞的時刻。 [cite: 10]
            </p>
          </div>
        </div>

        {/* 西文組標題 */}
        <div className="w-full flex justify-start mt-8 md:mt-12 px-2 md:px-6">
          <h3 className={textOutlineStyle}>
            外語傳播第二專長學程_西文組
          </h3>
        </div>
      </section>

      {/* --- 區塊 2 & 3: 軟體能力 (手機改為 1 欄) --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <SkillCard title="影音內容製作">
          <SkillItem level="熟練" name="Adobe Audition" logo="/logos/au_new.png" desc="廣播節目剪輯、音檔後期處理" />
          <SkillItem level="中階" name="After Effects" logo="/logos/ae_new.png" desc="動畫製作" />
          <SkillItem level="初階" name="Premiere Pro" logo="/logos/pr_new.png" desc="基礎影片剪輯" />
        </SkillCard>

        <SkillCard title="數據分析與視覺化">
          <SkillItem level="中階" name="Excel" logo="/logos/excel.png" desc="樞紐分析、報表整理" />
          <SkillItem level="中階" name="PowerPoint" logo="/logos/pp.png" desc="簡報製作" />
          <SkillItem level="初階" name="Tableau" logo="/logos/tableau_new.png" desc="資訊圖表視覺化" />
        </SkillCard>

        <SkillCard title="數位設計與 UI/UX">
          <SkillItem level="中階" name="Figma" logo="/logos/figma_new.png" desc="Prototype、Wireframe" />
          <SkillItem level="初階" name="Blender" logo="/logos/blender.png" desc="基礎建模、3D列印" />
          <SkillItem level="初階" name="Lightroom" logo="/logos/lrc_new.png" desc="照片後製與調色" />
        </SkillCard>

        <SkillCard title="其他文書表達能力">
          <ul className="space-y-4 md:space-y-8 text-lg md:text-2xl font-bold italic text-white px-2">
            {["廣告、公關、節目企劃書及提案", "創意點子黑客松 競賽提案", "專題、社區新聞撰寫及播報"].map((text, idx) => (
              <li key={idx} className="flex gap-4 items-start">
                <span className="text-3xl md:text-5xl font-black">{idx + 1}.</span> 
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </SkillCard>
      </section>

      {/* --- 區塊 4: 證書與背景 --- */}
      <section className="space-y-6 md:space-y-8 mb-10">
        <div className="bg-[#1f62a8] text-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-xl flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <h3 className="text-2xl md:text-3xl font-black whitespace-nowrap">檢定證書</h3>
          <div className="flex gap-3 md:gap-6 flex-wrap justify-center">
            {["TOEIC 870", "TOEFL 76", "GEPT 中高級"].map(cert => (
              <span key={cert} className="bg-white text-[#1f62a8] px-5 md:px-8 py-2 md:py-3 rounded-full text-base md:text-xl font-black shadow-lg">
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* 經歷卡片 */}
        {[
          { 
            title: "政大之聲實習廣播電台", 
            time: "2024 ~ 2026", 
            content: "在節目部，我學到了節目企劃、主持技巧、音檔剪輯；在新聞部，我訓練了採訪與播報技巧。" 
          },
          { 
            title: "數位內容學位學程", 
            time: "2025 ~ 2027", 
            content: "學習專案管理、人機介面、3D動畫、網頁設計，並累積實際作品產出。" 
          },
        ].map((item, idx) => (
          <div key={idx} className="bg-[#1f62a8] text-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-xl space-y-4">
            <div className="flex flex-col md:flex-row justify-between md:items-center border-b-2 border-white/20 pb-3">
              <h3 className="text-xl md:text-3xl font-black italic">校內背景 - {item.title}</h3>
              <span className="text-sm md:text-xl font-black italic opacity-80">{item.time}</span>
            </div>
            <p className="text-base md:text-xl font-medium leading-relaxed opacity-90">{item.content}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

// 輔助組件：技能卡片外框
function SkillCard({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="bg-[#1f62a8] text-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-xl flex flex-col gap-6 md:gap-8">
      <h3 className="text-xl md:text-3xl font-black text-center mb-2 border-b-2 border-white/20 pb-4">{title}</h3>
      {children}
    </div>
  );
}

function SkillItem({ level, name, logo, desc }: { level: string, name: string, logo: string, desc: string }) {
  return (
    <div className="flex items-center gap-4 md:gap-6">
      <div className="text-[10px] md:text-sm font-black [writing-mode:vertical-lr] border-r-2 border-white/30 pr-2 md:pr-4 h-12 md:h-16 flex items-center justify-center">
        {level}
      </div>
      <div className="w-14 h-14 md:w-20 md:h-20 relative shrink-0 bg-white p-2 md:p-3 rounded-xl md:rounded-2xl">
        <Image src={logo} alt={name} fill className="object-contain p-1" />
      </div>
      <div className="flex flex-col">
        <p className="font-black text-lg md:text-2xl leading-tight">{name}</p>
        <p className="text-xs md:text-lg font-medium opacity-80">{desc}</p>
      </div>
    </div>
  );
}