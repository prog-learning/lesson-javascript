/**
 * #08 alert,confirm,prompt
 */

//  Modalを表示

// alert()

alert("起きろ！！");

// confirm()

if (confirm("起きますか？")) {
  // if (window.confirm("起きますか？")) {
  console.log("おはようございます！");
} else {
  console.log("早く起きろ！");
}

// prompt()

const condition = prompt("今日の調子を1〜10で表すと？（10が一番元気）");

console.log(condition);

if (condition === "10") {
  console.log("絶好調！ガンガン行こう！");
} else if (condition > 7) {
  console.log("その調子で行こう！");
} else if (condition > 4) {
  console.log("まずまず順調");
} else if (condition > 1) {
  console.log("しっかり休憩を取り入れよう");
} else if (condition === "1") {
  console.log("翼を授けよう！");
} else {
  console.log("入力ミスです！ちゃんと文章を読みましょう！");
}
