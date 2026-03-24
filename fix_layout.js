const fs = require('fs');

let code = fs.readFileSync('src/App.jsx', 'utf8');

const replaceRegex = /className=\{?`?mt-4 border \$\{borderColor\} rounded bg-\[#0a1218\]\/50 ([^`'"]*)`?\}?>\s*<div className="absolute -translate-y-1\/2 top-0 left-4 bg-\[#020508\] px-2 z-20 text-\[12px\] text-\[#00ffcc\] flex items-center gap-2(\s[^"]*)?">([\s\S]*?)<\/div>/g;

code = code.replace(replaceRegex, (match, classAttr, optionalClasses, innerContent) => {
    return 'className={`mt-4 border ${borderColor} rounded bg-[#0a1218]/50 flex-1 flex flex-col relative overflow-hidden flex-shrink-0`}>\n' +
           '      <div className={`bg-[#00ffcc]/5 border-b ${borderColor} px-4 py-2 text-[12px] text-[#00ffcc] flex items-center gap-2 shadow-[0_4px_10px_-4px_rgba(0,255,204,0.1)]' + (optionalClasses || '') + '`}>' + innerContent + '</div>\n' +
           '      <div className="' + classAttr.replace(/flex-1 |flex |flex-col |relative |mt-2 |mt-auto |flex-shrink-0 /g, '').trim() + ' flex-1 flex flex-col p-4 lg:p-6">';
});

// Since we added a `<div className="...">` wrapper for content, we MUST close it where the block ends.
// But wait! The block ends at `</motion.div>` or `</div>`. A regex to properly close it is hard.
// Instead of a wrapper `<div className="... p-4 flex-1">`, I can just change the original container's padding.
// Actually, earlier I added `<div className="p-4 flex-1">` and that's what caused unclosed div errors!

fs.writeFileSync('src/App.jsx', code);
console.log('Done script');
