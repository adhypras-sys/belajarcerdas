import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { 
  Volume2, VolumeX, ChevronRight, ChevronLeft, Home, 
  BookOpen, Calculator, RefreshCcw, Check, 
  Sparkles, XCircle, Globe, CheckCircle2,
  Moon, Sun, Award, Zap, Star, Cloud,
  Trash2, RotateCcw
} from 'lucide-react';

// --- GLOBAL STYLES & CONSTANTS ---
const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  :root {
    --font-primary: 'Nunito', system-ui, -apple-system, sans-serif;
  }

  html {
    overflow-y: scroll; 
    scrollbar-gutter: stable;
  }

  body {
    font-family: var(--font-primary);
  }

  .animate-blob { animation: blob 10s infinite alternate; }
  .animation-delay-2000 { animation-delay: 2s; }
  .animation-delay-4000 { animation-delay: 4s; }
  .animate-bounce-slow { animation: bounce 3s infinite; }
  .animate-confetti-fall { animation: confettiFall linear infinite; }
  
  /* Animasi Bintang: Kelap-kelip & Putar Pelan */
  @keyframes twinkle {
    0%, 100% { opacity: 0.4; transform: scale(0.8); }
    50% { opacity: 1; transform: scale(1.1); }
  }
  
  @keyframes spinSlow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  /* Animasi Reset Putar Balik */
  @keyframes spinReverse {
    from { transform: rotate(360deg); }
    to { transform: rotate(0deg); }
  }
  .animate-spin-reverse { animation: spinReverse 0.7s cubic-bezier(0.4, 0, 0.2, 1); }

  /* Animasi Awan Melintas */
  @keyframes floatCloud {
    0% { transform: translateX(-10vw); }
    100% { transform: translateX(110vw); }
  }

  /* Animasi Bulan Glowing */
  @keyframes moonGlow {
    0%, 100% { filter: drop-shadow(0 0 15px rgba(255, 255, 200, 0.6)); }
    50% { filter: drop-shadow(0 0 30px rgba(255, 255, 200, 0.9)); }
  }
  
  @keyframes blob { 
    0% { transform: translate(0px, 0px) scale(1); } 
    33% { transform: translate(30px, -30px) scale(1.1); } 
    66% { transform: translate(-20px, 20px) scale(0.95); } 
    100% { transform: translate(0px, 0px) scale(1); } 
  }
  @keyframes slideUpFade {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-slide-up-fade { animation: slideUpFade 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }

  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }
  .animate-scale-in { animation: scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-slide-down { animation: slideDown 0.5s ease-out forwards; }

  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
  
  @keyframes pop { 
    0% { transform: scale(0.8); opacity:0; } 
    60% { transform: scale(1.1); opacity:1; } 
    100% { transform: scale(1); opacity:1; } 
  }
  .animate-pop { animation: pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

  @keyframes confettiFall { 
      0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; } 
      100% { transform: translateY(110vh) rotate(720deg); opacity: 0; } 
  }
`;

const INDO_DB = {
  1: [
    { word: "API", emoji: "🔥" }, { word: "TAS", emoji: "🎒" }, { word: "JUS", emoji: "🥤" },
    { word: "BOLA", emoji: "⚽" }, { word: "BUKU", emoji: "📚" }, { word: "MATA", emoji: "👀" },
    { word: "GIGI", emoji: "🦷" }, { word: "SUSU", emoji: "🥛" }, { word: "ROTI", emoji: "🍞" },
    { word: "IBU", emoji: "👩" },
  ],
  2: [
    { word: "MEJA", emoji: "🪑" }, { word: "BAJU", emoji: "👕" }, { word: "RUMAH", emoji: "🏠" },
    { word: "MOBIL", emoji: "🚗" }, { word: "LAMPU", emoji: "💡" }, { word: "PINTU", emoji: "🚪" },
    { word: "HUJAN", emoji: "🌧️" }, { word: "BULAN", emoji: "🌙" }, { word: "KASUR", emoji: "🛏️" },
    { word: "PAGAR", emoji: "🚧" }, { word: "POHON", emoji: "🌳" }, { word: "KUNCI", emoji: "🔑" },
  ],
  3: [
    { word: "SEKOLAH", emoji: "🏫" }, { word: "SEPATU", emoji: "👟" }, { word: "KELINCI", emoji: "🐇" },
    { word: "PESAWAT", emoji: "✈️" }, { word: "BINTANG", emoji: "⭐" }, { word: "MATAHARI", emoji: "☀️" },
    { word: "KOMPUTER", emoji: "💻" }, { word: "TELEVISI", emoji: "📺" }, { word: "JENDELA", emoji: "🪟" },
    { word: "KELUARGA", emoji: "👨‍👩‍👧" }, { word: "PELANGI", emoji: "🌈" }, { word: "BENDERA", emoji: "🇮🇩" },
    { word: "SEPEDA", emoji: "🚲" }, { word: "BONEKA", emoji: "🧸" }, { word: "GITAR", emoji: "🎸" },
  ]
};

const ENGLISH_DB = {
  1: [
    { word: "CAT", emoji: "🐱" }, { word: "DOG", emoji: "🐶" }, { word: "SUN", emoji: "☀️" },
    { word: "CAR", emoji: "🚗" }, { word: "BUS", emoji: "🚌" }, { word: "PEN", emoji: "🖊️" },
    { word: "CUP", emoji: "☕" }, { word: "HAT", emoji: "🧢" }, { word: "BAG", emoji: "🎒" },
    { word: "EGG", emoji: "🥚" },
  ],
  2: [
    { word: "BIRD", emoji: "🐦" }, { word: "FISH", emoji: "🐟" }, { word: "DUCK", emoji: "🦆" },
    { word: "LION", emoji: "🦁" }, { word: "FROG", emoji: "🐸" }, { word: "BOOK", emoji: "📚" },
    { word: "MILK", emoji: "🥛" }, { word: "CAKE", emoji: "🍰" }, { word: "TREE", emoji: "🌳" },
    { word: "STAR", emoji: "⭐" }, { word: "MOON", emoji: "🌙" }, { word: "DOOR", emoji: "🚪" },
  ],
  3: [
    { word: "APPLE", emoji: "🍎" }, { word: "TIGER", emoji: "🐯" }, { word: "ZEBRA", emoji: "🦓" },
    { word: "HOUSE", emoji: "🏠" }, { word: "MOUSE", emoji: "🐭" }, { word: "SNAKE", emoji: "🐍" },
    { word: "TRAIN", emoji: "🚂" }, { word: "PLANE", emoji: "✈️" }, { word: "TABLE", emoji: "🪑" },
    { word: "ROBOT", emoji: "🤖" }, { word: "FLOWER", emoji: "🌻" }, { word: "GRAPES", emoji: "🍇" },
    { word: "ORANGE", emoji: "🍊" }, { word: "BANANA", emoji: "🍌" }, { word: "PENCIL", emoji: "✏️" },
  ]
};

const MATH_CONFIG = { 1: { count: 10, max: 10 }, 2: { count: 10, max: 20 }, 3: { count: 10, max: 50 } };
const READING_CONFIG = { 1: { count: 10 }, 2: { count: 10 }, 3: { count: 10 } };

// --- CONFETTI ---
const Confetti = React.memo(() => {
  const particles = useMemo(() => Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100 + '%',
    animationDelay: Math.random() * 1.5 + 's',
    animationDuration: (Math.random() * 2 + 2) + 's',
    backgroundColor: ['#6366f1', '#8b5cf6', '#ec4899', '#f43f5e', '#10b981', '#fbbf24'][Math.floor(Math.random() * 6)]
  })), []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {particles.map((p) => (
        <div 
          key={p.id} 
          className="absolute top-[-20px] w-3 h-6 rounded-full opacity-90 animate-confetti-fall shadow-sm" 
          style={{ 
            left: p.left, 
            backgroundColor: p.backgroundColor, 
            animationDelay: p.animationDelay, 
            animationDuration: p.animationDuration
          }}
        />
      ))}
    </div>
  );
});

// --- BACKGROUND SKY SYSTEM ---
const seededRandom = (seed) => {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
};

const BackgroundSky = React.memo(({ totalStars }) => {
  const moonLevel = Math.min(Math.floor(totalStars / 25), 5); // 0-5
  const remainingAfterMoon = totalStars % 25;
  const cloudCount = Math.floor(remainingAfterMoon / 5); // 0-4
  const starCount = remainingAfterMoon % 5; // 0-4

  // Generate elemen visual
  const stars = useMemo(() => {
    return Array.from({ length: starCount }).map((_, i) => {
      const seed = i * 1327; // Seed unik
      return {
        id: `star-${i}`,
        left: `${seededRandom(seed) * 90 + 5}%`,
        top: `${seededRandom(seed + 1) * 90 + 5}%`,
        scale: 0.5 + seededRandom(seed + 2) * 0.7,
        animationDuration: `${2 + seededRandom(seed + 3) * 3}s`, // Twinkle duration
        delay: `${seededRandom(seed + 4) * 2}s`, // Random delay
        rotateDuration: `${50 + seededRandom(seed + 5) * 50}s` // Sangat pelan (50s-100s)
      };
    });
  }, [starCount]);

  const clouds = useMemo(() => {
    return Array.from({ length: cloudCount }).map((_, i) => {
      const seed = i * 9999;
      return {
        id: `cloud-${i}`,
        top: `${10 + seededRandom(seed) * 60}%`, // Jangan terlalu bawah
        scale: 0.8 + seededRandom(seed + 1) * 0.4,
        opacity: 0.4 + seededRandom(seed + 2) * 0.3,
        duration: `${25 + seededRandom(seed + 3) * 15}s`, // 25s - 40s
        delay: `-${seededRandom(seed + 4) * 20}s` // Mulai di posisi acak
      };
    });
  }, [cloudCount]);

  // SVG Paths untuk fase bulan
  const MoonPhase = ({ level }) => {
    if (level === 0) return null;
    
    let pathD = "";
    if (level === 1) pathD = "M50 0 C20 0 20 100 50 100 C15 100 15 0 50 0 Z"; // Sabit
    else if (level === 2) pathD = "M50 0 C50 0 50 100 50 100 C10 100 10 0 50 0 Z"; // Setengah (D style)
    else if (level === 3) pathD = "M50 0 C80 0 80 100 50 100 C10 100 10 0 50 0 Z"; // Cembung
    else if (level === 4) pathD = "M50 0 C90 0 90 100 50 100 C5 100 5 0 50 0 Z"; // Hampir Penuh
    else return <circle cx="50" cy="50" r="50" fill="currentColor" />; // Purnama

    return <path d={pathD} fill="currentColor" />;
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      
      {/* MOON LAYER */}
      {moonLevel > 0 && (
        <div 
          className="absolute top-[10%] right-[10%] text-yellow-100 dark:text-yellow-200 w-24 h-24 sm:w-32 sm:h-32 opacity-90"
          style={{ animation: 'moonGlow 4s ease-in-out infinite alternate' }}
        >
           <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_10px_rgba(255,255,200,0.5)]">
             <MoonPhase level={moonLevel} />
           </svg>
        </div>
      )}

      {/* CLOUDS LAYER */}
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="absolute text-white dark:text-slate-400"
          style={{
            top: cloud.top,
            left: '-20%', // Mulai dari luar layar kiri
            transform: `scale(${cloud.scale})`,
            opacity: cloud.opacity,
            animation: `floatCloud ${cloud.duration} linear infinite`,
            animationDelay: cloud.delay
          }}
        >
          <Cloud fill="currentColor" size={100} strokeWidth={0} />
        </div>
      ))}

      {/* STARS LAYER */}
      {stars.map((star) => (
        <div 
          key={star.id}
          className="absolute text-yellow-400 dark:text-yellow-500 drop-shadow-sm"
          style={{
            left: star.left,
            top: star.top,
            opacity: 0.8,
            animation: `twinkle ${star.animationDuration} ease-in-out infinite`,
            animationDelay: star.delay,
          }}
        >
           {/* Wrapper putar pelan */}
           <div style={{ animation: `spinSlow ${star.rotateDuration} linear infinite` }}>
             <Star fill="currentColor" size={24} strokeWidth={0} />
           </div>
        </div>
      ))}
    </div>
  );
});

// --- SOUND ENGINE ---
const useSFX = () => {
  const [enabled, setEnabled] = useState(true);
  const audioCtxRef = useRef(null);

  const initAudio = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtxRef.current = new AudioContext();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume().catch(e => console.warn("Audio resume failed", e));
    }
  }, []);

  useEffect(() => {
    initAudio();
    return () => { 
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
        audioCtxRef.current = null;
      }
    };
  }, [initAudio]);

  const playTone = useCallback((type) => {
    if (!enabled) return;
    initAudio();

    try {
      const ctx = audioCtxRef.current;
      if (!ctx) return;
      
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain); 
      gain.connect(ctx.destination);
      
      const now = ctx.currentTime;

      const sounds = {
        tap: () => { 
          osc.frequency.setValueAtTime(800, now); 
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1); 
          osc.start(now); osc.stop(now + 0.1); 
        },
        delete: () => { 
          osc.frequency.setValueAtTime(300, now); 
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1); 
          osc.start(now); osc.stop(now + 0.1); 
        },
        correct: () => { 
          osc.type = 'sine'; 
          osc.frequency.setValueAtTime(500, now); 
          osc.frequency.linearRampToValueAtTime(1000, now + 0.1); 
          gain.gain.setValueAtTime(0.3, now); 
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4); 
          osc.start(now); osc.stop(now + 0.4); 
        },
        wrong: () => { 
          osc.type = 'square'; 
          osc.frequency.setValueAtTime(150, now); 
          osc.frequency.linearRampToValueAtTime(100, now + 0.3); 
          gain.gain.setValueAtTime(0.15, now); 
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3); 
          osc.start(now); osc.stop(now + 0.3); 
        },
        win: () => { 
          const melody = [523, 659, 784, 1046];
          melody.forEach((f, i) => { 
            const o = ctx.createOscillator(); 
            const g = ctx.createGain(); 
            o.connect(g); g.connect(ctx.destination); 
            o.type = 'triangle';
            o.frequency.value = f; 
            g.gain.setValueAtTime(0.2, now + i*0.1); 
            g.gain.linearRampToValueAtTime(0.001, now + i*0.1 + 0.4); 
            o.start(now + i*0.1); o.stop(now + i*0.1 + 0.4); 
          }); 
        },
        lose: () => { 
          const melody = [400, 300, 200];
          melody.forEach((f, i) => { 
            const o = ctx.createOscillator(); 
            const g = ctx.createGain(); 
            o.connect(g); g.connect(ctx.destination); 
            o.type='sawtooth'; 
            o.frequency.value = f; 
            g.gain.setValueAtTime(0.1, now + i*0.2); 
            g.gain.linearRampToValueAtTime(0.001, now + i*0.2 + 0.3); 
            o.start(now + i*0.2); o.stop(now + i*0.2 + 0.3); 
          }); 
        }
      };

      if(sounds[type]) sounds[type]();
    } catch (e) { 
      console.error("Audio Playback Error:", e); 
    }
  }, [enabled, initAudio]);

  return { playTone, enabled, setEnabled };
};

// --- SHARED UI COMPONENTS (High Contrast & Clean Design) ---

const Card = ({ children, className = "", delay = 0 }) => (
  <div 
    className={`bg-white/90 dark:bg-slate-900/80 backdrop-blur-2xl border border-white/50 dark:border-slate-700 shadow-2xl rounded-[2.5rem] overflow-hidden ${className}`}
    style={{ animationDelay: `${delay}ms` }}
  >
    {children}
  </div>
);

const Button = React.memo(({ children, onClick, variant = 'primary', className = '', disabled = false, style = {}, 'aria-label': ariaLabel }) => {
  const base = "relative overflow-hidden rounded-2xl font-black tracking-wide transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 select-none";
  
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/30 border-b-4 border-indigo-800 active:border-b-0 active:translate-y-1",
    secondary: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 shadow-sm active:border-transparent",
    danger: "bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-300 hover:bg-rose-200 dark:hover:bg-rose-900/50 border border-rose-200 dark:border-rose-800",
    action: "bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/30 border-b-4 border-emerald-700 active:border-b-0 active:translate-y-1" 
  };
  return (
    <button onClick={onClick} disabled={disabled} style={style} className={`${base} ${variants[variant]} ${className}`} aria-label={ariaLabel}>
      {children}
    </button>
  );
});

const GridButton = React.memo(({ onClick, children, variant = "default", disabled = false, className = "", style={}, vanishOnDisabled = true, 'aria-label': ariaLabel }) => {
  const styles = variant === "action" 
    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-200/50 dark:shadow-none hover:bg-emerald-400 border-b-4 border-emerald-700 active:border-b-0 active:translate-y-1" 
    : variant === "danger"
    ? "bg-rose-500 text-white shadow-lg shadow-rose-200/50 dark:shadow-none hover:bg-rose-400 border-b-4 border-rose-700 active:border-b-0 active:translate-y-1"
    : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-sm hover:bg-indigo-50 dark:hover:bg-slate-700 border-2 border-slate-200 dark:border-slate-700 border-b-4 active:border-b-2 active:translate-y-0.5 active:bg-indigo-100 dark:active:bg-slate-700";
  
  const disabledStyles = vanishOnDisabled 
    ? 'opacity-0 scale-50 pointer-events-none' 
    : 'opacity-40 cursor-not-allowed grayscale';

  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      style={style}
      className={`h-20 w-full rounded-3xl text-3xl font-black transition-all duration-150 flex items-center justify-center ${styles} ${disabled ? disabledStyles : ''} ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
});

