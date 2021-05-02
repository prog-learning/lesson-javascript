/**
 * ==============================
 * 04. オブジェクト（連想配列）
 * ==============================
 */

/* オブジェクトを定義 */
// { key1: property1, key2: property2, ... }
const user = { name: "ソーシャルディスタンス男", level: 999, hobby: ['programming', 'football'] };
// 名前の付いたの配列のようなもの 順番という概念はない

// 特定の値を呼び出す（ドット記法）
console.log(user.name);
console.log(user.hobby[1]);

// 変数を使った呼び出し（ブランケット記法）
const key = "level";
console.log(user[key]);
console.log(user['level']); // 直接文字列でも可

// オブジェクトを書き換え
user.name = "のぶこ";
console.log(user);

// オブジェクトを追加
user.distance = '8m';
console.log(user);


/* ユーザー情報をオブジェクトの配列で管理する実用例 */
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
    favorite_food: ["apple", "banana", "mango"],
    state: { age: 3, address: "不明" },
  },
  {
    id: 125,
    user_name: "ゆきさん",
    email: "yyy@yyy.com",
    country: "EU",
    favorite_food: ["cherry"],
    state: { age: 555, address: "雪の国" },
  },
];

/* JSON */
// 多言語に互換性のあるオブジェクトの書き方
const blogs = [
  {
    "title": "初投稿",
    "content": "今日は晴れでした",
    "date": "2020-02-20",
  },
  {
    "title": "最後の投稿",
    "content": "ありがとうございました",
    "date": "2020-02-21",
  },
];
// key, propertyともに " で囲う

/* JSONに変換する */
const imJson = JSON.stringify(users);
console.log(imJson);
// console.log(JSON.stringify(users)); // これでも良い

// 戻す
console.log(JSON.parse(imJson));

/* JSONを外部ファイルで管理することはよくあります */
// lesson-04.json を参考
