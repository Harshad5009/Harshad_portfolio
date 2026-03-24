import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MapPin, 
  Terminal,
  Play,
  FileText,
  MessageSquare,
  CheckCircle2,
  Activity,
  Monitor,
  Check,
  FolderGit2,
  Cpu,
  User,
  Mail,
  ExternalLink,
  ChevronRight,
  Globe,
  Server,
  Database,
  Code
} from 'lucide-react'

import profileImg from './assets/profile.jpg'
import resumePdf from './assets/resume.pdf'

// Project Screenshots
import kumbhImg from './assets/projects/kumbh.png'
import aetheropsImg from './assets/projects/aetherops.png'
import topoImg from './assets/projects/topo.png'
import railwayImg from './assets/projects/railway.png'

// Terminal specific config
const borderColor = "border-[#00ffcc]/30"

// --- VIEWS ---

const HomeView = ({ greeting, deployLogs, visibleLogs }) => (
  <>
    {/* Hero Intro Panel */}
    <div className={`mt-4 border ${borderColor} rounded bg-[#0a1218]/50 p-4 lg:p-6 relative flex-shrink-0 mt-2`}>
      <div className="absolute -translate-y-1/2 top-0 left-4 bg-[#020508] px-2 z-20 text-[12px] text-[#00ffcc] flex items-center gap-2 font-bold tracking-wider">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00ffcc]"/> harshad@developer:~$
      </div>
      
      <div className="mt-2 lg:mt-4 grow flex flex-col justify-center">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#00ffcc] mb-2 lg:mb-4 flex items-center min-h-[40px] lg:min-h-[60px] tracking-tight">
          {greeting}<span className="animate-pulse">_</span>
        </h1>
        <p className="text-gray-400 text-[12px] sm:text-xs lg:text-base tracking-widest mb-4 lg:mb-8 uppercase max-w-2xl leading-relaxed border-l-2 border-[#00ffcc]/50 pl-4 py-1 italic opacity-80">
          I BUILD SCALABLE WEB APPLICATIONS & ENGINEER AUTONOMOUS SYSTEM ARCHITECTURES.
        </p>

        <div className="flex flex-wrap gap-4 mt-2">
          <button className="bg-[#00ffcc] text-black border border-[#00ffcc] px-5 py-2 text-xs font-bold flex items-center gap-2 hover:bg-[#00ffcc]/80 transition-all group shadow-[0_0_15px_rgba(0,255,204,0.3)]">
            <Play size={12} fill="currentColor" /> VIEW_MY_WORK.sh
          </button>
          <a href={resumePdf} download="Harshad_Thok_Resume.pdf" target="_blank" rel="noreferrer" className="bg-[#00ffcc]/10 border border-[#00ffcc] text-[#00ffcc] px-5 py-2 text-xs font-bold flex items-center gap-2 hover:bg-[#00ffcc] hover:text-black transition-all shadow-[0_0_10px_rgba(0,255,204,0.1)]">
            <FileText size={12} /> DOWNLOAD_RESUME.pdf
          </a>
          <button className="border border-gray-600 text-gray-300 px-4 py-2 text-xs font-bold flex items-center gap-2 hover:border-[#00ffcc] hover:text-[#00ffcc] transition-colors">
            <MessageSquare size={12} /> START_CONVERSATION
          </button>
        </div>
        <div className="mt-6 text-[12px] text-gray-500 flex items-center gap-2">
            <div className="w-2 h-4 bg-[#00ffcc]/50 animate-pulse" /> Typing...
        </div>
      </div>
    </div>

    {/* Middle Split: Tech Stack & Code Workspace */}
    <div className="flex flex-col lg:flex-row gap-4 flex-shrink-0 lg:flex-1 min-h-[300px]">
        
        {/* Tech Stack Analysis */}
        <div className={`mt-4 border ${borderColor} rounded bg-[#0a1218]/50 p-4 relative flex-1 flex flex-col`}>
          <div className="absolute -translate-y-1/2 top-0 left-4 bg-[#020508] px-2 z-20 text-[12px] text-[#00ffcc] flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00ffcc]"/> TECH_STACK_ANALYSIS
          </div>
          <div className="absolute top-3 right-4 text-[13px] text-[#00ffcc] animate-pulse flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ffcc]"/> SCANNING...
          </div>
          
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 flex-1">
              {[
                { label: 'JavaScript', icon: <Code size={16} />,      level: 'EXPERT'     },
                { label: 'React',      icon: <Globe size={16} />,     level: 'MASTERY L5' },
                { label: 'Python',     icon: <Terminal size={16} />,  level: 'ADVANCED'   },
                { label: 'C++',        icon: <Cpu size={16} />,       level: 'SYSTEMS'    },
                { label: 'Java',       icon: <Server size={16} />,    level: 'ADVANCED'   },
                { label: 'MySQL',      icon: <Database size={16} />,  level: 'DATABASE'   },
                { label: 'TensorFlow', icon: <Activity size={16} />,  level: 'ML/AI'      },
                { label: 'Git',        icon: <Monitor size={16} />,   level: 'VERSION CTL'}
              ].map((tech, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-[#0c161d]/80 border border-[#00ffcc]/30 rounded-lg p-3 flex flex-col items-center justify-center gap-2 group hover:border-[#00ffcc] hover:bg-[#00ffcc]/5 transition-all cursor-pointer"
                >
                  <div className="text-[#00ffcc] group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <div className="text-[12px] font-bold text-gray-300 tracking-tighter uppercase whitespace-nowrap">{tech.label}</div>
                  <div className="text-[13px] text-[#00ffcc]/60 bg-[#00ffcc]/5 px-2 py-0.5 border border-[#00ffcc]/20 rounded tracking-[0.2em]">{tech.level}</div>
                </motion.div>
              ))}
          </div>

          <div className="mt-4 pt-3 border-t border-[#00ffcc]/20 flex items-center gap-2 text-[12px] text-gray-400">
              <CheckCircle2 size={12} className="text-[#00ffcc]" /> core technologies • Always learning new tools
          </div>
        </div>

        {/* Code Workspace */}
        <div className={`mt-4 border ${borderColor} rounded bg-[#0a1218]/50 p-4 relative flex-[0.7] hidden lg:flex flex-col`}>
          <div className="absolute -translate-y-1/2 top-0 left-4 bg-[#020508] px-2 z-20 text-[12px] text-[#00ffcc] flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00ffcc]"/> CODE_WORKSPACE.tsx
          </div>
          <div className="absolute top-3 right-4 text-[13px] text-gray-500 border border-gray-600 px-2 py-0.5 rounded bg-black">
              TypeScript React
          </div>

          <div className="mt-4 font-mono text-[12px] lg:text-[13px] leading-relaxed overflow-x-auto flex-1">
              <div className="text-gray-500 mb-2">{'// Core principles configuration'}</div>
              <div><span className="text-[#c678dd]">const</span> <span className="text-[#e5c07b]">Developer</span> <span className="text-[#56b6c2]">=</span> <span className="text-gray-300">()</span> <span className="text-[#c678dd]">=&gt;</span> <span className="text-gray-300">{'{'}</span></div>
              <div className="pl-4"><span className="text-[#c678dd]">const</span> <span className="text-[#e06c75]">[<span className="text-gray-300">passion</span>]</span> <span className="text-[#56b6c2]">=</span> <span className="text-[#61afef]">useState</span><span className="text-gray-300">&lt;</span><span className="text-[#e5c07b]">string</span><span className="text-gray-300">[]&gt;([</span></div>
              <div className="pl-8 text-[#98c379]">'Building robust systems'<span>,</span></div>
              <div className="pl-8 text-[#98c379]">'Clean code architecture'<span>,</span></div>
              <div className="pl-8 text-[#98c379]">'Autonomous telemetry'<span>,</span></div>
              <div className="pl-8 text-[#98c379]">'Problem solving'</div>
              <div className="pl-4 text-gray-300">]);</div>
              <div className="mt-2 pl-4"><span className="text-[#c678dd]">return</span> <span className="text-gray-300">(</span></div>
              <div className="pl-8 text-gray-300">&lt;<span className="text-[#e06c75]">div</span> <span className="text-[#d19a66]">className</span><span className="text-[#56b6c2]">=</span><span className="text-[#98c379]">"developer-core"</span>&gt;</div>
              <div className="pl-12 text-gray-300">&lt;<span className="text-[#e06c75]">h1</span>&gt;Hi, I'm Harshad 👋&lt;/<span className="text-[#e06c75]">h1</span>&gt;</div>
              <div className="pl-12 text-gray-300">&lt;<span className="text-[#e5c07b]">Status</span> <span className="text-[#d19a66]">indicator</span><span className="text-[#56b6c2]">=</span><span className="text-[#98c379]">"online"</span> /&gt;</div>
              <div className="pl-8 text-gray-300">&lt;/<span className="text-[#e06c75]">div</span>&gt;</div>
              <div className="pl-4 text-gray-300">);</div>
              <div><span className="text-gray-300">{"};"}</span></div>
          </div>
          
          <div className="mt-2 pt-2 border-t border-[#00ffcc]/20 flex items-center gap-2 text-[12px] text-[#00ffcc]">
              <Check size={12} /> Compiled successfully • Ready for deployment
          </div>
        </div>

    </div>

    {/* Deploy Logs */}
    <div className={`mt-4 border ${borderColor} rounded bg-[#0a1218]/50 p-3 relative mt-2`}>
      <div className="absolute -translate-y-1/2 top-0 left-4 bg-[#020508] px-2 z-20 text-[12px] text-[#00ffcc] flex items-center gap-2 font-bold tracking-wider">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00ffcc]"/> PROJECT_DEPLOY_LOGS
      </div>
      <div className="mt-4 font-mono text-[11px] text-gray-400 space-y-1 pb-2">
          {deployLogs.slice(0, visibleLogs).map((log, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-gray-600">{log.time}</span> <span className={log.color}>{log.text}</span>
            </motion.div>
          ))}
          {visibleLogs < deployLogs.length && (
            <div className="animate-pulse text-[#00ffcc] mt-1">_</div>
          )}
      </div>
      <div className="absolute bottom-3 right-4 text-[13px] border border-[#00ffcc]/50 text-[#00ffcc] px-2 py-0.5 rounded flex items-center gap-2 bg-[#00ffcc]/5">
          PRODUCTION <div className="w-1.5 h-1.5 rounded-full bg-[#00ffcc] shadow-[0_0_5px_#00ffcc]" /> LIVE
      </div>
    </div>
  </>
);

