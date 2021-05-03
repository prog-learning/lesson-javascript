/**
 * ==============================
 * 11. スプレッド構文と分割代入
 * ==============================
 */

// スプレッド構文

const array1 = ["apple", "banana"];

const array2 = [...array1, "cherry"];

console.log(array2);

// スプレッド構文と引数
const showFoods = (a, b, ...rest) => {
  console.log(a);
  console.log(b);
  // 最初の2つ以外の引数はrestって配列になる
  console.log(rest);
};
showFoods("apple", "banana", "mango", "pine", "orange");

// ないものはもれるので注意
const sum = (a, b, ...[c, d]) => {
  console.log(a + b + c + d);
};

sum(1, 1, 1, 1, 1, 1, 1, 1);

// 分割代入

// 配列の場合
const [fruit_A, fruit_B] = array1;
// 順番に代入する

console.log(fruit_A);
console.log(fruit_B);

// 以下と一緒
// const fruit_A = array1[0]
// const fruit_B = array1[1]

// オブジェクトの場合
const obj = {
  user: "nob",
  age: 123,
  hobby: "programming"
};

const { user, age, food } = obj;
// keyに対応して代入される

console.log(user);
console.log(age);
console.log(food);;
// foodはないのでundefined

// 以下と一緒
// const user = obj.user
// const age = obj.age
