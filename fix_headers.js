const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

const replacements = [
  {
    from: 'className="absolute -translate-y-1/2 top-0 left-4 bg-[#020508] px-2 z-20 text-[12px] text-[#00ffcc] flex items-center gap-2 font-bold tracking-wider"',
    to: 'className="w-full border-b border-[#00ffcc]/30 pb-3 mb-4 text-[12px] text-[#00ffcc] flex items-center gap-2 font-bold tracking-widest uppercase"'
  },
  {
    from: 'className="absolute -translate-y-1/2 top-0 left-4 bg-[#020508] px-2 z-20 text-[12px] text-[#00ffcc] flex items-center gap-2 font-bold tracking-widest uppercase"',
    to: 'className="w-full border-b border-[#00ffcc]/30 pb-3 mb-4 text-[12px] text-[#00ffcc] flex items-center gap-2 font-bold tracking-widest uppercase"'
  },
  {
    from: 'className="absolute -translate-y-1/2 top-0 left-4 bg-[#020508] px-2 z-20 text-[12px] text-[#00ffcc] flex items-center gap-2"',
    to: 'className="w-full border-b border-[#00ffcc]/30 pb-3 mb-4 text-[12px] text-[#00ffcc] flex items-center gap-2 font-bold tracking-widest uppercase"'
  },
  {
      from: 'className={`mt-4 border ${borderColor} rounded bg-[#0a1218]/50 p-4 lg:p-6 flex-1 flex flex-col relative overflow-y-auto`}',
      to: 'className={`mt-4 border ${borderColor} rounded bg-[#0a1218]/50 p-4 lg:p-6 flex-1 flex flex-col relative`}'
  },
  {
      from: '<div className="flex-1 overflow-y-auto pr-1 lg:pr-2 pb-2 min-h-0 pt-6 fade-scroll">',
      to: '<div className="flex-1 overflow-y-auto pr-1 lg:pr-2 pb-2 min-h-0">'
  }
];

replacements.forEach(r => {
  code = code.split(r.from).join(r.to);
});

fs.writeFileSync('src/App.jsx', code);
console.log('Script executed, absolute clipping traps neutralised.');
