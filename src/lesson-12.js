/**
 * ==============================
 * 12. export と module
 * ==============================
 */

/* Export */
// `lesson-12export.js` ファイルを参照

/* Import */
const user = require('./lesson-12export');
console.log(user);

// 分割代入で
const { name } = require('./lesson-12export');
console.log(name);

const { introduce } = require('./lesson-12export');
introduce();