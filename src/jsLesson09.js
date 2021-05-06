/**
 * ==============================
 * 09. メソッドをやる
 * ==============================
 */

/*
  メソッド ≒ 関数
  JavaScriptで標準で備わっている機能（関数だけではない）
  ※厳密には「標準組み込みオブジェクト」というものを学びます
  https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects
  ここではインスタンスプロパティやインスタンスメソッドを扱います
  小難しい話を省くと「.******」とつけるだけで使える便利な機能です
*/



/* 文字列に対して String */
const mojidayo = '文字です,これは文字です,Oh,Yeah';

// 文字数を取得
console.log(mojidayo.length);

// 含むかどうか
console.log(mojidayo.includes('文字'));

// 最初に表れるのは何番目か（ない場合は-1）
console.log(mojidayo.indexOf('文字'));

// 最後に表れるのは何番目か（ない場合は-1）
console.log(mojidayo.lastIndexOf('文字'));

// 区切る文字を指定して配列に変える
console.log(mojidayo.split(','));

// 指定区間を切り取る
console.log(mojidayo.slice(5, 10));

// その他はこちらを参照：https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String#instance_properties


/* 配列に対して Array */
const hairetu = []; // ★ In Progress

// その他はこちらを参照：https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_properties


/* オブジェクトに対して Object */
// オブジェクトでよくつかうのは静的メソッドなので上で紹介したStringやArrayのメソッドと書き方が異なる点に注意

// その他はこちらを参照：https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods


const name1 = "こうのすけ";
const name2 = "りょうたろう";

const fullName = name1.concat(name2, "さん");

console.log(fullName);

let fruits = ["apple", "banana", "cherry"];

fruits = [...fruits, "doughnut"];

console.log(fruits);

// コールバック関数
const users = ["name1", "name2", "name3", "name4"];

users.map((user, index) => {
  users[index] = user.concat("さん");
  console.log(users);
});

// for文でも書ける
for (let i = 0; i < users.length; i++) {
  users[i] = users[i].concat("さん");
  console.log(users);
}
