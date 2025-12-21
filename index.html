import React, { useState, useEffect } from 'react';
import { 
  Volume2, VolumeX, ArrowRight, Home, 
  BookOpen, Calculator, RotateCcw, CheckCircle2, 
  Sparkles, XCircle, CornerDownLeft, X, Globe
} from 'lucide-react';

// --- DATABASE INDONESIA ---
const INDO_DB = {
  1: [ // 3-4 Huruf
    { word: "API", emoji: "🔥", color: "bg-orange-100 text-orange-600" },
    { word: "TAS", emoji: "🎒", color: "bg-blue-100 text-blue-600" },
    { word: "JUS", emoji: "🥤", color: "bg-purple-100 text-purple-600" },
    { word: "BOLA", emoji: "⚽", color: "bg-emerald-100 text-emerald-600" },
    { word: "BUKU", emoji: "📚", color: "bg-red-100 text-red-600" },
    { word: "MATA", emoji: "👀", color: "bg-amber-100 text-amber-700" },
    { word: "GIGI", emoji: "🦷", color: "bg-cyan-100 text-cyan-600" },
    { word: "SUSU", emoji: "🥛", color: "bg-slate-100 text-slate-600" },
    { word: "ROTI", emoji: "🍞", color: "bg-yellow-100 text-yellow-700" },
    { word: "IBU", emoji: "👩", color: "bg-pink-100 text-pink-600" },
  ],
  2: [ // 4-5 Huruf
    { word: "MEJA", emoji: "🪑", color: "bg-orange-100 text-orange-600" },
    { word: "BAJU", emoji: "👕", color: "bg-blue-100 text-blue-600" },
    { word: "RUMAH", emoji: "🏠", color: "bg-green-100 text-green-600" },
    { word: "MOBIL", emoji: "🚗", color: "bg-red-100 text-red-600" },
    { word: "LAMPU", emoji: "💡", color: "bg-yellow-100 text-yellow-600" },
    { word: "PINTU", emoji: "🚪", color: "bg-stone-100 text-stone-600" },
    { word: "HUJAN", emoji: "🌧️", color: "bg-sky-100 text-sky-600" },
    { word: "BULAN", emoji: "🌙", color: "bg-indigo-100 text-indigo-200" },
  ],
  3: [ // 5-8 Huruf
    { word: "SEKOLAH", emoji: "🏫", color: "bg-orange-100 text-orange-600" },
    { word: "SEPATU", emoji: "👟", color: "bg-purple-100 text-purple-600" },
    { word: "KELINCI", emoji: "🐇", color: "bg-gray-100 text-gray-600" },
    { word: "PESAWAT", emoji: "✈️", color: "bg-blue-100 text-blue-500" },
    { word: "BINTANG", emoji: "⭐", color: "bg-yellow-100 text-yellow-500" },
    { word: "MATAHARI", emoji: "☀️", color: "bg-orange-100 text-orange-500" },
    { word: "KOMPUTER", emoji: "💻", color: "bg-slate-100 text-slate-700" },
  ]
};

