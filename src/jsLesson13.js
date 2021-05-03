/**
 * ==============================
 * 13. Classについて
 * ==============================
 */

// 例として,以下のようなオブジェクトをクラスで表す.
const user = {
  name: "nob",
  age: "123",
  func: () => {
    console.log("こんにちは！");
  }
};

// クラスとインスタンス
// クラスを宣言
class User {
  constructor(name, age) {
    // 初期値を設定
    this.name = name;
    this.age = age;
  }

  // クラスメソッド
  // クラスの所有物として関数を登録できる
  classFunc() {
    console.log(`${this.name}だよ！${this.age}歳です！`);
  }

  // セッターメソッド（変更用の関数）
  set setName(value) {
    this.name = value;
  }

  // ゲッターメソッド（取得用の関数）
  get getName() {
    return this.name;
  }
}

// クラスを定義
const Status = class {
  constructor(HP, MP) {
    this.HP = HP;
    this.MP = MP;
  }

  confirmHP() {
    console.log(`${this.HP}/999`);
  }
};

// しかし,作成したクラスはそのまま使えない

// 引数を指定してインスタンス（コピー）を作成
const nob = new User("nob", 123);
nob.classFunc();
// これでもOK
new User("幕の内", 1000).classFunc();
