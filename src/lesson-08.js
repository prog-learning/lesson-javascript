/**
 * ==============================
 * 08. alert / confirm / prompt
 * ==============================
 */

/* Modalを表示するメソッドを紹介 */
// メソッド...関数のようなもの

/* alert() */

alert("アラートです！！");

/* confirm() */
confirm("確認を取ります！");

// 例
if (confirm("起きますか？")) { // 選択した値によって true / false が決定
  console.log("おはようございます！");
} else {
  console.log("早く起きろ！");
}

/* prompt() */
prompt("入力してください");

const condition = prompt("今日の調子を1〜10で表すと？（10が一番元気）");
// 入力した値が conditionに入る

console.log(condition);

if (condition === "10") {
  console.log("絶好調！ガンガンいこう！");
} else if (condition > 7) {
  console.log("その調子でいこう！");
} else if (condition > 4) {
  console.log("まずまずですね");
} else if (condition > 1) {
  console.log("しっかり休憩を取り入れよう");
} else if (condition === "1") {
  console.log("翼を授けよう！");
} else {
  console.log("入力ミスです！ちゃんと文章を読みましょう！");
}
