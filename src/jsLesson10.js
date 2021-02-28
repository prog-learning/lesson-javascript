/**
 * #10 DOM操作
 */

// Document Object Model

document.getElementById("title").style.color = "red";
// document.getElementsByClassName("title")[0].style.color = "red";
document.querySelector(".title").style.color = "red";

console.log(document);
console.log(window);
console.log(console);
console.log(location);
console.log(document.getElementById("title"));
console.log(document.getElementById("title").innerText);
console.log(document.getElementById("title").textContent);
console.log((document.getElementById("title").innerText = "書き換えまし"));

// 要素を生成
const h2 = document.createElement("h2");
const content = document.createTextNode("作ったh2だよ");
document.body.appendChild(h2).appendChild(content);
// 指定した場所に追加したい
const list = document.querySelector(".list");
const newItem = document.createElement("li");
newItem.textContent = "もも";
list.appendChild(newItem);

const changeRed = () => {
  // document.getElementById("title").style.color = "red";
};
