/**
 * ==============================
 * 10. DOM操作（Document Object Model）
 * ==============================
 */

/* 場所を取ってくる書き方 */

// getElementById
document.getElementById("dekao").style.color = "blue";

// getElementsByClassName
document.getElementsByClassName("dekako")[0].style.color = "pink"; // 複数形（配列のようなもの）で取ってくるのでめっちゃ注意

// getElementsByTagName
document.getElementsByTagName("h6")[0].style.color = "orange"; // 複数形（配列のようなもの）で取ってくるのでめっちゃ注意

// querySelector...上の全てに対応（全部これでいい感は否めない）
// document.querySelector("#dekao").style.color = "tomato";
// document.querySelector(".dekako").style.color = "tomato"; // 複数ではなく,最初の一つを取得
// document.querySelector("h6").style.color = "tomato"; // 複数ではなく,最初の一つを取得


/* documentについて知る */
console.log(document);
const dekao = document.getElementById("dekao"); // 場所に名前をつけて定義する手法
console.log(dekao);
console.log(dekao.style);
console.log(dekao.innerText);
console.log(dekao.textContent);
// console.log((dekao.innerText = "書き換えまし")); // 再代入できる

/* その他に window, console, location などある（調べておこう） */
console.log(window);
console.log(console);
console.log(location);


/* 要素を追加する */

// 要素を生成
const h2 = document.createElement("h2");
h2.innerText = "作ったh2だよ"; // テキストを追加
document.body.appendChild(h2); // 最後に追加される
// document.getElementById("come-on").appendChild(h2); // 場所を指定して追加


/* ボタンを押したら追加 */
const addPeach = () => {
  const list = document.querySelector(".list"); // 入れる場所を定義
  const newItem = document.createElement("li"); // 入れるHTMLを作成
  newItem.textContent = "もも";
  list.appendChild(newItem); // 追加
};

/* 「ボタンを押したら〜」はいろいろできるので,覚えておこう */
const changeRed = () => {
  document.getElementById("dekao").style.color = "red";
};
