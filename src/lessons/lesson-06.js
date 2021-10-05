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

/* 変数に加える処理の書き方を確認 */
let x;
x = x + 1;
x += 1; // 省略形（1以外でも使える）
x++; // 1のときのみ使える


/* while文 */
let i = 0;
while (i < 10) { // ここの条件を満たしているときにしたの処理を繰り返す
  console.log("私は天才だ");
  i++; // 条件に関する変数を書き換える処理を自分で書かなければならない
  // ※これを書かないと延々と繰り返すため危険
}

/* for-of文（応用） */
// 配列の個数の分だけ繰り返したいとき
const words = ["apple", "orange", "grape", "pineapple"];
for (let word of words) { // wordは単数を意味する変数名を好きに指定（引数的な役割となる）
  console.log(`I eat ${word}`);
}



/* 以下Practiceへ以降を検討 */

// 応用問題（for-of文）

// for-of文で配列から要素を取り出す
for (let word of words) {
  // 大文字に変換するかどうかを判断する変数
  let flg = true;
  // 変換後の文字列を格納する変数
  let word2 = "";
  // for-of文で文字列から文字を取り出す
  for (let char of word) {
    word2 += flg ? char.toUpperCase() : char;
    flg = !flg;
  }
  // 結果を表示
  console.log(word, " to ", word2); // 何が起こるのか？
}

// 引用元：https://techacademy.jp/magazine/20736
