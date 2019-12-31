var number = "";
var tempNumber;
var flag = 0;
// 数字の生成
function createNum(num) {
  number = number + num;
  document.getElementById("result").value = number;
}
// 四則演算の選択
function select(flag) {
  this.flag = flag;
  if (number != 0) {
    tempNumber = number;
  }
  number = "";
  document.getElementById("result").value = 0;
}
// 計算の実行
function calculation() {
  var result;
  switch (flag) {
    case 0: //足し算
      result = Number(tempNumber) + Number(number);
      console.log(tempNumber + "+" + number + "=" + result);
      outputLog(tempNumber + "+" + number + "=" + result);
      break;
    case 1: //引き算
      result = Number(tempNumber) - Number(number);
      console.log(tempNumber + "-" + number + "=" + result);
      outputLog(tempNumber + "-" + number + "=" + result);
      break;
    case 2: //掛け算
      result = Number(tempNumber) * Number(number);
      console.log(tempNumber + "×" + number + "=" + result);
      outputLog(tempNumber + "×" + number + "=" + result);
      break;
    case 3: //割り算
      if (number != 0) {
        result = Number(tempNumber) / Number(number);
        console.log(tempNumber + "÷" + number + "=" + result);
        outputLog(tempNumber + "÷" + number + "=" + result);
      }
      break;
  }
  document.getElementById("result").value = result;
  flag = 0;
  tempNumber = result;
  number = "";
}
// 入力値の削除
function deleteNum() {
  number = "";
  document.getElementById("result").value = 0;
}
// 数値反転
function inversion() {
  var temp = Number(number);
  temp = temp * -1;
  number = String(temp);
  document.getElementById("result").value = number;
}
// 計算ログへの出力
function outputLog(msg) {
  document.getElementById("calculatorLog").value += msg + "\r\n";
}
