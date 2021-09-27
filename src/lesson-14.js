/**
 * ==============================
 * 14. try catchについて
 * ==============================
 */

// 次のような複数行の処理を考える

// console.log('開始します！');
// const message = '想いをつづった恋文です';
// message.forEach(); // 文字列に対してforEachを実行しているのでエラーになる
// console.log('完了しました！'); // 実行されない

// というかこれ以降のコードも実行されないので困る

/* エラーが起こりうる処理を try catch で書く */
try {
  console.log('開始します！');
  const message = '想いをつづった恋文です';
  message.forEach(); // 文字列に対してforEachを実行しているのでエラーになる
  console.log('完了しました！'); // 実行されない
  // try内でエラーが起きた場合は下のcatchに吐き出される
} catch (error) {
  console.log(error);
}

console.log('ん？どこかで何かが起こったようだ'); // 実行される

/* throwを使ってエラーにする */

try {
  console.log('開始します！');
  const message = '想いをつづった恋文です';
  const charNum = message.length;
  console.log(`文字数は${charNum}です！`);

  /* ここまでエラーはないが, throwを使ってcatch以下に強制的に吐き出す */
  throw '「エマージェンシー！！」'; // エラーメッセージを作成
  // throw new Error('「エマージェンシー！！エラーです！！」'); // Error Classを使用する場合

  console.log('throwの後は実行されない');
} catch (error) {
  console.log(error);
}

/* 関数に応用する */

const getMessage = () => {
  try {
    console.log('開始します！');
    const message = '想いをつづった恋文です';
    message.forEach(); // 文字列に対してforEachを実行しているのでエラーになる
    console.log('完了しました！'); // 実行されない
    return message;
  } catch (error) {
    console.log(error);

    /* catchにthrowを書くことで,この関数の使用先にエラーであることを知らせる */
    throw error; // これがないと,（＊）が実行される
    // throw new Error(error); // Error Classを使用する場合
  }
};

try {
  const myMessage = getMessage();
  console.log('メッセージが届きました！', myMessage); // （＊）前の処理が失敗した場合は実行したくない
} catch (error) {
  console.log(error);
}