const ABCLogo = React.memo(() => (
  <div className="flex flex-col items-center select-none cursor-default hover:scale-105 transition-transform duration-300">
    <div className="flex gap-3 mb-2">
      <div className="w-14 h-14 rounded-2xl bg-rose-500 text-white flex items-center justify-center text-3xl font-black shadow-lg shadow-rose-500/30 border-b-[6px] border-rose-700 transform -rotate-6 z-10">A</div>
      <div className="w-14 h-14 rounded-2xl bg-indigo-500 text-white flex items-center justify-center text-3xl font-black shadow-lg shadow-indigo-500/30 border-b-[6px] border-indigo-700 transform -translate-y-2 z-20">B</div>
      <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-3xl font-black shadow-lg shadow-emerald-500/30 border-b-[6px] border-emerald-700 transform rotate-6 z-10">C</div>
    </div>
    <span className="text-[11px] font-black text-slate-500 dark:text-slate-400 tracking-[0.3em] uppercase bg-white/50 dark:bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">Belajar Cerdas</span>
  </div>
));

const LevelMenu = ({ title, levels, onSelect, onBack, colorTheme = "indigo" }) => (
  <Card className="w-full max-w-md p-8 animate-slide-up-fade">
    <h2 className="text-3xl font-black text-center mb-8 text-slate-800 dark:text-white tracking-tight leading-tight">{title}</h2>
    <div className="space-y-4">
      {levels.map((l, idx) => (
        <button 
          key={l.id} 
          onClick={() => onSelect(l.id)} 
          style={{ animationDelay: `${idx * 100}ms` }}
          className={`w-full p-5 rounded-[20px] bg-slate-50 dark:bg-slate-800/50 hover:bg-${colorTheme}-50 dark:hover:bg-${colorTheme}-900/20 border-2 border-slate-200 dark:border-slate-700 hover:border-${colorTheme}-300 dark:hover:border-${colorTheme}-500/50 transition-all group flex items-center justify-between opacity-0 animate-slide-up-fade hover:translate-x-1 active:scale-[0.99]`}
        >
          <div className="flex items-center gap-5">
            <div className={`w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center font-black text-${colorTheme}-600 dark:text-${colorTheme}-400 text-2xl group-hover:scale-110 transition-transform duration-300`}>{l.id}</div>
            <div className="text-left">
              <div className="font-bold text-slate-700 dark:text-slate-200 text-xl tracking-tight flex gap-1">
                {Array.from({ length: l.id }).map((_, i) => (
                  <Star key={i} size={24} fill="#fbbf24" className="text-amber-400" />
                ))}
              </div>
              <div className="text-sm text-slate-500 font-semibold">{l.desc}</div>
            </div>
          </div>
          <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-white dark:bg-slate-800 text-slate-300 group-hover:text-${colorTheme}-500 transition-colors`}>
             <ChevronRight size={28} strokeWidth={3} />
          </div>
        </button>
      ))}
    </div>
    <Button 
      variant="secondary" 
      onClick={onBack} 
      className="w-full mt-10 py-5 text-lg opacity-0 animate-slide-up-fade flex items-center justify-center gap-2" 
      style={{ animationDelay: '400ms' }}
    >
      <ChevronLeft size={28} strokeWidth={3} />
      <span>Kembali</span>
    </Button>
  </Card>
);

const ResultCard = ({ score, total, isPass, onRetry, onHome }) => (
  <Card className="w-full max-w-md p-8 text-center animate-scale-in relative overflow-hidden border-t-8 border-t-white/40">
    {isPass && <Confetti />}
    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-full flex items-center justify-center mb-6 shadow-inner ring-8 ring-white dark:ring-slate-800 z-10 relative animate-bounce-slow">
       {/* Mengganti icon dengan emoji sesuai nilai */}
      <span className="text-6xl filter drop-shadow-sm select-none">
        {isPass ? "🏆" : "🤔"}
      </span>
    </div>
    <h2 className="text-6xl font-black text-slate-800 dark:text-white mb-2 tracking-tighter z-10 relative">{Math.round((score / total) * 100)}%</h2>
    <p className="text-slate-600 dark:text-slate-400 mb-10 font-bold text-lg z-10 relative px-4 leading-relaxed">{isPass ? "Luar Biasa! Kamu Hebat Sekali!" : "Jangan menyerah, coba lagi ya!"}</p>
    
    <div className="flex gap-4 mb-10 z-10 relative px-2">
      <div className="flex-1 bg-emerald-50 dark:bg-emerald-900/20 p-5 rounded-3xl border-2 border-emerald-100 dark:border-emerald-800/50 opacity-0 animate-slide-up-fade" style={{ animationDelay: '200ms' }}>
        <div className="text-4xl font-black text-emerald-600 dark:text-emerald-400 mb-1">{score}</div>
        <div className="text-xs font-bold text-emerald-700/60 dark:text-emerald-300/60 uppercase tracking-widest">Benar</div>
      </div>
      <div className="flex-1 bg-rose-50 dark:bg-rose-900/20 p-5 rounded-3xl border-2 border-rose-100 dark:border-rose-800/50 opacity-0 animate-slide-up-fade" style={{ animationDelay: '300ms' }}>
        <div className="text-4xl font-black text-rose-600 dark:text-rose-400 mb-1">{total - score}</div>
        <div className="text-xs font-bold text-rose-700/60 dark:text-rose-300/60 uppercase tracking-widest">Salah</div>
      </div>
    </div>
    
    <div className="space-y-4 z-10 relative">
      <Button onClick={onRetry} variant="primary" className="w-full py-5 text-xl shadow-xl shadow-indigo-500/20 opacity-0 animate-slide-up-fade" style={{ animationDelay: '400ms' }}>Main Lagi Yuk!</Button>
      <Button onClick={onHome} variant="secondary" className="w-full py-5 text-lg border-transparent bg-slate-100 dark:bg-slate-800 opacity-0 animate-slide-up-fade" style={{ animationDelay: '500ms' }}>Kembali ke Menu</Button>
    </div>
  </Card>
);

// --- MODULE: MATH ---
function MathQuizModule({ playTone, onBack, onEarnStar }) {
  const [phase, setPhase] = useState('menu'); 
  const [level, setLevel] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState(null);

  const startQuiz = useCallback((lvl) => {
    const cfg = MATH_CONFIG[lvl];
    const newQs = [];
    const seen = new Set();
    
    let attempts = 0;
    while (newQs.length < cfg.count && attempts < 200) { 
      attempts++;
      const isAdd = Math.random() > 0.5;
      let n1, n2, op, ans;
      
      if (isAdd) {
        n1 = Math.floor(Math.random() * (cfg.max + 1));
        n2 = Math.floor(Math.random() * (cfg.max - n1 + 1));
        op = '+'; ans = n1 + n2;
      } else {
        n1 = Math.floor(Math.random() * (cfg.max + 1));
        n2 = Math.floor(Math.random() * (n1 + 1));
        op = '-'; ans = n1 - n2;
      }
      
      const signature = `${n1}${op}${n2}`;
      if (!seen.has(signature)) {
         seen.add(signature);
         newQs.push({ n1, n2, op, ans });
      }
    }
    
    while (newQs.length < cfg.count) newQs.push({ n1: 1, n2: 1, op: '+', ans: 2 });
    
    setLevel(lvl); setQuestions(newQs); setCurrentIndex(0); setScore(0); setInput(''); setPhase('playing'); playTone('tap');
  }, [playTone]);

  const handleNumClick = useCallback((n) => { 
    if (!feedback && input.length < 3) { playTone('tap'); setInput(prev => prev + n); } 
  }, [feedback, input.length, playTone]);

  const checkAnswer = useCallback(() => {
    if (input === '') return;
    const q = questions[currentIndex];
    const isCorrect = parseInt(input) === q.ans;
    setFeedback(isCorrect ? 'correct' : 'wrong');
    playTone(isCorrect ? 'correct' : 'wrong');
    
    // Hitung score sementara untuk logik
    const currentScore = score + (isCorrect ? 1 : 0);
    if (isCorrect) setScore(s => s + 1);

    setTimeout(() => {
      setFeedback(null); setInput('');
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(c => c + 1);
      } else {
        setPhase('result');
        // Final Score Calculation
        const percentage = Math.round((currentScore / questions.length) * 100);
        
        if (percentage >= 80) {
          playTone('win');
          onEarnStar(level); // Add stars if pass
        } else {
          playTone('lose');
        }
      }
    }, 1000);
  }, [input, questions, currentIndex, playTone, score, level, onEarnStar]);

  if (phase === 'menu') return (
    <LevelMenu 
      title="Pilih Level Matematika"
      levels={[1, 2, 3].map(l => ({ id: l, desc: `Angka 0 - ${MATH_CONFIG[l].max}` }))}
      onSelect={startQuiz}
      onBack={onBack}
      colorTheme="indigo"
    />
  );

  if (phase === 'result') return (
    <ResultCard 
      score={score} 
      total={questions.length} 
      isPass={Math.round((score / questions.length) * 100) >= 80}
      onRetry={() => setPhase('menu')}
      onHome={onBack}
    />
  );

  const q = questions[currentIndex];
  return (
    <div className="w-full max-w-md space-y-6">
      <div className="flex justify-between items-center px-2 animate-slide-down">
        <button onClick={onBack} className="p-2 -ml-2 rounded-xl text-slate-400 hover:bg-white/50 dark:hover:bg-slate-800 transition-colors"><ChevronRight className="rotate-180" size={24}/></button>
        <div className="flex gap-3">
            <div className="flex items-center gap-2 text-xs font-black tracking-wider text-amber-600 dark:text-amber-400 bg-amber-100/80 dark:bg-amber-900/40 px-3 py-1.5 rounded-full border border-amber-200 dark:border-amber-800/50">
            <Star size={14} fill="currentColor"/> LEVEL {level}
            </div>
            <div className="flex items-center gap-2 text-xs font-black tracking-wider text-slate-500 dark:text-slate-400 bg-white/60 dark:bg-slate-800/60 px-3 py-1.5 rounded-full border border-white/40 dark:border-slate-700">
            {currentIndex + 1} / {questions.length}
            </div>
        </div>
      </div>

      <div key={currentIndex} className="animate-scale-in">
        <Card className="p-8 relative min-h-[260px] flex items-center justify-center shadow-2xl shadow-indigo-500/10">
          {feedback && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/95 dark:bg-slate-900/95 backdrop-blur-md animate-fade-in">
              {feedback === 'correct' 
                ? <div className="flex flex-col items-center text-emerald-500 animate-pop"><CheckCircle2 size={80} strokeWidth={2.5} className="mb-4"/><span className="font-black text-3xl tracking-tight">BENAR!</span></div>
                : <div className="flex flex-col items-center text-rose-500 animate-pop"><XCircle size={80} strokeWidth={2.5} className="mb-4"/><span className="font-bold text-lg text-slate-500">Jawabannya:</span><span className="font-black text-5xl mt-2">{q.ans}</span></div>
              }
            </div>
          )}
          <div className="flex items-center justify-center gap-4 text-7xl font-black text-slate-800 dark:text-white tracking-tight">
            <span>{q.n1}</span>
            <span className="text-indigo-500">{q.op}</span>
            <span>{q.n2}</span>
            <span className="text-slate-300 dark:text-slate-600">=</span>
            <span className={`min-w-[90px] text-center border-b-[6px] transition-all duration-300 ${input ? 'text-indigo-600 border-indigo-500 dark:text-indigo-400 scale-110' : 'text-slate-300 border-slate-200 dark:border-slate-700'}`}>
              {input || '?'}
            </span>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-3 gap-3 px-2 pb-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n, i) => (
          <GridButton 
            key={n} 
            onClick={() => handleNumClick(n)}
            className="opacity-0 animate-pop"
            style={{ animationDelay: `${i * 40}ms`, animationFillMode: 'both' }}
          >
            {n}
          </GridButton>
        ))}
        <GridButton 
          onClick={() => { playTone('delete'); setInput(''); }} 
          variant="danger" 
          className="opacity-0 animate-pop"
          style={{ animationDelay: '400ms', animationFillMode: 'both' }}
          vanishOnDisabled={false}
          aria-label="Hapus"
        >
          <RefreshCcw size={32} strokeWidth={3} />
        </GridButton>
        <GridButton 
          onClick={() => handleNumClick(0)}
          className="opacity-0 animate-pop"
          style={{ animationDelay: '440ms', animationFillMode: 'both' }}
        >
          0
        </GridButton>
        <GridButton 
          onClick={checkAnswer} 
          variant="action" 
          className="opacity-0 animate-pop"
          style={{ animationDelay: '480ms', animationFillMode: 'both' }}
          vanishOnDisabled={false}
          aria-label="Cek Jawaban"
        >
          <Check size={32} strokeWidth={3} />
        </GridButton>
      </div>
    </div>
  );
}

// --- MODULE: READING ---
function ReadingQuizModule({ playTone, onBack, mode, onEarnStar }) {
  const [phase, setPhase] = useState('menu');
  const [level, setLevel] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [curr, setCurr] = useState(0);
  const [score, setScore] = useState(0);
  const [slots, setSlots] = useState([]);
  const [pool, setPool] = useState([]);
  const [feedback, setFeedback] = useState(null);

  const DB = useMemo(() => mode === 'en' ? ENGLISH_DB : INDO_DB, [mode]);

  const loadQuestion = useCallback((data) => {
    const chars = data.word.split('');
    setSlots(Array(chars.length).fill(null));
    setPool(chars.map((c, i) => ({ id: i, char: c, used: false })).sort(() => Math.random() - 0.5));
    setFeedback(null);
  }, []);

  const startQuiz = useCallback((lvl) => {
    let src = [...DB[lvl]];
    src.sort(() => Math.random() - 0.5);
    const count = Math.min(READING_CONFIG[lvl].count, src.length);
    const shuffled = src.slice(0, count);
    setLevel(lvl); setQuestions(shuffled); setCurr(0); setScore(0); setPhase('playing'); playTone('tap'); loadQuestion(shuffled[0]);
  }, [DB, playTone, loadQuestion]);

  const handleCharClick = useCallback((item) => {
    if (feedback) return;
    const emptyIdx = slots.indexOf(null);
    if (emptyIdx === -1) return;
    playTone('tap');
    const newSlots = [...slots]; newSlots[emptyIdx] = item; setSlots(newSlots);
    setPool(pool.map(p => p.id === item.id ? { ...p, used: true } : p));
  }, [feedback, slots, pool, playTone]);

  const handleReset = useCallback(() => {
     playTone('delete'); 
     setSlots(Array(questions[curr].word.length).fill(null)); 
     setPool(pool.map(p => ({...p, used:false}))); 
  }, [playTone, questions, curr, pool]);

  const checkAnswer = useCallback(() => {
    if (slots.includes(null)) return; 
    const userWord = slots.map(s => s?.char).join('');
    const correctWord = questions[curr].word;
    const isCorrect = userWord === correctWord;

    setFeedback(isCorrect ? 'correct' : 'wrong'); 
    playTone(isCorrect ? 'correct' : 'wrong');

    const currentScore = score + (isCorrect ? 1 : 0);
    if(isCorrect) setScore(s => s+1);

    setTimeout(() => {
        if (curr < questions.length - 1) {
          const nextQ = questions[curr + 1];
          setCurr(c => c + 1);
          const chars = nextQ.word.split('');
          setSlots(Array(chars.length).fill(null));
          setPool(chars.map((c, i) => ({ id: i, char: c, used: false })).sort(() => Math.random() - 0.5));
          setFeedback(null);
        } else {
          setPhase('result');
          const percentage = Math.round((currentScore / questions.length) * 100);
          
          if (percentage >= 80) {
             playTone('win');
             onEarnStar(level); // Add stars if pass
          } else {
             playTone('lose');
          }
        }
      }, 1500);
  }, [slots, questions, curr, score, playTone, level, onEarnStar]);

  if (phase === 'menu') return (
    <LevelMenu 
      title={mode === 'en' ? "Select Level" : "Pilih Level Membaca"}
      levels={[1, 2, 3].map(l => ({ id: l, desc: mode === 'en' ? `${READING_CONFIG[l].count} Words` : `${READING_CONFIG[l].count} Kata` }))}
      onSelect={startQuiz}
      onBack={onBack}
      colorTheme={mode === 'en' ? 'violet' : 'emerald'}
    />
  );

  if (phase === 'result') return (
    <ResultCard 
      score={score} 
      total={questions.length} 
      isPass={Math.round((score / questions.length) * 100) >= 80}
      onRetry={() => setPhase('menu')}
      onHome={onBack}
    />
  );

  const q = questions[curr];
  return (
    <div className="w-full max-w-md space-y-6">
      <div className="flex justify-between items-center px-2 animate-slide-down">
         <button onClick={onBack} className="p-2 -ml-2 rounded-xl text-slate-400 hover:bg-white/50 dark:hover:bg-slate-800 transition-colors"><ChevronRight className="rotate-180" size={24}/></button>
         <div className="flex gap-3">
             <div className="flex items-center gap-2 text-xs font-black tracking-wider text-amber-600 dark:text-amber-400 bg-amber-100/80 dark:bg-amber-900/40 px-3 py-1.5 rounded-full border border-amber-200 dark:border-amber-800/50">
             <Star size={14} fill="currentColor"/> LEVEL {level}
             </div>
             <div className="flex items-center gap-2 text-xs font-black tracking-wider text-slate-500 dark:text-slate-400 bg-white/60 dark:bg-slate-800/60 px-3 py-1.5 rounded-full border border-white/40 dark:border-slate-700">
             {curr + 1} / {questions.length}
             </div>
         </div>
      </div>

      <div key={curr} className="animate-scale-in">
        <Card className="p-8 relative min-h-[300px] flex flex-col items-center justify-center gap-8 shadow-2xl shadow-emerald-500/10">
          {feedback && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-3xl animate-fade-in">
              {feedback === 'correct' 
                ? <div className="flex flex-col items-center text-emerald-500 animate-pop"><CheckCircle2 size={80} strokeWidth={2.5} className="mb-4"/><span className="font-black text-3xl tracking-tight">BENAR!</span></div>
                : <div className="flex flex-col items-center text-rose-500 animate-pop"><XCircle size={80} strokeWidth={2.5} className="mb-4"/><span className="font-bold text-lg text-slate-500">Kata yang benar:</span><span className="font-black text-4xl mt-2 tracking-widest uppercase">{q.word}</span></div>
              }
            </div>
          )}
          <div className="text-9xl animate-bounce-slow filter drop-shadow-2xl transform hover:scale-110 transition-transform duration-500 cursor-pointer">{q.emoji}</div>
          <div className="flex gap-2 flex-wrap justify-center">
            {slots.map((s, i) => (
              <div key={i} className={`w-14 h-16 rounded-2xl flex items-center justify-center text-3xl font-black border-b-[5px] transition-all duration-300 shadow-sm ${s ? 'bg-indigo-100 border-indigo-300 text-indigo-700 dark:bg-indigo-900/40 dark:border-indigo-800 dark:text-indigo-300 animate-pop transform -translate-y-1' : 'bg-slate-50 border-slate-200 dark:bg-slate-800 dark:border-slate-700'}`}>
                {s?.char}
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-5 gap-2 px-2">
        {pool.map((l, i) => (
          <GridButton 
            key={l.id} 
            disabled={l.used || feedback}
            onClick={() => handleCharClick(l)}
            className="aspect-square text-2xl h-auto rounded-2xl opacity-0 animate-pop"
            style={{ animationDelay: `${i * 30}ms`, animationFillMode: 'both' }}
            vanishOnDisabled={true}
          >
            {l.char}
          </GridButton>
        ))}
      </div>
       <div className="flex gap-3 mt-4 px-2 pb-4 opacity-0 animate-slide-up-fade" style={{ animationDelay: `${pool.length * 30 + 100}ms` }}>
          <GridButton onClick={handleReset} variant="danger" className="flex-1" vanishOnDisabled={false} aria-label="Ulang">
            <RefreshCcw size={32} strokeWidth={3}/>
          </GridButton>
          <GridButton onClick={checkAnswer} variant="action" className="flex-1" vanishOnDisabled={false} aria-label="Cek">
            <Check size={32} strokeWidth={3} />
          </GridButton>
       </div>
    </div>
  );
}

// --- APP ROOT ---
export default function App() {
  const [view, setView] = useState('home');
  const [isDark, setIsDark] = useState(false);
  const [isResetting, setIsResetting] = useState(false); // State untuk animasi reset
  const [totalStars, setTotalStars] = useState(() => {
    const saved = localStorage.getItem('abc_totalStars');
    return saved ? parseInt(saved, 10) : 0;
  });
  const { playTone, enabled, setEnabled } = useSFX();

  useEffect(() => {
    localStorage.setItem('abc_totalStars', totalStars.toString());
  }, [totalStars]);

  const addStars = useCallback((level) => {
    setTotalStars(prev => prev + level);
  }, []);

  const resetProgress = useCallback(() => {
    if (confirm("Reset semua kemajuan bintang dan latar belakang?")) {
      setIsResetting(true); // Mulai animasi
      setTotalStars(0);
      playTone('delete');
      setTimeout(() => setIsResetting(false), 1000); // Hentikan animasi setelah 1s
    }
  }, [playTone]);

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans selection:bg-indigo-200 dark:selection:bg-indigo-900/50 flex flex-col items-center overflow-x-hidden overflow-y-scroll transition-colors duration-500 relative">
        
        {/* Style Injection */}
        <style dangerouslySetInnerHTML={{__html: GLOBAL_STYLES}} />

        {/* Improved Background */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-60 dark:opacity-30">
           <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-indigo-200 dark:bg-indigo-900 rounded-full blur-[100px] animate-blob"/>
           <div className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] bg-purple-200 dark:bg-purple-900 rounded-full blur-[100px] animate-blob animation-delay-2000"/>
           <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-sky-200 dark:bg-sky-900 rounded-full blur-[100px] animate-blob animation-delay-4000"/>
        </div>

        {/* Bintang Latar Belakang */}
        <BackgroundSky totalStars={totalStars} />

        {/* Header */}
        <header className="w-full max-w-xl flex flex-col items-center p-6 relative z-10 animate-slide-down gap-6">
          {/* Home Button (Absolute Left) */}
          {view !== 'home' && (
             <div className="absolute left-6 top-6 z-20">
              <button onClick={() => { setView('home'); playTone('tap'); }} className="p-3 rounded-2xl bg-white/70 dark:bg-slate-800/70 shadow-sm hover:scale-105 text-indigo-500 dark:text-indigo-400 backdrop-blur-md transition-all duration-300 border border-white/50 dark:border-slate-700" aria-label="Home">
                <Home size={24} strokeWidth={2.5}/>
              </button>
             </div>
          )}
          
          {/* Logo Center */}
          <div className="flex-1 flex justify-center z-10 mt-2">
            <ABCLogo />
          </div>
          
          {/* Controls Below Logo */}
          <div className="flex gap-4 justify-center z-20">
             {/* Reset Progress - Merah/Rose */}
            <button 
              onClick={resetProgress} 
              className={`p-3 rounded-2xl bg-rose-100/80 dark:bg-rose-900/30 shadow-sm hover:shadow-md text-rose-600 dark:text-rose-400 transition-all hover:scale-105 backdrop-blur-md border border-rose-200 dark:border-rose-800 ${isResetting ? 'pointer-events-none' : ''}`} 
              aria-label="Reset Progress"
            >
               <RotateCcw size={24} strokeWidth={2.5} className={isResetting ? 'animate-spin-reverse' : ''} />
            </button>

            {/* Theme Toggle - Kuning/Amber (Sun) atau Ungu/Indigo (Moon) */}
            <button onClick={() => setIsDark(!isDark)} className={`p-3 rounded-2xl shadow-sm hover:shadow-md transition-all hover:scale-105 backdrop-blur-md border ${isDark ? 'bg-indigo-900/30 border-indigo-800 text-indigo-400' : 'bg-amber-100/80 border-amber-200 text-amber-600'}`} aria-label="Toggle Theme">
              {isDark ? <Moon size={24} strokeWidth={2.5}/> : <Sun size={24} strokeWidth={2.5}/>}
            </button>

            {/* Sound Toggle - Biru/Sky */}
            <button onClick={() => setEnabled(!enabled)} className={`p-3 rounded-2xl shadow-sm hover:shadow-md transition-all hover:scale-105 backdrop-blur-md border ${enabled ? 'bg-sky-100/80 border-sky-200 text-sky-600 dark:bg-sky-900/30 dark:border-sky-800 dark:text-sky-400' : 'bg-slate-100/80 border-slate-200 text-slate-400 dark:bg-slate-800/50 dark:border-slate-700'}`} aria-label="Toggle Sound">
              {enabled ? <Volume2 size={24} strokeWidth={2.5}/> : <VolumeX size={24} strokeWidth={2.5}/>}
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="w-full flex-1 flex flex-col items-center justify-start p-4 relative z-10 max-w-xl mx-auto">
          {view === 'home' && (
            <div className="w-full space-y-10 mt-6">
              <div className="text-center space-y-3 animate-scale-in">
                <div className="inline-flex p-6 rounded-[2.5rem] bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl shadow-indigo-500/30 text-white mb-2 transform hover:scale-110 transition-transform duration-500 border-4 border-indigo-300/30">
                  <Sparkles size={48} fill="currentColor" className="opacity-90"/>
                </div>
                <div>
                  <h2 className="text-4xl font-black text-slate-800 dark:text-white tracking-tight">Ayo Main!</h2>
                  <p className="text-slate-600 dark:text-slate-400 font-bold text-lg tracking-wide mt-1">Pilih permainanmu hari ini</p>
                </div>
              </div>

              <div className="grid gap-5">
                {[
                  { id: 'math', title: 'Matematika', sub: 'Berhitung Cepat', icon: <Calculator size={32} strokeWidth={2.5}/>, color: 'from-blue-500 to-cyan-500', shadow: 'shadow-blue-500/20' },
                  { id: 'reading_id', title: 'Membaca', sub: 'Bahasa Indonesia', icon: <BookOpen size={32} strokeWidth={2.5}/>, color: 'from-emerald-500 to-teal-500', shadow: 'shadow-emerald-500/20' },
                  { id: 'reading_en', title: 'Reading', sub: 'Learn English', icon: <Globe size={32} strokeWidth={2.5}/>, color: 'from-violet-500 to-fuchsia-500', shadow: 'shadow-violet-500/20' }
                ].map((item, index) => (
                  <button 
                    key={item.id}
                    onClick={() => { setView(item.id); playTone('tap'); }}
                    style={{ animationDelay: `${index * 150}ms` }}
                    className="group relative w-full rounded-[2.5rem] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 opacity-0 animate-slide-up-fade"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-[2.5rem] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}/>
                    <div className={`relative bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 p-6 rounded-[2.5rem] flex items-center gap-6 shadow-lg ${item.shadow} hover:shadow-xl transition-all`}>
                      <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-inner border-t border-white/20 group-hover:rotate-6 transition-transform duration-300`}>
                        {item.icon}
                      </div>
                      <div className="text-left flex-1">
                        <h3 className="text-2xl font-black text-slate-800 dark:text-white tracking-tight">{item.title}</h3>
                        <p className="text-slate-500 dark:text-slate-500 font-bold text-sm tracking-wide">{item.sub}</p>
                      </div>
                      <div className="w-14 h-14 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-300 group-hover:bg-slate-100 dark:group-hover:bg-slate-700 group-hover:text-slate-600 transition-colors group-hover:translate-x-2 duration-300">
                        <ChevronRight size={28} strokeWidth={3}/>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {view === 'math' && <MathQuizModule playTone={playTone} onBack={() => setView('home')} onEarnStar={addStars} />}
          {view === 'reading_id' && <ReadingQuizModule playTone={playTone} onBack={() => setView('home')} mode="id" onEarnStar={addStars} />}
          {view === 'reading_en' && <ReadingQuizModule playTone={playTone} onBack={() => setView('home')} mode="en" onEarnStar={addStars} />}
        </main>
      </div>
    </div>
  );
}