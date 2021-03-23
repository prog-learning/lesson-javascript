/**
 * ==============================
 * 01. console.log() （コンソールに表示する）
 * ==============================
 */

console.log('こんそーるに表示されました'); //文字列を表示する
console.log("ダブルクォーテーションです"); // 上はシングルクォーテーション

// console.log('I'am a superman') // できないので注意
console.log("I'am a superman"); // これでOK

console.log(123456); // 数値
console.log(123 + 123); // 計算可能

/* 演算子 */
console.log(456 - 123); // 引き算
console.log(100 * 100); // 掛け算
console.log(1000 / 100); // 割り算
console.log(2 ** 10); // 累乗

1 + 5 * 8; // これはなにが起こっているのか？

console.log("これは" + "文字列の" + "結合"); // 足し算ではなく文字列の結合
console.log(123 + "文字列"); // 足し算ではなく文字列の結合


/* コメントアウトのショートカットキー */
// `⌘ + /`でその行をコメントアウト

/* 実践 */
console.log('おはよう\nこんにちは\n\nこんばんは');


/**
 * ==============================
 * 02. const と let （変数を定義する）
 * ==============================
 */

/* const（再代入不可） */
const myName = "じゃい子";
myName = "じゃい子じゃない"; //再代入（不可）
// ※エラーが起こるとそのさきのコードは実行されない

// 変数を文字列に組み込む
console.log("私の名前は" + myName + "です。");

// テンプレートリテラルで変数を文字列に組み込む
console.log(`私の名前は${myName}ではありません。`);

//計算も可能
const level = 23;
console.log(`経験を積んで${level + 2}レベルになった！`);
console.log(`やつあたり！\n上司に${level + 2}のダメージ！`);

/* let */
let youName = "じゃイヤン";
youName = "死んじゃイヤン"; //再代入（可能）

console.log(youName);

youName = 123; //文字列じゃなくてもOK
console.log(youName + 321); // でも,この行だけ見たら意味不明（可読性が低い）


// 昔の変数定義の書き方（一応知っておこう）
var old = "バー";

/* 実践 */
const userName = '名前を入力'; // ここにそれぞれの名前が入る
console.log(`こんにちは${userName}さん！`);
console.log(`${userName}さん、今日の調子はどうですか？`);

/**
 * ==============================
 * 02. const と let （変数を定義する）
 * ==============================
 */

/**
 * 03 配列
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
