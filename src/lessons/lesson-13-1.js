/**
 * ==============================
 * 13-1. 非同期処理について
 *    Promise と then, catch
 * ==============================
 */


/* 非同期処理...時間のかかる処理 */
console.log("First!!");

setTimeout(() => {
  console.log("3秒遅れました（；_；）");
}, 3000); // 3秒後に表示

/* Promiseについて
  以下の3つの状態を返すオブジェクト
  - resolve...成功
  - reject...失敗
  - pending...待機中
*/

// 関数の戻り値をPromise化してみる
const promiseFunction = (a, b) => {
  // 通常の処理
  const add = a + b;

  // Promiseインスタンスを作成（Promise化）
  const result = new Promise((resolve, reject) => {
    setTimeout(() => {
      // 成功と失敗をif文を使って自分で決めておく
      if (a < 10 && b < 10) {
        console.log("足し算できたよ(resolveの実行)");
        resolve(add); // 成功のときは結果をresolve()に入れておく
      } else {
        console.log("数が大きすぎてできない(rejectの実行)");
        reject("足せませんでした"); // 失敗のときのメッセージなどをreject()に入れておく
      }
    }, 3000);
  });
  return result; // Promiseインスタンスを戻り値に
};

console.log(promiseFunction(2, 3)); // 返ってくるのはPromise

// Promiseは封筒のようなもので,開封しないと中身はわからない


/* Promiseの中身を受け取る方法 */

/* then */
// 成功の場合resoloveが実行.引数はなんでもOK
promiseFunction(2, 3).then((resolve) => console.log(resolve));

/* catch */
// 失敗の場合rejectが実行.引数はなんでもOK
promiseFunction(20, 30).catch((reject) => console.log(reject));

// 成功と失敗のどっちも対応できるようにつなげて書いておく
promiseFunction(2, 3)
  .then((resolve) => console.log(resolve)) // 成功した場合はここで終わり
  .catch((reject) => console.log(reject)); // 失敗したときだけここが実行

// 次回 async await
