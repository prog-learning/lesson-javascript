/**
 * ==============================
 * 12. import と export
 * ==============================
 */
/* Export */
// `lesson-12export.js` ファイルを参照

/* Import */
// Named Import
import { myName, } from "./lesson-12export";
console.log(myName);

// まとめてインポート
import { foods, sayHello } from "./lesson-12export";
console.log(foods);
sayHello();

// default Import
import defaultName from "./lesson-12export";

console.log(defaultName);
