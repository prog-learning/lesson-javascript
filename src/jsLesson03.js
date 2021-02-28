/**
 * #03 配列
 */

// 配列を定義
const hairetu = ["文字列1", "文字列2", "文字列3"];

const array = [1, 2, 3];

const colors = ["red", "green", "blue", "yellow", "black", "white", "gray"];

// こう書くと見やすい！
const users = [
  "ジョニー",
  "ケビン",
  "スチュアート",
  "ジョニー",
  "ケビン",
  "スチュアート",
  "ジョニー"
];

// 配列を呼び出す
console.log(colors[0]);
console.log(users[4]);

// 配列の変更や追加（配列の中身はconstでも変更可能）
const fruits = ["apple", "banana", "cherry"];
fruits[2] = "dragonfruits"; // 変更
console.log(fruits);
fruits[3] = "orange"; // 追加
console.log(fruits);

// 応用
const foods = [
  "rice",
  ["トマト", "きゅうり", "なす", "レタス"],
  ["orange", "strawberry", "grape", "mango"]
];

// きゅうりを呼び出す.

// 03_？（06後に開放）
// for (let i = 0; i < colors.length; i++) {
//     console.log(`こんにちは.${users[i]}`)
//     console.log(`あなたの色は${colors[i]}`)
// }
