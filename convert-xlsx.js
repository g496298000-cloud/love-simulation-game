import XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 转换突发事件库
const eventsWorkbook = XLSX.readFile(path.join(__dirname, '突发事件库.xlsx'));
const eventsSheet = eventsWorkbook.Sheets[eventsWorkbook.SheetNames[0]];
const eventsData = XLSX.utils.sheet_to_json(eventsSheet);
fs.writeFileSync(
  path.join(__dirname, 'src', 'data', 'events.json'),
  JSON.stringify(eventsData, null, 2),
  'utf8'
);
console.log('✓ 突发事件库转换完成');

// 转换结局库
const endingsWorkbook = XLSX.readFile(path.join(__dirname, '结局库.xlsx'));
const endingsSheet = endingsWorkbook.Sheets[endingsWorkbook.SheetNames[0]];
const endingsData = XLSX.utils.sheet_to_json(endingsSheet);
fs.writeFileSync(
  path.join(__dirname, 'src', 'data', 'endings.json'),
  JSON.stringify(endingsData, null, 2),
  'utf8'
);
console.log('✓ 结局库转换完成');

// 转换状态机
const stagesWorkbook = XLSX.readFile(path.join(__dirname, '状态机.xlsx'));
const stagesSheet = stagesWorkbook.Sheets[stagesWorkbook.SheetNames[0]];
const stagesData = XLSX.utils.sheet_to_json(stagesSheet);
fs.writeFileSync(
  path.join(__dirname, 'src', 'data', 'stages.json'),
  JSON.stringify(stagesData, null, 2),
  'utf8'
);
console.log('✓ 状态机转换完成');

// 转换误导内容库
const misleadsWorkbook = XLSX.readFile(path.join(__dirname, '误导内容库.xlsx'));
const misleadsSheet = misleadsWorkbook.Sheets[misleadsWorkbook.SheetNames[0]];
const misleadsData = XLSX.utils.sheet_to_json(misleadsSheet);
fs.writeFileSync(
  path.join(__dirname, 'src', 'data', 'misleads.json'),
  JSON.stringify(misleadsData, null, 2),
  'utf8'
);
console.log('✓ 误导内容库转换完成');

console.log('\n所有文件转换完成!');