// --- DATABASE ENGLISH (BARU) ---
const ENGLISH_DB = {
  1: [ // 3-4 Huruf (Easy)
    { word: "CAT", emoji: "🐱", color: "bg-orange-100 text-orange-600" },
    { word: "DOG", emoji: "🐶", color: "bg-stone-100 text-stone-600" },
    { word: "SUN", emoji: "☀️", color: "bg-yellow-100 text-yellow-600" },
    { word: "CAR", emoji: "🚗", color: "bg-red-100 text-red-600" },
    { word: "BUS", emoji: "🚌", color: "bg-blue-100 text-blue-600" },
    { word: "PEN", emoji: "🖊️", color: "bg-blue-100 text-blue-800" },
    { word: "CUP", emoji: "☕", color: "bg-stone-100 text-stone-700" },
    { word: "HAT", emoji: "🧢", color: "bg-blue-100 text-blue-500" },
    { word: "BAG", emoji: "🎒", color: "bg-red-100 text-red-600" },
    { word: "EGG", emoji: "🥚", color: "bg-yellow-100 text-yellow-700" },
    { word: "ANT", emoji: "🐜", color: "bg-stone-100 text-stone-800" },
    { word: "BAT", emoji: "🦇", color: "bg-stone-100 text-stone-900" },
    { word: "BOX", emoji: "📦", color: "bg-orange-100 text-orange-700" },
    { word: "BOY", emoji: "👦", color: "bg-blue-100 text-blue-500" },
    { word: "COW", emoji: "🐄", color: "bg-stone-100 text-stone-600" },
    { word: "FOX", emoji: "🦊", color: "bg-orange-100 text-orange-600" },
    { word: "MAP", emoji: "🗺️", color: "bg-green-100 text-green-600" },
    { word: "OWL", emoji: "🦉", color: "bg-stone-100 text-stone-700" },
    { word: "PIG", emoji: "🐷", color: "bg-pink-100 text-pink-500" },
    { word: "RAT", emoji: "🐀", color: "bg-stone-100 text-stone-500" },
  ],
  2: [ // 4-5 Huruf (Medium)
    { word: "BIRD", emoji: "🐦", color: "bg-sky-100 text-sky-600" },
    { word: "FISH", emoji: "🐟", color: "bg-blue-100 text-blue-500" },
    { word: "DUCK", emoji: "🦆", color: "bg-yellow-100 text-yellow-600" },
    { word: "LION", emoji: "🦁", color: "bg-orange-100 text-orange-600" },
    { word: "FROG", emoji: "🐸", color: "bg-green-100 text-green-600" },
    { word: "BOOK", emoji: "📚", color: "bg-red-100 text-red-600" },
    { word: "MILK", emoji: "🥛", color: "bg-slate-100 text-slate-600" },
    { word: "CAKE", emoji: "🍰", color: "bg-pink-100 text-pink-500" },
    { word: "TREE", emoji: "🌳", color: "bg-emerald-100 text-emerald-600" },
    { word: "STAR", emoji: "⭐", color: "bg-yellow-100 text-yellow-500" },
    { word: "BALL", emoji: "⚽", color: "bg-stone-100 text-stone-800" },
    { word: "BEAR", emoji: "🐻", color: "bg-stone-100 text-stone-600" },
    { word: "DOLL", emoji: "🧸", color: "bg-pink-100 text-pink-600" },
    { word: "DOOR", emoji: "🚪", color: "bg-stone-100 text-stone-700" },
    { word: "KITE", emoji: "🪁", color: "bg-red-100 text-red-500" },
    { word: "MOON", emoji: "🌙", color: "bg-indigo-100 text-indigo-200" },
    { word: "NOSE", emoji: "👃", color: "bg-orange-100 text-orange-400" },
    { word: "RAIN", emoji: "🌧️", color: "bg-sky-100 text-sky-600" },
    { word: "SHIP", emoji: "🚢", color: "bg-blue-100 text-blue-700" },
    { word: "SHOE", emoji: "👟", color: "bg-purple-100 text-purple-600" },
  ],
  3: [ // 5-8 Huruf (Hard)
    { word: "APPLE", emoji: "🍎", color: "bg-red-100 text-red-600" },
    { word: "TIGER", emoji: "🐯", color: "bg-orange-100 text-orange-600" },
    { word: "ZEBRA", emoji: "🦓", color: "bg-stone-100 text-stone-800" },
    { word: "HOUSE", emoji: "🏠", color: "bg-green-100 text-green-600" },
    { word: "MOUSE", emoji: "🐭", color: "bg-stone-100 text-stone-500" },
    { word: "SNAKE", emoji: "🐍", color: "bg-green-100 text-green-700" },
    { word: "TRAIN", emoji: "🚂", color: "bg-red-100 text-red-700" },
    { word: "PLANE", emoji: "✈️", color: "bg-blue-100 text-blue-500" },
    { word: "TABLE", emoji: "🪑", color: "bg-orange-100 text-orange-700" },
    { word: "CHAIR", emoji: "🪑", color: "bg-stone-100 text-stone-600" },
    { word: "PANDA", emoji: "🐼", color: "bg-stone-100 text-stone-800" },
    { word: "PIZZA", emoji: "🍕", color: "bg-orange-100 text-orange-600" },
    { word: "ROBOT", emoji: "🤖", color: "bg-slate-100 text-slate-600" },
    { word: "SHARK", emoji: "🦈", color: "bg-blue-100 text-blue-600" },
    { word: "SHEEP", emoji: "🐑", color: "bg-stone-100 text-stone-500" },
    { word: "TRUCK", emoji: "🚚", color: "bg-red-100 text-red-600" },
    { word: "WATCH", emoji: "⌚", color: "bg-stone-100 text-stone-800" },
    { word: "WATER", emoji: "💧", color: "bg-blue-100 text-blue-400" },
    { word: "WHALE", emoji: "🐳", color: "bg-blue-100 text-blue-500" },
    { word: "WORLD", emoji: "🌍", color: "bg-green-100 text-green-600" },
  ]
};

