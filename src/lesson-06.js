/**
 * ==============================
 * 06. for文 と while文
 * ==============================
 */

/* 構文
for (変数を定義; 繰り返す条件; 処理後に毎回行う処理) {
  繰り返す処理
}
*/

// 使用例
const member = ['ホウレンソウ', 'エリマキトカゲ', 'トリプトファン', 'ソーシャルディスタンス', 'デヒドロエピアンドロステロン'];

for (let i = 0; i < member.length; i++) { // member.length で配列の要素の個数を取得できる
  const introduce = `${member[i]}さんです`;
  console.log(introduce);
}

// ナベアツゲーム;
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) {
    console.log(`${i}🤤！`);
  } else {
    console.log(`${i}😐`);
  }
}

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
