import Image from "next/image";
import Menu from "../../component/Menu";
import { MoveRight } from "lucide-react";

const textOutlineStyle = `
  text-3xl md:text-5xl font-black italic text-white 
  [-webkit-text-stroke:1px_#1f62a8] md:[-webkit-text-stroke:2px_#1f62a8] 
  [text-shadow:2px_2px_0px_#1f62a8] md:[text-shadow:4px_4px_0px_#1f62a8] 
  drop-shadow-lg
`;
// 1. 調整星星位置：分散於上方紅圈區域，大小各異
const starTraits = [
  { text: "ENFP", top: "10%", left: "22%", size: "w-45 h-45", delay: "0s" },
  { text: "團隊凝聚者", top: "37%", left: "0%", size: "w-59 h-59", delay: "0.5s" },
  { text: "多元學習", top: "60%", left: "20%", size: "w-48 h-48", delay: "1s" },
  { text: "熱情大方", top: "0%", left: "55%", size: "w-50 h-50", delay: "1.5s" },
  { text: "挑戰自我", top: "15%", left: "82%", size: "w-52 h-52", delay: "2s" },
  { text: "抗壓性強", top: "43%", left: "73%", size: "w-50 h-50", delay: "2.5s" },
  { text: "好奇心", top: "0%", left: "0%", size: "w-40 h-40", delay: "3s" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 animate-in fade-in duration-1000">
      
      {/* --- 區塊 1: 視覺中心 --- */}
      <section className="relative flex flex-col items-center">
        
        {/* 頂部左側標題 */}
        <div className="w-full flex justify-start px-6 pt-6 relative z-30 transition-transform hover:-translate-y-1">
          <h2 className={textOutlineStyle}>政治大學 廣告學系</h2>
        </div>

        {/* 照片與星星區 */}
        <div className="relative w-full h-[650px] z-10 flex justify-center items-center">
          {/* 星星群 */}
          {starTraits.map((star, i) => (
            <div 
              key={i}
              className={`absolute ${star.size} flex items-center justify-center animate-float hover:z-50 transition-all duration-300 hover:scale-125`}
              style={{ top: star.top, left: star.left, animationDelay: star.delay }}
            >
              <div className="relative w-full h-full group">
                <Image src="/star-blue-new.png" alt="star" fill className="object-contain drop-shadow-2xl transition-all group-hover:drop-shadow-[0_0_20px_rgba(163,198,255,0.8)]" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-black text-xl text-center p-6 leading-tight transition-all group-hover:text-2xl group-hover:scale-110">
                  {star.text}
                </span>
              </div>
            </div>
          ))}

          {/* 去背照片 - 調整 z-index 與定位，確保下緣與藍框銜接 */}
          <div className="relative w-[380px] h-[480px] z-20 mt-25 transition-all duration-500 hover:scale-105 filter hover:brightness-110">
            <Image 
              src="/me-remove.png" 
              alt="曾詩涵" 
              fill 
              className="object-contain translate-y-4" 
              priority
            />
          </div>

          {/* 雙主修 數位內容 - 定位在綠圈區域 (右下角) */}
          <div className="absolute bottom-[15%] top-[76%] right-[0%] z-40 transition-transform hover:scale-110 hover:rotate-2">
            <h2 className={textOutlineStyle}>雙主修 數位內容</h2>
          </div>
        </div>

        {/* 自我介紹藍框 - 緊貼照片下緣 */}
        <div className="w-full relative z-30 -mt-20 group">
          <div className="w-full bg-[#1f62a8] text-white p-12 rounded-[3.5rem] shadow-2xl border-4 border-white/20 transition-all duration-300 group-hover:border-white/40 group-hover:shadow-[0_20px_50px_rgba(31,98,168,0.3)]">
            <p className="leading-relaxed text-xl font-bold whitespace-pre-line tracking-wide">
              我是曾詩涵～目前就讀於國立政治大學廣告學系，雙主修數位內容學位學程，以及外語傳播第二專長學程的西文組。
              {"\n\n"}個性熱情大方、樂於助人，在團體中通常扮演凝聚者和外交家，擅長促進團隊整合以及與外界溝通。
              {"\n\n"}我很喜歡交朋友，喜歡團隊合作，享受人與人之間想法和靈感碰撞的時刻。
              {"\n\n"}對我而言，好奇心是持續進化的動力，這也促使我累積各種領域的經驗...每一次挑戰都是自我突破的契機！！
            </p>
          </div>
        </div>

        {/* 西文組標題 - 靠左 */}
        <div className="w-full flex justify-start mt-12 px-6">
          <h3 className={`${textOutlineStyle} transition-transform hover:translate-x-2`}>
            外語傳播第二專長學程_西文組
          </h3>
        </div>
      </section>

      {/* --- 區塊 2: 軟體能力 --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-[#1f62a8] text-white p-10 rounded-[3rem] shadow-xl flex flex-col gap-8 transition-transform hover:-translate-y-2">
          <h3 className="text-3xl font-black text-center mb-2 border-b-2 border-white/20 pb-4">影音內容製作</h3>
          <div className="space-y-8">
            <SkillItem level="熟練" name="Adobe Audition" logo="/logos/au_new.png" desc="廣播節目剪輯、音檔後期處理" />
            <SkillItem level="中階" name="Adobe After Effects" logo="/logos/ae_new.png" desc="動畫製作" />
            <SkillItem level="初階" name="Adobe Premiere Pro" logo="/logos/pr_new.png" desc="基礎影片剪輯" />
          </div>
        </div>

        <div className="bg-[#1f62a8] text-white p-10 rounded-[3rem] shadow-xl flex flex-col gap-8 transition-transform hover:-translate-y-2 delay-75">
          <h3 className="text-3xl font-black text-center mb-2 border-b-2 border-white/20 pb-4">數據分析與視覺化</h3>
          <div className="space-y-8">
            <SkillItem level="中階" name="Excel" logo="/logos/excel.png" desc="樞紐分析、報表整理" />
            <SkillItem level="中階" name="PowerPoint" logo="/logos/pp.png" desc="簡報製作" />
            <SkillItem level="初階" name="Tableau" logo="/logos/tableau_new.png" desc="資訊圖表視覺化" />
          </div>
        </div>
      </section>

      {/* --- 區塊 3: 軟體能力 (2) --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-[#1f62a8] text-white p-10 rounded-[3rem] shadow-xl flex flex-col gap-8 transition-transform hover:-translate-y-2">
          <h3 className="text-3xl font-black text-center mb-2 border-b-2 border-white/20 pb-4">數位設計與 UI/UX</h3>
          <div className="space-y-8">
            <SkillItem level="中階" name="Figma" logo="/logos/figma_new.png" desc="Prototype、Wireframe、海報設計" />
            <SkillItem level="初階" name="Blender" logo="/logos/blender.png" desc="基礎建模、3D列印" />
            <SkillItem level="初階" name="Lightroom Classic" logo="/logos/lrc_new.png" desc="照片後製與調色" />
          </div>
        </div>

        <div className="bg-[#1f62a8] text-white p-10 rounded-[3rem] shadow-xl flex flex-col gap-8 transition-transform hover:-translate-y-2 delay-75">
          <h3 className="text-3xl font-black text-center mb-2 border-b-2 border-white/20 pb-4">其他文書表達能力</h3>
          <ul className="space-y-8 text-2xl font-bold italic text-white px-4">
            {[
              "廣告、公關、節目企劃書及提案",
              "創意點子黑客松 競賽提案",
              "專題、社區新聞撰寫及播報"
            ].map((text, idx) => (
              <li key={idx} className="flex gap-6 items-start group">
                <span className="text-5xl text-white font-black transition-transform group-hover:scale-125 group-hover:text-[#a3c6ff]">{idx + 1}.</span> 
                <span className="group-hover:translate-x-2 transition-transform">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* --- 區塊 4: 證書與背景 --- */}
      <section className="space-y-8 mb-10">
        <div className="bg-[#1f62a8] text-white p-10 rounded-[3rem] shadow-xl flex items-center gap-10">
          <h3 className="text-3xl font-black whitespace-nowrap">檢定證書</h3>
          <div className="flex gap-6 flex-wrap">
            {["TOEIC 870", "TOEFL 76", "GEPT 中高級"].map(cert => (
              <span key={cert} className="bg-white text-[#1f62a8] px-8 py-3 rounded-full text-xl font-black shadow-lg transition-all hover:scale-110 hover:bg-[#a3c6ff]">
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* 經歷卡片加強懸停特效 */}
        {[
          { 
            title: "政大之聲實習廣播電台", 
            time: "2024 ~ 2026", 
            content: <p className="leading-relaxed text-xl whitespace-pre-line tracking-wide">
            喜歡講話、喜歡音樂的我，在大二選擇加入校內實習平台---政大之聲
            {"\n\n"}在節目部，我學到了節目企劃的從無到有、主持技巧、音檔剪輯、mixer和錄音設備的操作，以及Rundown撰寫
            {"\n\n"}在新聞部，我訓練了線索單和新聞稿撰寫方式、採訪技巧，以及廣播新聞的播報
            </p>
                     
          },
          { 
            title: "數位內容學士學位學程", 
            time: "2025 ~ 2027", 
            content: <p className="leading-relaxed text-xl whitespace-pre-line tracking-wide">
            喜歡設計、喜歡跨領域學習的我，在大三開始了學習一系列數位內容的課程
            {"\n\n"}包括專案管理、人機介面、3D動畫、網頁設計.....軟體的操作加上許多實際作品的產出十分有成就感
            </p>
          },
        ].map((item, idx) => (
          <div key={idx} className="bg-[#1f62a8] text-white p-10 rounded-[3rem] shadow-xl space-y-6 transition-all duration-300 hover:bg-[#1a5592] hover:scale-[1.01]">
            <div className="flex justify-between items-center border-b-2 border-white/20 pb-4">
              <h3 className="text-3xl font-black italic">校內創作背景 - {item.title}</h3>
              <span className="text-xl font-black italic opacity-80">{item.time}</span>
            </div>
            <div className="text-xl font-medium leading-relaxed opacity-90 tracking-wide">{item.content}</div>
          </div>
        ))}
      </section>
    </div>
  );
}

function SkillItem({ level, name, logo, desc }: { level: string, name: string, logo: string, desc: string }) {
  const finalLogo = logo.startsWith('/') ? logo : `/${logo}`;
  return (
    <div className="flex items-center gap-6 group">
      <div className="text-sm font-black [writing-mode:vertical-lr] border-r-2 border-white/30 pr-4 h-16 flex items-center justify-center transition-colors group-hover:text-[#a3c6ff]">
        {level}
      </div>
      <div className="w-20 h-20 relative shrink-0 bg-white p-3 rounded-2xl shadow-inner transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
        <Image src={finalLogo} alt={name} fill className="object-contain p-2" />
      </div>
      <div className="flex flex-col gap-1 transition-transform group-hover:translate-x-1">
        <p className="font-black text-2xl leading-tight group-hover:text-[#a3c6ff] transition-colors">{name} :</p>
        <p className="text-lg font-medium opacity-80">{desc}</p>
      </div>
    </div>
  );
}
