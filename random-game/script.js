function PlayGame() {
const randomNumber = Math.floor(Math.random()*5)+1

const userInput = Number(prompt("1~5の数字を入力してください"));

if(userInput === randomNumber) {
  alert("当たり！");
}else {
  alert("ハズレ！正解は" + rondomNumber + "でした");
}
}
