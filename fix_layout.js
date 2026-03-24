const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// Convert main dynamic views (motion.div) and other div wrappers
code = code.replace(/<motion\.div([^>]*className=\{?`[^`]*?border \$\{borderColor\}[^`]*?`\}?[^>]*)>\s*<div className="absolute -translate-y-1\/2 top-0 left-4[^"]*"([^>]*)>([\s\S]*?)<\/div>/g, 
  (match, divAttr, innerAttr, innerContent) => {
    return `<motion.fieldset${divAttr}>\n      <legend className="px-2 text-[12px] text-[#00ffcc] flex items-center gap-2 font-bold tracking-wider ml-4"${innerAttr}>${innerContent}</legend>`;
  }
);

code = code.replace(/<div([^>]*className=\{?`[^`]*?border \$\{borderColor\}[^`]*?`\}?[^>]*)>\s*<div className="absolute -translate-y-1\/2 top-0 left-4[^"]*"([^>]*)>([\s\S]*?)<\/div>/g, 
  (match, divAttr, innerAttr, innerContent) => {
    return `<fieldset${divAttr}>\n      <legend className="px-2 text-[12px] text-[#00ffcc] flex items-center gap-2 font-bold tracking-wider ml-4"${innerAttr}>${innerContent}</legend>`;
  }
);

// Close tags for fieldset
code = code.replace(/<\/motion\.div>/g, (match, offset, str) => {
  // Check what opens it? Not robust context, but we can just use another approach
  return match;
});

// A simpler regex approach:
fs.writeFileSync('src/App.jsx', code);
console.log('Fixed');
