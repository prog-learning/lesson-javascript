/**
 * #14 try catchについて
 */

const myName = "nob"
// 通常の場合
myName = "bob" // エラーのため,ここで処理が止まる
console.log("よくできました！") // 実行されない

try {
  myName = "bob"
  // エラーの場合は下のcatchに吐き出して次の処理を実行する
} catch (error) {
  console.log(error)
}

console.log("よくできました！") // 実行される

/**
 * throwについて
 */

try {
  let color = "red"
  color = "blue"
  // ここまでエラーはないはずだけど, throwを使って強制でエラーを吐き出す
  throw "「ぐははははは,エラーにしてやる！」" // エラーメッセージを作成
  // throw new Error("「ぐははははは,エラーにしてやる！」") // Error Classを使用する場合
} catch (error) {
  console.log(error)
}

console.log("よくできました！")
