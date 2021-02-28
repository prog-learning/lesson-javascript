/**
 * #09 DOM操作
 */

//  じゃんけんゲームをつくる
Math.floor(Math.random());

// console.log(Math.floor(Math.random() * 6) + 1)

const challenger = Math.floor(Math.random() * 9);

let your_hand = Number(
  prompt("出す手を1,2,3で決めてください.\n 0:✊  1:✌  2:✋")
);

console.log(your_hand);

if (challenger % 3 === your_hand) {
  if (your_hand === 0) {
    console.log("You Win!!");
    console.log("あなた：✊");
    console.log("相手：✌");
  } else if (your_hand === 1) {
    console.log("You Win!!");
    console.log("あなた：✌");
    console.log("相手：✋");
  } else if (your_hand === 2) {
    console.log("You Win!!");
    console.log("あなた：✋");
    console.log("相手：✊");
  }
} else if (challenger % 3 === your_hand + 1) {
  if (your_hand === 0) {
    console.log("You Foil");
    console.log("あなた：✊");
    console.log("相手：✊");
  } else if (your_hand === 1) {
    console.log("You Foil");
    console.log("あなた：✌");
    console.log("相手：✌");
  } else if (your_hand === 2) {
    console.log("You Foil");
    console.log("あなた：✋");
    console.log("相手：✋");
  }
} else if (challenger % 3 === your_hand + 2) {
  if (your_hand === 0) {
    console.log("You Lose...");
    console.log("あなた：✊");
    console.log("相手：✋");
  } else if (your_hand === 1) {
    console.log("You Lose...");
    console.log("あなた：✌");
    console.log("相手：✊");
  } else if (your_hand === 2) {
    console.log("You Lose...");
    console.log("あなた：✋");
    console.log("相手：✌");
  }
}
