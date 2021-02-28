/**
 * #06 for文 と while文
 */

//  構文
// for (変数を定義 ; 終了する条件; 変数の変化式) {
//   繰り返す処理
// }

//  ナベアツゲーム
for (let i = 0; i < 30; i++) {
  if ((i + 1) % 3 === 0) {
    console.log(`${i + 1}🤤！`);
  } else {
    console.log(`${i + 1}😐`);
  }
}

// 03_？を開放

1 + 1; // 足し算
1 - 1; // 引き算
1 * 1; // 掛け算
1 / 1; // 割り算
1 % 1; // 1÷1のあまり
1 ** 1; // 1の1乗

// 変数に加える
let x;
x = x + 1;
x += 1;
x++;

// while文
let i = 0;
while (i > 10) {
  console.log("私は天才だ");
  i++;
}

// 応用問題（for-of文）
const words = ["apple", "orange", "grape", "pineapple"];

// for-of文で配列から要素を取り出す
for (let word of words) {
  // 大文字に変換するかどうかを判断する変数
  let flg = true;
  // 変換後の文字列を格納する変数
  let word2 = "";
  // for-of文で文字列から文字を取り出す
  for (let ch of word) {
    word2 += flg ? ch.toUpperCase() : ch;
    flg = !flg;
  }
  // 結果を表示
  console.log(word, " to ", word2);
}

// 引用元：https://techacademy.jp/magazine/20736