// --- CONFETTI ---
const Confetti = () => {
  const particles = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100 + '%',
    animationDelay: Math.random() * 2 + 's',
    backgroundColor: ['#FFD700', '#FF6347', '#00BFFF', '#32CD32', '#FF69B4'][Math.floor(Math.random() * 5)]
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((p) => (
        <div key={p.id} className="absolute top-[-20px] w-3 h-6 rounded opacity-80 animate-confetti-fall" style={{ left: p.left, backgroundColor: p.backgroundColor, animationDelay: p.animationDelay, transform: `rotate(${Math.random() * 360}deg)` }}/>
      ))}
    </div>
  );
};

// --- SFX ENGINE ---
const useSFX = () => {
  const [enabled, setEnabled] = useState(true);
  const playTone = (type) => {
    if (!enabled) return;
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    const now = ctx.currentTime;

    if (type === 'tap') {
      osc.frequency.setValueAtTime(600, now);
      osc.type = 'sine';
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
      osc.start(now); osc.stop(now + 0.1);
    } else if (type === 'delete') {
      osc.frequency.setValueAtTime(300, now);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
      osc.start(now); osc.stop(now + 0.1);
    } else if (type === 'correct') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.exponentialRampToValueAtTime(1046.5, now + 0.1);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
      osc.start(now); osc.stop(now + 0.5);
    } else if (type === 'wrong') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.exponentialRampToValueAtTime(50, now + 0.3);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
      osc.start(now); osc.stop(now + 0.3);
    } else if (type === 'win') {
      [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98].forEach((freq, i) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination);
        o.type = 'sine'; o.frequency.value = freq;
        g.gain.setValueAtTime(0.1, now + i*0.1);
        g.gain.linearRampToValueAtTime(0, now + i*0.1 + 0.3);
        o.start(now + i*0.1); o.stop(now + i*0.1 + 0.3);
      });
    } else if (type === 'lose') {
      [392.00, 369.99, 349.23, 329.63].forEach((freq, i) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination);
        o.type = 'triangle';
        o.frequency.setValueAtTime(freq, now + i*0.5);
        o.frequency.linearRampToValueAtTime(freq - 15, now + i*0.5 + 0.4); 
        g.gain.setValueAtTime(0.2, now + i*0.5);
        g.gain.linearRampToValueAtTime(0, now + i*0.5 + 0.4);
        o.start(now + i*0.5); o.stop(now + i*0.5 + 0.4);
      });
    }
  };
  return { playTone, enabled, setEnabled };
};

// --- COMPONENTS ---
const Button = ({ children, onClick, variant = 'primary', className = '', disabled = false }) => {
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200",
    secondary: "bg-white border-2 border-slate-200 text-slate-700 hover:border-indigo-300 hover:text-indigo-600",
  };
  return (
    <button onClick={onClick} disabled={disabled} className={`relative overflow-hidden rounded-xl font-bold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm ${variants[variant]} ${className}`}>
      <div className="flex items-center justify-center gap-2 px-6 py-4">{children}</div>
    </button>
  );
};

