/**
 * ==============================
 * 17. Shallow Copy（参照渡し） と Deep Copy（値渡し）
 * ==============================
 */

/* オブジェクトの参照渡し */
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
const taro3sei = { ...iamTaro }; // 値渡し
const taro4sei = Object.assign({}, iamTaro); // 値渡し

/* いずれかのコメントアウトを外してコンソールを確認しよう */
taro2sei.age = 97; // 参照渡しを書き換える
// taro3sei.age = 97; // 値渡しを書き換える
// taro4sei.age = 97; // 値渡しを書き換える

console.log(iamTaro); // 参照渡しではこっちのデータまで書き換わってしまう.

/* 配列の場合 */
const names = ['Taro', 'Zico', 'Sanji'];

const newNames1 = names; // 参照渡し
const newNames2 = [...names]; // 値渡し
const newNames3 = Array.from(names); // 値渡し
const newNames4 = names.map((item) => item); // 値渡し
const newNames5 = names.concat(); // 値渡し

/* いずれかのコメントアウトを外してコンソールを確認しよう */
newNames1.push('fish');
// newNames2.push('fish');
// newNames3.push('fish');
// newNames4.push('fish');
// newNames5.push('fish');

console.log(names); // 参照渡しではこっちのデータまで書き換わってしまう.

/* ネストされている場合 */
const ippanPeoples = [
  { name: 'Taro', gender: 'male', age: 28 },
  { name: 'Zico', gender: 'female', age: 68 },
  { name: 'Sanji', gender: 'male', age: 21 },
];

const newIppanPeoples1 = ippanPeoples; // 参照渡し
const newIppanPeoples2 = [...ippanPeoples]; // これも参照渡しになる
const newIppanPeoples3 = JSON.parse(JSON.stringify(ippanPeoples)); // 値渡し

// newIppanPeoples1[0].gender = 'female';
newIppanPeoples2[0].gender = 'female';
// newIppanPeoples3[0].gender = 'female';

console.log(ippanPeoples);