const ProjectsView = () => {
  const projects = [
    { 
      id: '01', 
      title: 'AETHEROPS_CORE', 
      type: 'AIOps / Telemetry', 
      tech: 'FastAPI • React • Kafka • Stats', 
      status: 'COMPILED', 
      link: 'https://github.com/Harshad5009/AetherOps',
      image: aetheropsImg,
      desc: 'Autonomous Telemetry & Self-Healing Engine with real-time anomaly detection.'
    },
    { 
      id: '02', 
      title: 'NASHIK_KUMBH_2026', 
      type: 'Scale / Web', 
      tech: 'MERN Stack • Vercel • Maps API', 
      status: 'ACTIVE', 
      link: 'https://nashik-kumbh-2026.vercel.app',
      image: kumbhImg,
      desc: 'Digital infrastructure for the world\'s largest spiritual gathering.'
    },
    { 
      id: '03', 
      title: 'RAILWAY_SYSTEM', 
      type: 'Full Stack', 
      tech: 'React • Node.js • Express • MongoDB', 
      status: 'STABLE', 
      link: 'https://github.com/Harshad5009/Railway-Reservation-System',
      image: railwayImg,
      desc: 'Smart booking engine with high-concurrency seat allocation logic.'
    },
    { 
      id: '04', 
      title: 'TOPO_ANALYZER', 
      type: 'Systems / C++', 
      tech: 'C++ • Network Graph • PDF Engine', 
      status: 'OPTIMIZED', 
      link: 'https://github.com/Harshad5009/Network-Topology-Analyzer',
      image: topoImg,
      desc: 'High-performance network schematic generator and failure simulation tool.'
    }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`mt-4 border ${borderColor} rounded bg-[#0a1218]/50 p-4 lg:p-6 flex-1 flex flex-col relative overflow-y-auto`}>
      <div className="absolute -translate-y-1/2 top-0 left-4 bg-[#020508] px-2 z-20 text-[12px] text-[#00ffcc] flex items-center gap-2 font-bold tracking-widest uppercase">
          <FolderGit2 size={10} /> PROJECT_REPOSITORY_V2.0
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mt-4">
        {projects.map((p, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`group relative border border-gray-800 rounded bg-black/40 overflow-hidden hover:border-[#00ffcc]/50 transition-all shadow-xl`}
          >
            {/* Project Image Container */}
            <div className="h-40 lg:h-48 overflow-hidden relative">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute top-3 left-3 flex gap-2">
                 <span className="bg-black/80 border border-[#00ffcc]/30 text-[#00ffcc] text-[12px] font-bold px-2 py-0.5 rounded backdrop-blur-sm tracking-tighter uppercase whitespace-nowrap">
                   {p.type}
                 </span>
              </div>
              <div className="absolute top-3 right-3">
                 <div className="w-2 h-2 rounded-full bg-[#00ffcc] animate-pulse shadow-[0_0_8px_#00ffcc]" />
              </div>
            </div>

            {/* Content Section */}
            <div className="p-4 flex flex-col gap-2">
              <div className="flex justify-between items-start gap-2">
                 <h3 className="text-[#00ffcc] font-bold text-sm tracking-tight">{p.title}</h3>
                 <span className="text-[13px] font-mono text-gray-500">[{p.status}]</span>
              </div>
              <p className="text-gray-400 text-[12px] leading-relaxed line-clamp-2 h-8">
                {p.desc}
              </p>
              <div className="text-[13px] text-gray-500 font-mono mt-2 flex items-center gap-2 italic">
                 <Activity size={10} className="text-[#00ffcc]/50" /> {p.tech}
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-gray-800 pt-3">
                 <a href={p.link} target="_blank" rel="noreferrer" className="text-[12px] font-bold text-gray-300 flex items-center gap-1.5 hover:text-[#00ffcc] transition-colors group/btn">
                    <ExternalLink size={12} className="group-hover/btn:rotate-12 transition-transform" /> SOURCE_CODE.sh
                 </a>
                 <div className="text-[13px] text-[#00ffcc]/40 font-bold uppercase tracking-widest">
                    ID: {p.id}
                 </div>
              </div>
            </div>

            {/* Scanline Effect on Hover */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-300 overflow-hidden">
               <div className="w-full h-1/2 bg-gradient-to-b from-[#00ffcc] to-transparent absolute animate-[scan_3s_linear_infinite]" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 pt-4 border-t border-gray-800 flex items-center justify-center text-[12px] text-gray-500 italic">
         &gt; All projects are live on GitHub Repository. Initializing remote fetch... [OK]
      </div>
    </motion.div>
  )
}

const SkillsView = () => (
   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`mt-4 border ${borderColor} rounded bg-[#0a1218]/50 p-6 flex-1 flex flex-col relative`}>
      <div className="absolute -translate-y-1/2 top-0 left-4 bg-[#020508] px-2 z-20 text-[12px] text-[#00ffcc] flex items-center gap-2">
        <Cpu size={10} /> SYSTEM_DEPENDENCIES
      </div>
      
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 font-mono">
         {[
           { title: 'LANGUAGES', items: ['JavaScript', 'Java', 'C++', 'Python', 'C', 'HTML5', 'CSS3', 'PHP', 'R'] },
           { title: 'FRAMEWORKS & LIBS', items: ['React', 'TensorFlow', 'Keras', 'scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'Gunicorn'] },
           { title: 'DATABASES', items: ['MySQL', 'SQLite', 'Oracle'] },
           { title: 'TOOLS & PLATFORMS', items: ['Git', 'GitHub', 'NPM', 'Figma', 'Canva', 'Adobe Lightroom'] }
         ].map((cat, i) => (
           <div key={i} className="border border-gray-800 p-4 bg-black/40 rounded">
             <div className="text-[#00ffcc] text-xs font-bold mb-4 flex items-center gap-2">
               <div className="w-2 h-2 bg-[#00ffcc]" /> {cat.title}
             </div>
             <div className="flex flex-wrap gap-2">
                {cat.items.map((item, j) => (
                  <span key={j} className="text-xs text-gray-300 bg-gray-900 border border-gray-700 px-2 py-1 rounded hover:border-[#00ffcc] hover:text-[#00ffcc] cursor-default transition-colors">
                    {item}
                  </span>
                ))}
             </div>
           </div>
         ))}
      </div>
   </motion.div>
);

const AboutView = () => (
   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`mt-4 border ${borderColor} rounded bg-[#0a1218]/50 p-6 flex-1 flex flex-col relative`}>
      <div className="absolute -translate-y-1/2 top-0 left-4 bg-[#020508] px-2 z-20 text-[12px] text-[#00ffcc] flex items-center gap-2">
        <User size={10} /> BACKGROUND_PROCESS
      </div>
      
      <div className="mt-4 font-mono text-gray-300 text-sm leading-relaxed max-w-4xl space-y-6 overflow-y-auto pr-2 pb-4">
        <div className="flex items-center gap-2 text-[#00ffcc] text-xs mb-6">
            <Terminal size={12} /> harshad@node:~$ cat about_me.md
        </div>
        
        <h2 className="text-xl font-bold text-white flex items-center gap-2 mt-2">
           <span className="text-[#00ffcc]">🚀</span> About Me
        </h2>
        
        <p>
          I’m <span className="text-[#00ffcc] font-bold">Harshad</span>, a passionate Computer Engineering student and developer who loves building impactful and real-world solutions.
        </p>
        <p>
          I specialize in full-stack development (<span className="text-cyan-400">MERN stack</span>) and enjoy creating modern, user-friendly web applications. Along with development, I’m actively exploring AI/ML and data-driven systems, aiming to combine intelligence with scalable software.
        </p>
        <p>
          I believe in learning by building, which is why I continuously work on projects that solve real problems — from smart systems using IoT to scalable web platforms.
        </p>

        <h2 className="text-lg font-bold text-white flex items-center gap-2 mt-8 mb-4">
           <span className="text-yellow-400">💡</span> What I Do
        </h2>
        
        <ul className="space-y-2 opacity-90 pl-2">
           <li className="flex items-start gap-2">
             <span className="text-[#00ffcc] mt-1">▹</span> Build responsive and modern web applications
           </li>
           <li className="flex items-start gap-2">
             <span className="text-[#00ffcc] mt-1">▹</span> Work with MongoDB, Express, React, Node.js
           </li>
           <li className="flex items-start gap-2">
             <span className="text-[#00ffcc] mt-1">▹</span> Explore AI, Machine Learning & Data Analysis
           </li>
           <li className="flex items-start gap-2">
             <span className="text-[#00ffcc] mt-1">▹</span> Solve problems using Data Structures & Algorithms (C++)
           </li>
        </ul>

        <h2 className="text-lg font-bold text-white flex items-center gap-2 mt-8 mb-4">
           <span className="text-red-400">🎯</span> My Goal
        </h2>
        
        <p className="border-l-2 border-[#00ffcc]/50 pl-4 py-1 italic opacity-80 text-[#00ffcc]">
          "To become a top software engineer in a leading tech company, while creating innovative products that make a real difference."
        </p>

        <div className="flex items-center gap-2 text-gray-500 text-xs mt-10">
           <div className="w-1.5 h-3 bg-gray-500 animate-pulse" /> END OF FILE
        </div>
      </div>
   </motion.div>
);

const ContactView = () => (
   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`mt-4 border ${borderColor} rounded bg-[#0a1218]/50 p-6 flex-1 flex flex-col relative justify-center items-center text-center`}>
      <div className="absolute -translate-y-1/2 top-0 left-4 bg-[#020508] px-2 z-20 text-[12px] text-[#00ffcc] flex items-center gap-2">
        <Mail size={10} /> GET_IN_TOUCH
      </div>
      
      <div className="max-w-md w-full font-mono">
        <div className="w-20 h-20 rounded-full bg-[#00ffcc]/10 border border-[#00ffcc] text-[#00ffcc] flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(0,255,204,0.2)]">
          <Mail size={32} />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">INITIATE CONNECTION</h2>
        <p className="text-xs text-gray-400 mb-8">Ready to engineer something exceptional? Reach out to establish a handshake.</p>

        <div className="flex flex-col gap-4">
          <a href="mailto:harshadthok@gmail.com" className="bg-[#00ffcc]/10 border border-[#00ffcc] text-[#00ffcc] px-6 py-4 text-sm font-bold flex items-center justify-center gap-3 hover:bg-[#00ffcc] hover:text-black transition-all group">
            <Mail size={16} /> harshadthok@gmail.com
          </a>
          <div className="grid grid-cols-2 gap-4">
            <a href="https://github.com/Harshad5009" target="_blank" rel="noreferrer" className="border border-gray-700 hover:border-[#00ffcc] text-gray-300 hover:text-[#00ffcc] px-4 py-3 text-xs font-bold flex items-center justify-center gap-2 transition-colors">
              <ExternalLink size={14} /> GITHUB_PROFILE
            </a>
            <a href="#" className="border border-gray-700 hover:border-[#00ffcc] text-gray-300 hover:text-[#00ffcc] px-4 py-3 text-xs font-bold flex items-center justify-center gap-2 transition-colors">
              <ExternalLink size={14} /> LINKEDIN_PROFILE
            </a>
          </div>
        </div>
      </div>
   </motion.div>
);


// --- MAIN APP ---

export default function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-IN', { hour12: false }) + ' IST')
  const [uptime] = useState('15d 8h 42m')
  const phrases = [
    "Hello, I'm Harshad",
    "I'm Software Engineer",
    "AI/ML Learner",
    "Data Scientist",
  ];
  const phraseIndex = React.useRef(0);
  const charIndex   = React.useRef(0);
  const isDeleting  = React.useRef(false);
  const typeRef     = React.useRef(null);

  const deployLogs = [
    { text: '$ ./deploy.sh --project=portfolio-v2 --env=production', color: 'text-gray-300', time: '[12:45:23]' },
    { text: '↻ Initializing build process...', color: 'text-blue-400', time: '[12:45:24]' },
    { text: '✓ Build completed in 2.3s', color: 'text-[#00ffcc]', time: '[12:45:26]' },
    { text: '⚡ Deploying to Vercel Edge Network...', color: 'text-purple-400', time: '[12:45:28]' },
    { text: '🌐 Live at https://harshad.dev', color: 'text-cyan-400', time: '[12:45:33]' },
    { text: '✓ Deployment successful • Global CDN active', color: 'text-[#00ffcc]', time: '[12:45:31]' }
  ];

  const [visibleLogs, setVisibleLogs] = useState(0);
  const [activeTab, setActiveTab] = useState('HOME');
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-IN', { hour12: false }) + ' IST')
    }, 1000)

    // Typewriter loop
    const tick = () => {
      const current = phrases[phraseIndex.current];
      if (!isDeleting.current) {
        // Typing forward
        charIndex.current += 1;
        setGreeting(current.slice(0, charIndex.current));
        if (charIndex.current === current.length) {
          // Finished typing — pause then start deleting
          typeRef.current = setTimeout(() => { isDeleting.current = true; tick(); }, 1500);
          return;
        }
      } else {
        // Deleting backward
        charIndex.current -= 1;
        setGreeting(current.slice(0, charIndex.current));
        if (charIndex.current === 0) {
          // Finished deleting — move to next phrase
          isDeleting.current = false;
          phraseIndex.current = (phraseIndex.current + 1) % phrases.length;
          typeRef.current = setTimeout(tick, 500);
          return;
        }
      }
      typeRef.current = setTimeout(tick, isDeleting.current ? 40 : 80);
    };
    typeRef.current = setTimeout(tick, 800);

    // Deploy logs effect
    const logInterval = setInterval(() => {
      setVisibleLogs(prev => {
        if (prev < deployLogs.length) {
          return prev + 1;
        }
        clearInterval(logInterval);
        return prev;
      });
    }, 800);

    return () => {
      clearInterval(timer)
      clearTimeout(typeRef.current)
      clearInterval(logInterval)
    }
  }, [])

  const tabs = [
    { id: 'HOME', cli: './whoami' },
    { id: 'PROJECTS', cli: './work_showcase' },
    { id: 'SKILLS', cli: './tech_stack' },
    { id: 'ABOUT', cli: './background' },
    { id: 'CONTACT', cli: './get_in_touch' }
  ];

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#03070a] text-gray-300 font-mono p-2 lg:p-4 flex flex-col selection:bg-[#00ffcc]/30">
      
      {/* Background Grid Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
           style={{
             backgroundImage: `linear-gradient(rgba(0, 255, 204, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 204, 0.1) 1px, transparent 1px)`,
             backgroundSize: '40px 40px',
             transform: 'perspective(500px) rotateX(60deg) scale(2)',
             transformOrigin: 'bottom center'
           }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#00ffcc]/5 via-transparent to-transparent pointer-events-none z-0"/>

      {/* Main Terminal Window */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto h-full flex flex-col border border-[#00ffcc]/20 rounded-lg shadow-[0_0_50px_rgba(0,255,204,0.05)] bg-[#020508]/90 backdrop-blur-sm overflow-hidden">
        
        {/* Top Navbar */}
        <div className={`min-h-[48px] border-b ${borderColor} flex flex-wrap lg:flex-nowrap items-center justify-between px-2 lg:px-4 py-2 lg:py-0 bg-[#0a1218] gap-2 lg:gap-0`}>
          <div className="flex items-center gap-4 lg:gap-6">
            <div 
              onClick={() => setActiveTab('HOME')}
              className={`border border-[#00ffcc] text-[#00ffcc] px-2 lg:px-4 py-1 flex items-center gap-2 relative overflow-hidden group cursor-pointer flex-shrink-0 animate-pulse`}
            >
              <div className="absolute inset-0 bg-[#00ffcc]/20 group-hover:translate-x-full transition-transform duration-500 ease-in-out"/>
              <Terminal size={14} className="hidden lg:block"/> 
              <span className="text-[12px] lg:text-xs font-bold">ACCESS TERMINAL</span>
            </div>
            
            <a 
              href={resumePdf} 
              download 
              className="hidden sm:flex border border-gray-600 text-gray-400 hover:text-[#00ffcc] hover:border-[#00ffcc] px-3 py-1 items-center gap-2 text-[12px] lg:text-xs transition-all bg-black/50"
            >
              <FileText size={12} /> <span className="font-bold">DOWNLOAD_CV.pdf</span>
            </a>

            <div className="hidden lg:flex items-center gap-2 text-xs text-[#00ffcc]/70 whitespace-nowrap">
              <MapPin size={12} /> NASHIK, INDIA <span className="opacity-50 mx-2">••</span> {time}
            </div>
          </div>
          
          <div className="flex flex-1 lg:flex-none justify-start lg:justify-end items-center text-[13px] lg:text-[12px] uppercase text-[#00ffcc]/60 h-full overflow-x-auto no-scrollbar ml-0">
            {tabs.map((tab, i) => (
              <div 
                key={i} 
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col justify-center h-full px-2 lg:px-4 cursor-pointer hover:bg-[#00ffcc]/10 hover:text-[#00ffcc] transition-colors border-r ${borderColor} last:border-0 ${activeTab === tab.id ? 'text-[#00ffcc] bg-[#00ffcc]/10 border-b-2 border-b-[#00ffcc]' : ''}`}
              >
                <span className="font-bold">[{`0${i+1}`}] {tab.id}</span>
                <span className="opacity-70 mt-0.5 hidden lg:block">{tab.cli}</span>
              </div>
            ))}
          </div>

          <button className="hidden lg:flex bg-[#00ffcc] text-black px-4 py-1 text-xs font-bold items-center gap-2 hover:bg-[#00ffcc]/80 transition-colors ml-4">
            <Play size={12} fill="currentColor" /> INITIATE
          </button>
        </div>

        {/* Dashboard Grid */}
        <div className="flex-1 p-2 lg:p-4 pt-4 lg:pt-6 grid grid-cols-1 lg:grid-cols-4 gap-4 overflow-y-auto lg:overflow-hidden min-h-0">
          
          {/* Left Sidebar */}
          <div className="col-span-1 lg:flex flex-col gap-4 hidden overflow-y-auto pr-1">
            
            {/* Developer Profile */}
            <div className={`mt-4 border ${borderColor} rounded bg-[#0a1218]/50 p-4 relative flex-shrink-0 mt-2`}>
              <div className="absolute -translate-y-1/2 top-0 left-4 bg-[#020508] px-2 z-20 text-[12px] text-[#00ffcc] flex items-center gap-2 font-bold tracking-wider">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00ffcc] animate-pulse"/> DEVELOPER PROFILE
              </div>
              
              <div className="flex flex-col items-center gap-4 mt-6 mb-6">
                <div className="w-28 h-28 rounded-full border-2 border-[#00ffcc]/30 p-1.5 relative group">
                  {/* Avatar Profile */}
                  <div className="w-full h-full rounded-full bg-[#00ffcc]/5 border border-[#00ffcc]/20 flex items-center justify-center overflow-hidden relative z-10 shadow-[0_0_20px_rgba(0,255,204,0.1)]">
                    <img src={profileImg} alt="Harshad Thok" className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-[mix-blend-mode] duration-700" />
                  </div>
                  {/* Decorative Arch */}
                  <svg className="absolute -inset-2.5 w-[calc(100%+20px)] h-[calc(100%+20px)] animate-[spin_12s_linear_infinite] opacity-60" viewBox="0 0 100 100">
                     <path d="M 50 5 A 45 45 0 0 1 95 50" fill="transparent" stroke="#00ffcc" strokeWidth="1" strokeDasharray="6,4" />
                  </svg>
                  <svg className="absolute -inset-2.5 w-[calc(100%+20px)] h-[calc(100%+20px)] animate-[spin_8s_linear_infinite_reverse] opacity-30" viewBox="0 0 100 100">
                     <path d="M 50 95 A 45 45 0 0 1 5 50" fill="transparent" stroke="#00ffcc" strokeWidth="0.5" strokeDasharray="2,8" />
                  </svg>
                </div>

                <div className="bg-[#00ffcc]/5 text-[#00ffcc] text-[12px] font-bold px-3 py-1 border border-[#00ffcc]/20 rounded-full flex items-center gap-2 tracking-[0.2em] shadow-[0_0_15px_rgba(0,255,204,0.05)] uppercase">
                  <div className="w-1 h-1 rounded-full bg-[#00ffcc] animate-pulse shadow-[0_0_8px_#00ffcc]" /> 
                  STATUS: AVAILABLE
                </div>
              </div>

              <h2 className="text-2xl font-bold text-[#00ffcc] mb-1">HARSHAD THOK</h2>
              <p className="text-xs text-gray-400 mb-4">&gt; Systems Engineer & Full Stack Dev</p>
              
              <div className="flex items-center gap-2 text-[12px] text-gray-500 mb-6">
                <MapPin size={12} className="text-[#00ffcc]" /> Nashik, India (Open to Remote)
              </div>

              <div className="grid grid-cols-3 gap-2 mb-6 text-center border-y border-[#00ffcc]/20 py-3">
                 <div>
                   <div className="text-[#00ffcc] font-bold text-lg">3+</div>
                   <div className="text-[13px] text-gray-500">Years Code</div>
                 </div>
                 <div className="border-x border-[#00ffcc]/20">
                   <div className="text-[#00ffcc] font-bold text-lg">20+</div>
                   <div className="text-[13px] text-gray-500">Projects</div>
                 </div>
                 <div>
                   <div className="text-[#00ffcc] font-bold text-lg">24/7</div>
                   <div className="text-[13px] text-gray-500">Online</div>
                 </div>
              </div>

              <div className="text-[12px] text-[#00ffcc] mb-2 flex items-center gap-1"><Monitor size={10}/> TECH SPECIALIZATIONS</div>
              <div className="flex flex-wrap gap-2 text-[13px] text-gray-300">
                <span className="border border-[#00ffcc]/30 px-2 py-1 rounded bg-[#00ffcc]/5">Systems Architecture</span>
                <span className="border border-[#00ffcc]/30 px-2 py-1 rounded bg-[#00ffcc]/5">Telemetry (AIOps)</span>
                <span className="border border-[#00ffcc]/30 px-2 py-1 rounded bg-[#00ffcc]/5">Full Stack Engineering</span>
                <span className="border border-[#00ffcc]/30 px-2 py-1 rounded bg-[#00ffcc]/5">C++ Core Engines</span>
              </div>
            </div>

            {/* System Status */}
            <div className={`mt-4 border ${borderColor} rounded bg-[#0a1218]/50 p-4 relative flex-shrink-0 mt-auto`}>
              <div className="absolute -translate-y-1/2 top-0 left-4 bg-[#020508] px-2 z-20 text-[12px] text-[#00ffcc] flex items-center gap-2">
                 <Activity size={10} /> SYSTEM_STATUS.v2.1
              </div>
              <div className="mt-2 text-[13px] font-mono grid grid-cols-1 gap-2">
                <div className="flex"><span className="w-20 text-gray-500">OS:</span> <span className="text-[#00ffcc]">HarshadOS_v26.0</span></div>
                <div className="flex"><span className="w-20 text-gray-500">Shell:</span> <span className="text-gray-300">ZSH Configured UI</span></div>
                <div className="flex"><span className="w-20 text-gray-500">Uptime:</span> <span className="text-gray-300">{uptime}</span></div>
                <div className="flex items-center"><span className="w-20 text-gray-500">Status:</span> <div className="flex items-center gap-1.5 text-[#00ffcc]"><div className="w-2 h-2 rounded-full bg-[#00ffcc] shadow-[0_0_8px_#00ffcc]"/> All Systems Operational</div></div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#00ffcc]/20 text-[12px] text-gray-500">
                Last login: harshad@node:~$ -- now
              </div>
            </div>

          </div>

          {/* Right Main Content (Dynamic Views) */}
          <div className="col-span-1 lg:col-span-3 flex flex-col h-full min-h-0">

            {/* Scrollable content area */}
            <div className="flex-1 overflow-y-auto pr-1 lg:pr-2 pb-2 min-h-0">
              <AnimatePresence mode="wait">
                {activeTab === 'HOME' && <motion.div key="home" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-4"><HomeView greeting={greeting} deployLogs={deployLogs} visibleLogs={visibleLogs} /></motion.div>}
                {activeTab === 'PROJECTS' && <motion.div key="projects" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col"><ProjectsView /></motion.div>}
                {activeTab === 'SKILLS' && <motion.div key="skills" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col"><SkillsView /></motion.div>}
                {activeTab === 'ABOUT' && <motion.div key="about" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col"><AboutView /></motion.div>}
                {activeTab === 'CONTACT' && <motion.div key="contact" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col min-h-[400px]"><ContactView /></motion.div>}
              </AnimatePresence>
            </div>

            {/* Console Input — pinned outside scroll area, never overlaps */}
            <div className={`mt-4 border ${borderColor} rounded bg-[#0a1218]/80 p-3 flex items-center gap-3 relative flex-shrink-0 mt-2`}>
                <div className="absolute left-0 top-0 w-1 h-full bg-[#00ffcc]"/>
                <div className="text-[#00ffcc] text-xs font-bold flex items-center gap-2">
                  <Terminal size={14}/> harshad@portfolio:~$
                </div>
                <input 
                  type="text" 
                  className="flex-1 bg-transparent outline-none text-gray-300 text-xs font-mono placeholder-gray-600 focus:text-[#00ffcc]"
                  placeholder={`Execute commands... (current dir: ${tabs.find(t => t.id === activeTab)?.cli})`}
                />
                <button className="hidden sm:flex bg-[#00ffcc]/10 border border-[#00ffcc] text-[#00ffcc] px-4 py-1 text-xs font-bold items-center gap-2 hover:bg-[#00ffcc] hover:text-black transition-colors rounded">
                  <Play size={10} fill="currentColor" /> EXECUTE
                </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
