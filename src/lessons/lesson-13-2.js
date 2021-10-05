/**
 * ==============================
 * 13-2. 非同期処理について
 *    Promise と async, await
 * ==============================
 */


/* async */
// 関数宣言の最初にasyncをつけるとreturnがPromise化されるように

const asyncFunction = async (a, b) => {
  console.log("asyncFunctionによる計算をします");
  return a + b;
};

// 結果を.thenを使って受け取ることができる
asyncFunction(2, 3).then((resolve) => console.log(resolve));

// ※ この場合の失敗とはエラーのことを指し,エラーの内容がreject()される


/* await */
// async関数の中でPromiseを返す関数を使用するときに,その処理を待つ

// まずは, 前回のように擬似的な時間のかかりPromiseが返る関数を作成
const sleepAdd = (a, b) => {
  console.log("これから眠そうな人に計算をしてもらいます！");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("ごめん寝てた");
      return resolve(a + b);
    }, 2000); // 前回のように擬似的な時間のかかる処理を作成
  });
};

// awaitを使用した例
const asyncFunctionInAwait = async (a, b) => {
  console.log("計算始めるよ.待っててね");
  await sleepAdd(a, b).then((resolve) => console.log(resolve));
  console.log("計算終わったよ"); // 上のawaitの処理を待ってから実行する
};

asyncFunctionInAwait(9, 2);