// --- APP UTAMA ---
export default function EduPintarLiteV6() {
  const [view, setView] = useState('home');
  const { playTone, enabled, setEnabled } = useSFX();
  const PageTransition = ({ children }) => <div className="animate-fade-in w-full max-w-lg mx-auto">{children}</div>;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 flex flex-col items-center py-6 px-4 overflow-hidden">
      <header className="w-full max-w-lg flex justify-between items-center mb-10 px-2 relative z-10">
        {view !== 'home' ? (
          <button onClick={() => { setView('home'); playTone('tap'); }} className="p-2 rounded-full hover:bg-slate-200 text-slate-600 transition-colors">
            <Home size={24} />
          </button>
        ) : <div className="w-10" />}
        <h1 className="text-xl font-black tracking-widest text-indigo-300 uppercase">EduPintar</h1>
        <button onClick={() => setEnabled(!enabled)} className={`p-2 rounded-full transition-colors ${enabled ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-200 text-slate-400'}`}>
          {enabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
        </button>
      </header>

      <main className="w-full flex-1 flex flex-col items-center relative z-10">
        {view === 'home' && (
          <PageTransition>
            <div className="text-center mb-10">
              <div className="inline-block p-4 rounded-full bg-white shadow-sm mb-4">
                 <Sparkles className="text-yellow-400" size={40} fill="currentColor" />
              </div>
              <h2 className="text-3xl font-extrabold text-slate-800 mb-2">Mau belajar apa?</h2>
              <p className="text-slate-500">Pilih permainanmu hari ini</p>
            </div>
            <div className="grid gap-4 w-full">
              <MenuCard icon={<Calculator size={32} />} title="Matematika" subtitle="Kuis Berhitung" color="blue" onClick={() => { setView('math'); playTone('tap'); }} />
              <MenuCard icon={<BookOpen size={32} />} title="Membaca" subtitle="Bahasa Indonesia" color="emerald" onClick={() => { setView('reading_id'); playTone('tap'); }} />
              <MenuCard icon={<Globe size={32} />} title="English" subtitle="Bahasa Inggris" color="violet" onClick={() => { setView('reading_en'); playTone('tap'); }} />
            </div>
          </PageTransition>
        )}
        {view === 'math' && <MathQuizModule playTone={playTone} onBack={() => setView('home')} />}
        {view === 'reading_id' && <ReadingQuizModule playTone={playTone} onBack={() => setView('home')} mode="id" />}
        {view === 'reading_en' && <ReadingQuizModule playTone={playTone} onBack={() => setView('home')} mode="en" />}
      </main>

      <style jsx global>{`
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
        .animate-pop { animation: pop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .animate-bounce-custom { animation: bounceCustom 1s infinite; }
        .animate-shake { animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both; }
        .animate-confetti-fall { animation: confettiFall 3s linear infinite; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pop { 0% { transform: scale(0.9); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }
        @keyframes bounceCustom { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes shake { 10%, 90% { transform: translate3d(-1px, 0, 0); } 20%, 80% { transform: translate3d(2px, 0, 0); } 30%, 50%, 70% { transform: translate3d(-4px, 0, 0); } 40%, 60% { transform: translate3d(4px, 0, 0); } }
        @keyframes confettiFall { 0% { transform: translateY(-100%) rotate(0deg); opacity: 1; } 100% { transform: translateY(100vh) rotate(360deg); opacity: 0; } }
      `}</style>
    </div>
  );
}

