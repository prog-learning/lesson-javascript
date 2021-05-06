/**
 * ==============================
 * 15. 即時関数
 * ==============================
 */

/* 書き方 */
(function () {
  console.log('即実行されます1');
}());

// これでもOK
(function () {
  console.log('即実行されます2');
})();

// アロー関数で書く場合
(() => {
  console.log('アロー関数でも即時');
})();

// 主に一箇所でしか使わない処理を書くときに使われる
const immediate = (function (a, b) {
  return a + b;
}(2, 5));
console.log(immediate);

