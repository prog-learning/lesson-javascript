/**
 * ==============================
 * 03. 配列
 * ==============================
 */

/* 配列の定義 */
const hairetu = ["文字列1", "文字列2", 121212];

const array = [1, [2, 3], [4, 5, 6], [7, 8, 9, 10]]; // 配列の要素に配列を入れることも可能

const colors = ["red", "green", "blue", "yellow", "black", "white", "gray"];

// こう書くと見やすい！
const users = [
  "ジョニー",
  "ケビン",
  "スチュアート",
  "ジョニー",
  "ケビン",
  "スチュアート",
  "ジョニー", // 最後の要素にも`,`を付けると良い
];

// 配列を呼び出す
console.log(colors[0]); // 1番目
console.log(array[2][1]); // 3番目の配列の2番目

const num = 4;
console.log(users[num]); // 変数を使用することも

// 配列の変更や追加
const fruits = ["apple", "banana", "cherry"];
fruits[2] = "dragonfruits"; // 変更
console.log(fruits);
fruits[3] = "orange"; // 追加
console.log(fruits);
// 再代入ではないのでconstでも変更可能
