/**
 * #04 オブジェクト（連想配列）
 */

// 連想配列（オブジェクト）を定義
const user = { name: "のぶ", age: 37, height: 170 };
// 名前付きの配列
// { key1: property1, key2: property2,...}

// 特定の値を呼び出す
console.log(user.name);
// 変数を使った呼び出し
const key = "age";
console.log(user[key]);

// オブジェクトを変更
user.name = "のぶこ";

// オブジェクトを追加
user.weight = 100;

console.log(user);

// 実用例
const users = [
  {
    id: 123,
    user_name: "nob",
    email: "aaa@jp",
    country: "US",
    favorite_food: ["apple", "banana", "cherry"],
    followers: ["apple", "banana", "cherry"]
  },
  {
    id: 1224,
    user_name: "nobbbbbbbbb",
    email: "aaa@jp",
    country: "US",
    favorite_food: ["apple", "banana", "cherry"]
  },
  {
    id: 1223,
    user_name: "nob",
    email: "aaa@jp",
    country: "US",
    favorite_food: ["apple", "banana", "cherry"]
  },
  {
    id: 1213,
    user_name: "nob",
    email: "aaa@jp",
    country: "US",
    favorite_food: ["apple", "banana", "cherry"]
  }
];
console.log(users[1].favorite_food[2]);
