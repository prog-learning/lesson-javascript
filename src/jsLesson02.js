/**
 * #02 const と let （変数を定義する）
 */

//  const
const name = "のぶ";

// 変数を組み込む
console.log("私の名前は" + name + "です。");

// テンプレートリテラルで変数を組み込む
console.log(`私の名前は${name}です。`);

// name = "のぶこ"
// constは書き換えができない（定数）

// let
let number = 123;

console.log(number);
console.log(number + 321);

number = 321;
number = "かずとし";
// 書き換えが可能

console.log(number);

// 昔の変数定義の書き方
var old = "バー";
