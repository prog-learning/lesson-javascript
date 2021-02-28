// /**
//  * #09 メソッドをやる
//  */

// メソッド ≒ 関数

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
