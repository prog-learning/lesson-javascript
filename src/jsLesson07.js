/**
 * #07 関数
 */

//  # 関数をつくる（スイッチを作る）
// 命令を束ねる

// 関数の宣言...（スイッチを作る）
function push() {
  //  処理
  console.log("これは関数です！")
  // alert("関数が実行されました！")
}

// 関数の実行（スイッチを押す）
push()

// 関数の定義（代入型）...（スイッチを作る）
const now = "朝"

const greeting = function () {
  console.log("これから,時間帯に応じた挨拶をします！")
  if (now === "朝") {
    console.log("おはよう！")
  } else if (now === "昼") {
    console.log("こんにちは！")
  } else {
    console.log("おやすみzzz")
  }
  console.log("挨拶できました！")
}

// 関数の実行（スイッチを押す）
greeting()

// アロー関数...（スイッチを作る）
const message = () => {
  console.log("メッセージ")
}

// 関数の実行（スイッチを押す）
message()

// # 引数

const add = (x, y) => {
  console.log(x + y)
}

add(12, 24)

const selfIntroduction = (name, birth) => {
  const birthday = birth + "月"
  console.log(`こんにちは`)
  console.log(`私の名前は${name}です。`)
  console.log(`誕生月は${birthday}です。`)
}

selfIntroduction("のぶ", 8)

// 関数の戻り値（返り値とも言う）
const add1 = (a, b) => {
  // 処理はここ
  console.log("足し算をします！")
  return (
    // 戻り値はここ
    a + b
  )
}

// 省略形（戻り値が一行の場合）
const add2 = (a, b) => {
  // 処理はここ
  console.log("足し算をします！")
  return a + b
}

// 省略形（戻り値のみかつ一行の場合）
const add3 = (a, b) => a + b
