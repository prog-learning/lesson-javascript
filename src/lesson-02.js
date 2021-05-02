/**
 * ==============================
 * 02. const と let （変数を定義する）
 * ==============================
 */

/* const（再代入不可） */
const myName = "じゃい子";
// myName = "じゃい子じゃない"; // 再代入（不可）
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
