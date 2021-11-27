/**
 * ==============================
 * 01. console.log() （コンソールに表示する）
 * ==============================
 */

/* 文字列を表示 */
console.log('こんそーるに表示されました'); // 文字列をシングルクォーテーションで囲う
console.log("ダブルクォーテーションです"); // ダブルクォーテーションでもOK
console.log(`バッククォートです`); // バッククォートでもOK（これは後に説明するが,大事な性質がある）

// console.log('I'am a superman') // できないので注意
console.log("I'am a superman"); // これでOK
console.log('メロスは"走れ"と言った'); // これでOK


/* \n で改行入れる */
console.log('おはよう\nこんにちは\n\nこんばんは');


/* 数値 */
console.log(123456); // 数値の場合
console.log(123 + 123); // 計算可能


/* 演算子 */
// 足し算
console.log(111 + 111); // 222
// 引き算
console.log(456 - 123); // 333
// 掛け算
console.log(100 * 100); // 10000
// 割り算
console.log(1000 / 100); // 100
// 割ったあまり
console.log(11 % 3); // 2
// 累乗
console.log(2 ** 10); // 1024

// 単に計算式を記述するだけでは,計算結果が表示されない
1 + 5 * 8; // コンソールに表示はされない
console.log(1 + 5 * 8); // コンソールに表示はされる

console.log('これは' + '文字列の' + '結合'); // 足し算ではなく文字列の結合
console.log(123 + '文字列'); // 123文字列 というように文字列として結合される


/* おまけ エラーとして表示する */
console.error('今,ありがたいエラーをいただきました');


/**
 * #コメントアウトについて
 * コメントアウトを使うことでコードにメモを残すことができる
 * 
 * その行をコメントアウトするショートカットキー 
 * Mac... ⌘ + /
 * Windows... Ctrl + /
 * 
 * 学習時はメモなどにガンガン使っていこう！
 */
