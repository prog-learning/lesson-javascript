/**
 * ==============================
 * 02. const や let で変数を定義する
 * ==============================
 */

/* const（再代入不可） */
const sistarName = 'じゃい子';
// const sistarName = "じゃい子じゃない子"; // 再定義不可
// sistarName = "じゃい子じゃない子"; // 再代入不可
// ※エラーが起こるとそのさきのコードは実行されない


/* 定義した変数を文字列に組み込む */

// 結合子を使う
console.log('私の名前は' + sistarName + 'です。'); // 私の名前はじゃい子です。

// テンプレートリテラルで変数を文字列に組み込む
console.log(`私の名前は${sistarName}ではありません。`); // 私の名前はじゃい子ではありません。

//計算も可能
const level = 12;
console.log(`経験を積んで${level + 5}レベルになった！`);
console.log(`やつあたり！\n上司に${level ** 2}のダメージ！`);
// ${ } の中はJavaScriptが簡単に書けるイメージ


/* let（再代入可） */
let butagorira = 'じゃイヤン';

console.log(butagorira); // じゃイヤン

// 再代入（可能）
butagorira = '死んじゃイヤン';

console.log(butagorira); // 死んじゃイヤン

// 文字列じゃなくてもOK
butagorira = 123;

console.log(butagorira + 321);
// でも,この行だけ見たら,計算をしていることはわからない（可読性が低いコード）

// 数字を変化（計算）させる書き方
let i = 1;
i = i + 5; // 5を足す（ i に i + 5 を再代入）
console.log(i); // 6

// i = i + 5 の省略形（さらに5を足す）
i += 5;
console.log(i); // 11

// 1を足す場合の省略形は更に短くできる
i++;
console.log(i); // 12

// 1を引く場合
i--;
console.log(i); // 11


/* 昔の変数定義の書き方（一応知っておこう） */
var old = 'バー';
