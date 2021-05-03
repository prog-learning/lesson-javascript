/**
 * ==============================
 * 05. if文 と switch文 （条件分岐）
 * ==============================
 */

/* if文 */
// 構文： if (条件式) { 処理 }
if ('条件1') {
  // 条件を満たしたときの処理
} else if ('条件2') {
  // 条件を満さなかったときの処理
} else {
  // 上記の条件のいずれも満さなかったときの処理
}
// else if 以下は書かなくても良い

const kaminoke = 5000;

if (kaminoke > 100) {
  console.log("fusafusa");
} else if (kaminoke > 30) {
  console.log("普通です");
} else {
  console.log("👴🏼");
}

/* else if で次の条件を指定 */
const score = Math.floor(Math.random() * 100) + 1; // 1〜100の整数がランダムで決まる

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

const bool = true; // 真偽値を代入できる

/* 条件式について */
const x = 20;
x === 20; // true
x !== 20; // false
x > 10; // true
x >= 10; // true
x < 10; // false
x <= 10; // false

/* 論理演算子 */
const y = 30;

// && ...両方を満たすかどうか
x > 15 && y > 15; // true

// || ...どちらかを満たすかどうか
x > 25 || y > 25; // true


/* 三項演算子を使った条件分岐 */
const random = Math.floor(Math.random() * 10) + 1; // 1〜10の整数がランダムで決まる
random > 5 ? console.log("5より大きいです") : console.log("5以下です");

// 実例
const info = { id: '123', age: 88 };
const userName = info.name ? info.name : 'no_name';
console.log(userName);
// その他の実用的な構文
const idCheck = info.id && 'IDは取得可能'; // あった場合の代入
const userData = info.data || 'no_data'; // なかった場合の代入
console.log(idCheck, userData);


/* switch文 */
const signals = ['red', 'yellow', 'blue'];
const dice = Math.floor(Math.random() * 3); // 0〜2の整数がランダムで決まる
const signal = signals[dice];

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

/* undefind と null */
let empty;
console.log(empty); // なにも代入してないのでundefindという値になる

empty = null;
console.log(empty); // なにもないことを強調したい場合などはnullを設定する

if (undefined) {
  console.log('undefindですよ');
} else if (null) {
  console.log('nullですよ');
} else {
  console.log('undefind と null は false の判定になる');
}

/* その他の真偽値判定 */
if ('aaa') {
  console.log('文字列はtrue');
}
if ('') {
  console.log('空の文字列はfalse');
}

if (['hai', 'retu']) console.log('配列はtrue');
if ([]) console.log('空の配列もtrue');
/* 補足
  - elseを使わないと整っているように見える
  - 1行でif文を書くことも可能（ { }の省略 ）
*/
