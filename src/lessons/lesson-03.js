/**
 * ==============================
 * 03. 配列（Array）
 * ==============================
 */

/* 配列の定義 */
const hairetu = ["文字列1", "文字列2", 121212]; // 3つの要素を持つ定義

const array = [1, [2, 3], [4, 5, 6], [7, 8, 9, 10]]; // 配列の要素に配列を入れることも可能

const colors = ["red", "green", "blue", "yellow", "black", "white", "gray"]; // 実用例はこんな

// こう書くと見やすい！
const users = [
  "ロビン",
  "グァン",
  "ラットン",
  "ミシェル",
  "プラトン",
  "ンドゥバ",
  "グェンドリン・クリスティー", // 最後の要素にも , を付けると追加や並び替えがしやすくなる
];


/* 配列を呼び出す */
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


/* メソッドを使用した配列の操作 */
/* これ以降は,関数やメソッドを学習したあとに学ぶと良いかも */

const animal = ['dog', 'cat', 'pig'];
console.log(animal);

// 末尾に追加 .push()
animal.push('rabbit');
console.log(animal);

// 末尾を削除 .pop()
animal.pop();
console.log(animal);

// 配列を指定した文字を挟んだ文字列に join()
const str = animal.join('と');
console.log(str);

// 他にもめっちゃあるので以下参照
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array
