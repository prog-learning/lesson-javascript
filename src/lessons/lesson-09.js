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

// 他にもいっぱいある
// その他はこちらを参照：https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String#instance_properties


/* 配列に対して Array */
const hairetu = ['サーモン', 'イクラ', 'ハマチ'];

// 後ろに追加
hairetu.push('うに');
console.log(hairetu); // ['サーモン', 'イクラ', 'ハマチ', 'うに']

// 指定した文字列をはさんで結合して文字列に
const sushi_string = hairetu.join("☆"); // ☆で結合
console.log(sushi_string); // サーモン☆イクラ☆ハマチ☆うに

// 切り取る
const catch_sushi1 = hairetu.slice(1, 3); // (1+1)番目から(3+1)番目の前までを
console.log(catch_sushi1);
console.log(hairetu); // もとの配列は変わらない

// 削除する
const catch_sushi2 = hairetu.splice(2, 1); // 3番目から1つを
console.log(catch_sushi2); // 切り取った箇所
console.log(hairetu); // もとの配列から削除される（破壊的）


// 他にもいっぱいある
// その他はこちらを参照：https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_properties


/* オブジェクトに対して Object */
// オブジェクトでよくつかうのは静的メソッドなので上で紹介したStringやArrayのメソッドと書き方が異なる点に注意
const item = { id: 'abc12345', name: 'ねぎ', color: '青', weight: 800, canBuy: false };

// keyを配列で取得
console.log(Object.keys(item));

// valueを配列で取得
console.log(Object.values(item));

// その他はこちらを参照：https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods


/* Callback関数を使えるように */
// 例：配列のmapメソッド
const items = [
  { id: 'abc12345', name: 'ねぎ', color: '青', weight: 800, canBuy: true },
  { id: 'abc12346', name: 'とまと', color: '赤', weight: 300, canBuy: true },
  { id: 'abc12347', name: 'ジャイアン', color: '橙', weight: 80000, canBuy: false },
];

items.map((item) => {
  console.log(item);
  console.log(`${item.name}は${item.color}です`);
  console.log(`売ってい${item.canBuy ? 'ます' : 'ません'}`);
});
// このとき,mapに渡す引数は関数なのでCallback関数と言う

// for文で書くと
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
  console.log(`${items[i].name}は${items[i].color}です`);
  console.log(`売ってい${items[i].canBuy ? 'ます' : 'ません'}`);
}
