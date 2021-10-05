/**
 * ==============================
 * 17. コピーの種類
 * ==============================
 */

/* オブジェクトのシャローコピー */
const iamTaro = {
  name: 'Taro',
  gender: 'male',
  age: 28,
  address: {
    city: 'Tokyo',
    street: 'Yoyogi',
  },
};

// const taro2sei = iamTaro;
const taro2sei = iamTaro; // 参照渡し
const taro3sei = { ...iamTaro }; // シャローコピー
const taro4sei = Object.assign({}, iamTaro); // シャローコピー

/* いずれかのコメントアウトを外してコンソールを確認しよう */
taro2sei.age = 97; // 参照渡しを書き換える
// taro3sei.age = 97; // シャローコピーを書き換える
// taro4sei.age = 97; // シャローコピーを書き換える

console.log(iamTaro); // 参照渡しではこっちのデータまで書き換わってしまう.

/* 配列の場合 */
const names = ['Taro', 'Zico', 'Sanji'];

const newNames1 = names; // 参照渡し
const newNames2 = [...names]; // シャローコピー
const newNames3 = Array.from(names); // シャローコピー
const newNames4 = names.map((item) => item); // シャローコピー
const newNames5 = names.concat(); // シャローコピー

/* いずれかのコメントアウトを外してコンソールを確認しよう */
newNames1.push('fish');
// newNames2.push('fish');
// newNames3.push('fish');
// newNames4.push('fish');
// newNames5.push('fish');

console.log(names); // 参照渡しではこっちのデータまで書き換わってしまう.

/* ネストされている場合はディープコピーを使う */
const ippanPeoples = [
  { name: 'Taro', gender: 'male', age: 28 },
  { name: 'Zico', gender: 'female', age: 68 },
  { name: 'Sanji', gender: 'male', age: 21 },
];

const newIppanPeoples1 = ippanPeoples; // 参照渡し
const newIppanPeoples2 = [...ippanPeoples]; // シャローコピー
const newIppanPeoples3 = JSON.parse(JSON.stringify(ippanPeoples)); // ディープコピー

// newIppanPeoples1[0].gender = 'female';
newIppanPeoples2[0].gender = 'female';
// newIppanPeoples3[0].gender = 'female';

console.log(ippanPeoples);

/* 重要なPOINTは,変数を定義した時に内部的に新しいデータが作成されているかどうか */

const arr = [{ name: 'taro', age: 28 }];
const newArr = [...arr];
newArr[0].name = 'HAGE'; // 新しく作った配列の要素の一部を変更しているつもりでも
console.log(arr); // 元の配列を見てみると
// 結果
[{ name: 'HAGE', age: 28 }]; // 書き換わってしまっている！
