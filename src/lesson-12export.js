const myName = "nob";
const user = "直江兼続";

// Named export ...名前を指定して出力
export { myName };
export const foods = ['yakiniku', 'sukiyaki', 'shabushabu'];
// 関数を出力することも可能
export const sayHello = () => {
  console.log('hello');
};

// defaut export ...このファイルが読み込まれたときにデフォルトで出力するものを指定
// ※ファイルに一つのみ定義可能
export default user;
