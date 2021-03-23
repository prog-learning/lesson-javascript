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


/**
 * ==============================
 * 04. オブジェクト
 * ==============================
 */

/* オブジェクトを定義 */
// { key1: property1, key2: property2, ... }
const user = { name: "ソーシャルディスタンス", level: 999, hobby: ['programming', 'football'] };
// 名前の付いたの配列のようなもの 順番という概念はない

// 特定の値を呼び出す（ドット記法）
console.log(user.name);

// 変数を使った呼び出し（ブランケット記法）
const key = "level";
console.log(user[key]);
console.log(user['level']); // 直接文字列でも可

// 'programming'を呼び出すには？


// オブジェクトを書き換え
user.name = "のぶこ";

// オブジェクトを追加
user.weight = 100;

console.log(user);

// 実用例
const users = [
  {
    id: 123,
    user_name: "あられちゃん",
    email: "aaa@aaa.jp",
    country: "US",
    favorite_food: ["apple", "cherry"],
    state: { age: 123, address: "西日暮里ロサンゼルス" },
  },
  {
    id: 124,
    user_name: "ひょうくん",
    email: "hhh@hhh.co.jp",
    country: "JP",
    favorite_food: ["apple", "banana", "cherry"],
    state: { age: 3, address: "" },
  },
  {
    id: 124,
    user_name: "ゆきさん",
    email: "yyy@yyy.com",
    country: "EU",
    favorite_food: ["cherry"],
    state: {},
  },
];
console.log(users[1].favorite_food[2]);
console.log(users[1].state.age);