const MenuCard = ({ icon, title, subtitle, color, onClick }) => {
  const colors = {
    blue: "bg-blue-100 text-blue-600 border-blue-200 group-hover:text-blue-700",
    emerald: "bg-emerald-100 text-emerald-600 border-emerald-200 group-hover:text-emerald-700",
    violet: "bg-violet-100 text-violet-600 border-violet-200 group-hover:text-violet-700",
  };
  return (
    <div onClick={onClick} className="group cursor-pointer bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-6">
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner ${colors[color]}`}>{icon}</div>
      <div className="text-left flex-1">
        <h3 className={`text-xl font-bold text-slate-800 transition-colors`}>{title}</h3>
        <p className="text-slate-500 text-sm">{subtitle}</p>
      </div>
      <div className="text-slate-300 group-hover:text-slate-500 transition-colors"><ArrowRight size={24} /></div>
    </div>
  );
};

// --- MODULE 1: MATH QUIZ ---
function MathQuizModule({ playTone, onBack }) {
  const [phase, setPhase] = useState('menu'); 
  const [level, setLevel] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState(null);

  const CONFIG = { 1: { count: 5, max: 10 }, 2: { count: 10, max: 20 }, 3: { count: 15, max: 30 } };

  const startQuiz = (lvl) => {
    const cfg = CONFIG[lvl];
    const newQs = [];
    for (let i = 0; i < cfg.count; i++) {
      const isAdd = Math.random() > 0.5;
      let n1, n2, op, ans;
      if (isAdd) { n1 = Math.floor(Math.random() * (cfg.max + 1)); n2 = Math.floor(Math.random() * (cfg.max - n1 + 1)); op = '+'; ans = n1 + n2; } 
      else { n1 = Math.floor(Math.random() * (cfg.max + 1)); n2 = Math.floor(Math.random() * (n1 + 1)); op = '-'; ans = n1 - n2; }
      newQs.push({ n1, n2, op, ans });
    }
    setLevel(lvl); setQuestions(newQs); setCurrentIndex(0); setScore(0); setInput(''); setPhase('playing'); playTone('tap');
  };

  const handleNumClick = (n) => { if (!feedback && input.length < 2) { playTone('tap'); setInput(prev => prev + n); } };
  const handleDelete = () => { if (!feedback) { playTone('delete'); setInput(''); } };
  const checkAnswer = () => {
    if (input === '') return;
    const q = questions[currentIndex];
    const isCorrect = parseInt(input) === q.ans;
    if (isCorrect) { setFeedback('correct'); setScore(s => s + 1); playTone('correct'); } else { setFeedback('wrong'); playTone('wrong'); }
    setTimeout(() => {
      setFeedback(null); setInput('');
      if (currentIndex < questions.length - 1) { setCurrentIndex(c => c + 1); } 
      else { 
        setPhase('result'); 
        if (Math.round(((isCorrect ? score + 1 : score) / questions.length) * 100) > 80) playTone('win'); else playTone('lose'); 
      }
    }, 1200);
  };

  if (phase === 'menu') return (
    <div className="w-full max-w-md animate-fade-in space-y-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-slate-800">Pilih Level Matematika</h2>
      {[1, 2, 3].map(l => (
        <button key={l} onClick={() => startQuiz(l)} className="w-full bg-white p-5 rounded-2xl border-2 border-indigo-100 hover:border-indigo-500 shadow-sm flex items-center justify-between group transition-all">
          <div className="flex items-center gap-4"><div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-black text-xl">{l}</div><div className="text-left"><div className="font-bold text-slate-800">Level {l}</div><div className="text-sm text-slate-500">{CONFIG[l].count} Soal</div></div></div><ArrowRight className="text-slate-300 group-hover:text-indigo-500"/>
        </button>
      ))}
      <div className="pt-4"><Button variant="secondary" onClick={onBack} className="w-full">Kembali</Button></div>
    </div>
  );

  if (phase === 'result') {
    const finalScore = Math.round((score / questions.length) * 100);
    const isPass = finalScore > 80;
    return (
      <div className="w-full max-w-md animate-pop text-center relative">
        {isPass && <Confetti />}
        <div className="mb-6 flex justify-center text-8xl">{isPass ? "🏆" : <XCircle size={120} className="text-slate-300 animate-shake" />}</div>
        <h2 className={`text-6xl font-black mb-2 ${isPass ? 'text-green-600' : 'text-slate-400'}`}>{finalScore}</h2>
        <h3 className="text-xl font-bold text-slate-600 mb-8">{isPass ? "HEBAT! KAMU MENANG!" : "Jangan sedih, ayo coba lagi!"}</h3>
        <div className="grid grid-cols-2 gap-4 mb-8">
           <div className="bg-green-50 p-3 rounded-2xl border border-green-200"><div className="text-2xl font-bold text-green-600">{score}</div><div className="text-xs uppercase font-bold text-green-400">Benar</div></div>
           <div className="bg-red-50 p-3 rounded-2xl border border-red-200"><div className="text-2xl font-bold text-red-600">{questions.length - score}</div><div className="text-xs uppercase font-bold text-red-400">Salah</div></div>
        </div>
        <div className="space-y-3"><Button onClick={() => setPhase('menu')} className="w-full">Main Lagi</Button><Button variant="secondary" onClick={onBack} className="w-full">Kembali</Button></div>
      </div>
    );
  }

  const q = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;
  return (
    <div className="w-full max-w-md animate-fade-in">
      <div className="w-full bg-slate-200 h-3 rounded-full mb-4 overflow-hidden"><div className="bg-indigo-500 h-full transition-all duration-500" style={{ width: `${progress}%` }}></div></div>
      <div className="flex justify-between text-xs font-bold text-slate-400 mb-8 px-2"><span>SOAL {currentIndex + 1} / {questions.length}</span><span>LEVEL {level}</span></div>
      <div className={`bg-white rounded-[2.5rem] p-10 border-4 shadow-sm mb-8 flex justify-between items-center text-5xl font-black relative overflow-hidden transition-all duration-300 ${feedback === 'correct' ? 'border-green-400 bg-green-50' : feedback === 'wrong' ? 'border-red-400 bg-red-50' : 'border-slate-100'}`}>
        {feedback && (<div className="absolute inset-0 bg-white/95 flex items-center justify-center z-10 animate-fade-in">{feedback === 'correct' ? (<div className="text-green-500 flex flex-col items-center"><CheckCircle2 size={64} className="mb-2"/> <span className="text-lg">Benar!</span></div>) : (<div className="text-red-500 flex flex-col items-center"><X size={64} className="mb-2"/> <span className="text-lg">Jawabannya: {q.ans}</span></div>)}</div>)}
        <span>{q.n1}</span><span className="text-indigo-400">{q.op}</span><span>{q.n2}</span><span className="text-slate-300">=</span><div className="w-24 h-24 rounded-2xl flex items-center justify-center border-2 border-indigo-100 bg-indigo-50 text-indigo-600 text-4xl shadow-inner">{input || '?'}</div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => (<button key={n} onClick={() => handleNumClick(n)} className="bg-white hover:bg-slate-50 border-b-4 border-slate-200 rounded-2xl py-4 text-2xl font-bold text-slate-700 active:border-b-0 active:translate-y-1 transition-all">{n}</button>))}
        <button onClick={handleDelete} className="bg-rose-50 text-rose-500 rounded-2xl py-4 hover:bg-rose-100 border-b-4 border-transparent active:border-b-0 active:translate-y-1"><RotateCcw className="mx-auto" /></button>
        <button onClick={() => handleNumClick(0)} className="bg-white hover:bg-slate-50 border-b-4 border-slate-200 rounded-2xl py-4 text-2xl font-bold text-slate-700 active:border-b-0 active:translate-y-1 transition-all">0</button>
        <button onClick={checkAnswer} className="col-span-1 bg-indigo-600 text-white rounded-2xl border-b-4 border-indigo-800 active:border-b-0 active:translate-y-1 font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 flex items-center justify-center"><CornerDownLeft size={32} strokeWidth={3} /></button>
      </div>
    </div>
  );
}

// --- MODULE 2 & 3: READING QUIZ (ID/EN) ---
function ReadingQuizModule({ playTone, onBack, mode }) {
  const [phase, setPhase] = useState('menu');
  const [level, setLevel] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [curr, setCurr] = useState(0);
  const [score, setScore] = useState(0);
  const [slots, setSlots] = useState([]);
  const [pool, setPool] = useState([]);
  const [feedback, setFeedback] = useState(null);

  const DB = mode === 'en' ? ENGLISH_DB : INDO_DB;
  const colorScheme = mode === 'en' ? 'violet' : 'emerald';
  const CONFIG = { 1: { count: 5, label: "Level 1" }, 2: { count: 10, label: "Level 2" }, 3: { count: 15, label: "Level 3" } };

  const startQuiz = (lvl) => {
    let sourceWords = [...DB[lvl]];
    while (sourceWords.length < CONFIG[lvl].count) { sourceWords = [...sourceWords, ...DB[lvl]]; }
    const shuffled = sourceWords.sort(() => Math.random() - 0.5).slice(0, CONFIG[lvl].count);
    setLevel(lvl); setQuestions(shuffled); setCurr(0); setScore(0); setPhase('playing'); playTone('tap'); loadQuestion(shuffled[0]);
  };

  const loadQuestion = (data) => {
    const chars = data.word.split('');
    setSlots(Array(chars.length).fill(null));
    setPool(chars.map((c, i) => ({ id: i, char: c, used: false })).sort(() => Math.random() - 0.5));
    setFeedback(null);
  };

  const handleLetterClick = (l) => {
    if (feedback) return;
    const emptyIndex = slots.indexOf(null);
    if (emptyIndex === -1) return;
    playTone('tap'); 
    const newSlots = [...slots]; newSlots[emptyIndex] = l; setSlots(newSlots);
    const newPool = pool.map(p => p.id === l.id ? { ...p, used: true } : p); setPool(newPool);
    if (!newSlots.includes(null)) {
      const isCorrect = newSlots.map(s => s.char).join('') === questions[curr].word;
      if (isCorrect) { setFeedback('correct'); setScore(s => s + 1); playTone('correct'); } else { setFeedback('wrong'); playTone('wrong'); }
      setTimeout(() => {
        if (curr < questions.length - 1) { setCurr(c => c + 1); loadQuestion(questions[curr + 1]); } 
        else { setPhase('result'); if (Math.round(((isCorrect ? score + 1 : score) / questions.length) * 100) > 80) playTone('win'); else playTone('lose'); }
      }, 1500);
    }
  };

  const resetSlots = () => { playTone('delete'); setSlots(Array(questions[curr].word.length).fill(null)); setPool(pool.map(p => ({ ...p, used: false }))); };

  if (phase === 'menu') {
    return (
      <div className="w-full max-w-md animate-fade-in space-y-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-slate-800">{mode === 'en' ? "Choose Level" : "Pilih Level Membaca"}</h2>
        {[1, 2, 3].map(l => (
          <button key={l} onClick={() => startQuiz(l)} className={`w-full bg-white p-5 rounded-2xl border-2 border-${colorScheme}-100 hover:border-${colorScheme}-500 shadow-sm flex items-center justify-between group transition-all`}>
            <div className="flex items-center gap-4"><div className={`w-12 h-12 rounded-full bg-${colorScheme}-50 text-${colorScheme}-600 flex items-center justify-center font-black text-xl`}>{l}</div><div className="text-left"><div className="font-bold text-slate-800">Level {l}</div><div className="text-sm text-slate-500">{CONFIG[l].count} {mode === 'en' ? "Questions" : "Soal"}</div></div></div><ArrowRight className={`text-slate-300 group-hover:text-${colorScheme}-500`}/>
          </button>
        ))}
        <div className="pt-4"><Button variant="secondary" onClick={onBack} className="w-full">Kembali</Button></div>
      </div>
    );
  }

  if (phase === 'result') {
    const finalScore = Math.round((score / questions.length) * 100);
    const isPass = finalScore > 80;
    return (
      <div className="w-full max-w-md animate-pop text-center relative">
        {isPass && <Confetti />}
        <div className="mb-6 flex justify-center text-8xl">{isPass ? "🏆" : <XCircle size={120} className="text-slate-300 animate-shake" />}</div>
        <h2 className={`text-6xl font-black mb-2 ${isPass ? 'text-green-600' : 'text-slate-400'}`}>{finalScore}</h2>
        <h3 className="text-xl font-bold text-slate-600 mb-8">{isPass ? (mode === 'en' ? "AWESOME! YOU WIN!" : "HEBAT! KAMU MENANG!") : (mode === 'en' ? "Try Again!" : "Ayo coba lagi!")}</h3>
        <div className="grid grid-cols-2 gap-4 mb-8">
           <div className="bg-green-50 p-3 rounded-2xl border border-green-200"><div className="text-2xl font-bold text-green-600">{score}</div><div className="text-xs uppercase font-bold text-green-400">{mode === 'en' ? "Correct" : "Benar"}</div></div>
           <div className="bg-red-50 p-3 rounded-2xl border border-red-200"><div className="text-2xl font-bold text-red-600">{questions.length - score}</div><div className="text-xs uppercase font-bold text-red-400">{mode === 'en' ? "Wrong" : "Salah"}</div></div>
        </div>
        <div className="space-y-3"><Button onClick={() => setPhase('menu')} className="w-full">Main Lagi</Button><Button variant="secondary" onClick={onBack} className="w-full">Kembali</Button></div>
      </div>
    );
  }

  const q = questions[curr];
  const progress = ((curr + 1) / questions.length) * 100;

  return (
    <div className="w-full max-w-md animate-fade-in flex flex-col items-center">
      <div className="w-full bg-slate-200 h-3 rounded-full mb-4 overflow-hidden"><div className={`bg-${colorScheme}-500 h-full transition-all duration-500`} style={{ width: `${progress}%` }}></div></div>
      <div className="flex justify-between w-full text-xs font-bold text-slate-400 mb-4 px-2"><span>{mode === 'en' ? "WORD" : "KATA"} {curr + 1} / {questions.length}</span><span>LEVEL {level}</span></div>
      <div className={`w-full h-48 rounded-[2.5rem] mb-6 flex items-center justify-center text-9xl shadow-sm border-4 relative overflow-hidden transition-all duration-300 ${feedback === 'correct' ? 'border-green-400 bg-green-50' : feedback === 'wrong' ? 'border-red-400 bg-red-50' : `${q.color} border-white`}`}>
         {feedback && (<div className="absolute inset-0 bg-white/95 flex items-center justify-center z-10 animate-fade-in">{feedback === 'correct' ? (<div className="text-green-500 flex flex-col items-center"><CheckCircle2 size={64} className="mb-2"/> <span className="text-lg font-bold">{mode === 'en' ? "Correct!" : "Benar!"}</span></div>) : (<div className="text-red-500 flex flex-col items-center"><X size={64} className="mb-2"/> <span className="text-lg font-bold">{q.word}</span></div>)}</div>)}
        {q.emoji}
      </div>
      <div className="flex gap-2 mb-8 flex-wrap justify-center">{slots.map((s, i) => (<div key={i} className={`w-12 h-14 border-b-4 flex items-center justify-center text-3xl font-bold rounded-xl transition-all ${s ? `bg-white border-${colorScheme}-200 text-${colorScheme}-600 -translate-y-2 shadow-sm` : 'bg-slate-100 border-slate-200 text-transparent'}`}>{s?.char}</div>))}</div>
      <div className="flex gap-3 flex-wrap justify-center mb-6">{pool.map(l => (<button key={l.id} disabled={l.used || feedback} onClick={() => handleLetterClick(l)} className={`w-14 h-14 rounded-xl font-bold text-xl shadow-sm transition-all duration-200 ${l.used ? 'opacity-0 scale-50' : 'bg-white text-slate-700 hover:-translate-y-1 hover:shadow-md border border-slate-100'}`}>{l.char}</button>))}</div>
      {!feedback && slots.some(s => s !== null) && (
        <button onClick={resetSlots} className="bg-rose-50 text-rose-500 rounded-xl py-3 px-6 hover:bg-rose-100 border-b-4 border-transparent active:border-b-0 active:translate-y-1 font-bold"><RotateCcw className="mx-auto" /></button>
      )}
    </div>
  );
}

