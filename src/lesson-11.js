/**
 * ==============================
 * 11. スプレッド構文と分割代入
 * ==============================
 */

/* スプレッド構文 */
const array1 = ["apple", "banana"];
const array2 = [...array1, "cherry"]; // ...配列名,で書いたところに配列の要素が並ぶ
console.log(array2); // ["apple", "banana", "cherry"]

// スプレッド構文と引数
const showFoods = (a, b, ...rest) => {
  console.log(a);
  console.log(b);
  // 最初の2つ以外の引数はrestって配列になる
  console.log(rest);
};
showFoods("apple", "banana", "mango", "pine", "orange");

/* 分割代入 */

// 配列の場合
const [fruit_a, fruit_b] = array1;
// 順番に代入する

/* 以下と一緒のことをしている
  const fruit_a = array1[0]
  const fruit_b = array1[1]
*/

console.log(fruit_a); // apple
console.log(fruit_b); // banana


// オブジェクトの場合
const obj = {
  user: "nob",
  age: 123,
  hobby: "programming"
};

const { user, age, food } = obj;
// keyに対応して代入される

/* 以下と一緒のことをしている
  const user = obj.user
  const age = obj.age
*/

console.log(user); // nob
console.log(age); // 123
console.log(food); // foodはないのでundefined
