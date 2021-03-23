/**
 * ==============================
 * 04. オブジェクト
 * ==============================
 */

/* オブジェクトを定義 */
// { key1: property1, key2: property2, ... }
const user = { name: "ソーシャルディスタンス", level: 999, hobby: ['programming', 'football'] };
// 名前の付いたの配列のようなもの 順番という概念はない

// 特定の値を呼び出す（ドット記法）
console.log(user.name);

// 変数を使った呼び出し（ブランケット記法）
const key = "level";
console.log(user[key]);
console.log(user['level']); // 直接文字列でも可

// 'programming'を呼び出すには？


// オブジェクトを書き換え
user.name = "のぶこ";

// オブジェクトを追加
user.weight = 100;

console.log(user);

// 実用例
const users = [
  {
    id: 123,
    user_name: "あられちゃん",
    email: "aaa@aaa.jp",
    country: "US",
    favorite_food: ["apple", "cherry"],
    state: { age: 123, address: "西日暮里ロサンゼルス" },
  },
  {
    id: 124,
    user_name: "ひょうくん",
    email: "hhh@hhh.co.jp",
    country: "JP",
    favorite_food: ["apple", "banana", "cherry"],
    state: { age: 3, address: "" },
  },
  {
    id: 124,
    user_name: "ゆきさん",
    email: "yyy@yyy.com",
    country: "EU",
    favorite_food: ["cherry"],
    state: {},
  },
];
console.log(users[1].favorite_food[2]);
console.log(users[1].state.age);

