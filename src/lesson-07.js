/**
 * ==============================
 * 07. 関数
 * ==============================
 */

/* 関数を作り方3種 */
// 好きな方を使ってね☆

// 1. 関数宣言
function kansuu1() {
  //  処理（関数は処理を束ねたり,使い回すことに使う）
  console.log("関数`kansuu1`が実行されました！");
  // alert("関数`kansuu1`が実行されました！"); // アラートを表示する関数
}

// 2.関数の定義
const kansuu2 = function () {
  //  処理
  console.log("関数`kansuu2`が実行されました！");
  // alert("関数`kansuu2`が実行されました！"); // アラートを表示する関数
};

// 3.関数の定義（アロー関数）...※これが,新しい定義方法なので,今後はこちらを統一して使います
const kansuu3 = () => {
  //  処理
  console.log("関数`kansuu3`が実行されました！");
  // alert("関数`kansuu3`が実行されました！"); // アラートを表示する関数
};

// ※2,3において,`function () { }`や, `() => { }` は無名関数と呼ばれる

/* 関数を実行する */
kansuu1(); // 関数名() で実行される
kansuu2();
kansuu3();
// 作っただけでは実行されないので注意


// 例
const timeZone = ['朝', '昼', '夜'];

const now = timeZone[Math.floor(Math.random() * 3)];

const greeting = () => {
  console.log("これから,時間帯に応じた挨拶をします！");
  if (now === "朝") {
    console.log(`今は,${now}です。\ngood morning.`);
  } else if (now === "昼") {
    console.log(`今は,${now}です。\nこんにちは！`);
  } else {
    console.log(`今は,${now}です。\nおやすみzzz`);
  }
  console.log("先生：「よく挨拶できましたね！」");
};

greeting();


/* 引数 */

const add = (x, y) => {
  console.log(x + y);
};

add(12, 24); // 36

const selfIntroduction = (name, birth) => {
  const birthday = birth + "月";
  console.log(`こんにちは`);
  console.log(`私の名前は${name}です。`);
  console.log(`誕生月は${birthday}です。`);
};

selfIntroduction("のぶ", 8);

/* 戻り値（返り値） */
const add1 = (a, b) => {
  // 処理を書くところ（returnの前）
  console.log(`${a}+${b}を計算します！結果は戻り値で受け取ってください！`);

  return (
    // 戻り値を書くところ（returnの後）
    a + b
  );
  console.log('return後の処理は実行されない'); // 暗く表示されているのがわかる
};

// 戻り値を受け取る
add1(3, 7); // 実行しても結果は見れない

// 受け取った戻り値をConsoleに出力する必要がある
console.log(add1(3, 7)); // 10

// 変数で受け取ることもできる
const result = add1(5, 8); // 関数が実行され,結果は変数に入る
console.log(result); // 13


/* 関数の省略形 */
// 原形
const arrow1 = (apple) => {
  // 処理
  console.log(`${apple}を射抜いてみせましょう`);
  return (
    // 戻り値
    `=${apple}=>`
  );
};

// 引数が一つの場合
const arrow2 = apple => {
  // 処理
  console.log(`${apple}を射抜いてみせましょう`);
  return (
    // 戻り値
    `=${apple}=>`
  );
};

// 戻り値がない場合
const arrow6 = (apple) => {
  // 処理
  console.log(`${apple}を射抜いてみせましょう`);
};

// 戻り値が一つの場合
const arrow3 = (apple) => {
  // 処理
  console.log(`${apple}を射抜いてみせましょう`);
  return `=${apple}=>`; // 戻り値
};

// 処理がない場合
const arrow4 = (apple) => (
  `=${apple}=>`
);

// すべての省略を組み合わせてみる
const arrow5 = apple => `=${apple}=>`;

['aaa', 'bbb'].map(

  () => {

    return (
      <li>

      </li>
    );
  }

);
