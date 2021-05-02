/**
 * ==============================
 * 02. const や let で変数を定義する
 * ==============================
 */

/* const（再代入不可） */
const sistarName = "じゃい子";
// sistarName = "じゃい子じゃない"; //再代入（不可）
// ※エラーが起こるとそのさきのコードは実行されない

/* 定義した変数を文字列に組み込む */
console.log("私の名前は" + sistarName + "です。");

// テンプレートリテラルで変数を文字列に組み込む
console.log(`私の名前は${sistarName}ではありません。`);

//計算も可能
const level = 12;
console.log(`経験を積んで${level + 5}レベルになった！`);
console.log(`やつあたり！\n上司に${level ** 2}のダメージ！`);
// ${ } の中はJavaScriptが簡単に書けるイメージ


/* let（再代入可） */
let butagorira = "じゃイヤン";
console.log(butagorira);

butagorira = "死んじゃイヤン"; // 再代入（可能）
console.log(butagorira);

butagorira = 123; // 文字列じゃなくてもOK
console.log(butagorira + 321); // でも,この行だけ見たら,計算をしていることはわからない（可読性が低いコード）

/* 昔の変数定義の書き方（一応知っておこう） */
var old = "バー";
