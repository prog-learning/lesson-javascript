/* Exportの書き方 */

// 単体で
// exports.name = '直江さん';
// exports.age = 20;

// まとめて
module.exports = {
  name: '直江さん',
  age: 20,
  introduce: () => { // 関数もOK
    console.log('私は兼続です。');
  }
};

// 参考
// https://www.sejuku.net/blog/80173