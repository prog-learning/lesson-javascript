/**
 * #05 if文 と switch文
 */

// 構文
// if (条件式) { 処理 }

const x = 5;

if (x > 10) {
  console.log("You win!!");
} else if (x > 3) {
  console.log("Draw");
} else {
  console.log("You lose...");
}

let score = true; // 初期値

if (x > 10) {
  score = true;
} else {
  score = false;
}

// score = 3

if (score) {
  console.log("満点！天才！完璧！");
} else if (score >= 80) {
  console.log("優秀ですね.");
} else if (score >= 50) {
  console.log("普通だよ.");
} else if (score > 30) {
  console.log("次は頑張りましょう！");
} else if (score > 5) {
  console.log("そんな日もある");
} else {
  console.log("お前はクズだ");
}

// 真偽値と条件式

true, false; //真偽値 boolean

let name = true; // 真偽値を代入できる

// 条件式
// ===
// !==
// >
// <
// <=
// >=

// 論理演算子
// &&
// ||

// 三項演算子で省略
name ? console.log("名前です") : console.log("名前ではないです");

// switch文

const signal = "blue";

switch (signal) {
  case "blue":
    console.log("渡ってよし");
    break;
  case "yellow":
    console.log("気をつけて渡ってよし");
    break;
  case "red":
    console.log("渡るな危険");
    break;
  default:
    // その他
    console.log("故障かな？");
    break;
}


/* 実践編 */
// 条件分岐による定義や代入

const info = { id: '123', age: 88 };
const userName = info.userName ? info.userName : 'no_name';
// const userName = info.userName || 'no_name';
console.log(userName);

const signalColor = 'red';
const action = { red: 'Stop', yellow: 'Be careful', blue: 'Go!!' }[signalColor];
console.log(action);
