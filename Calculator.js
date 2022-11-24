function checkIfEmpty(element) {
  //return element.value ? parseInt(element.value) : 0;

  if (element.value) {
    return parseInt(element.value);
  } else {
    return 0;
  }
}

function F1() {
  var a = checkIfEmpty(document.getElementById("count")); //parseInt(count.value);
  var a2 = checkIfEmpty(document.getElementById("count2"));
  var a3 = checkIfEmpty(document.getElementById("count3"));
  var a4 = checkIfEmpty(document.getElementById("count4"));
  var a5 = checkIfEmpty(document.getElementById("count5"));
  var a6 = checkIfEmpty(document.getElementById("count6"));
  var a7 = checkIfEmpty(document.getElementById("count7"));
  var a8 = checkIfEmpty(document.getElementById("count8"));
  var a9 = checkIfEmpty(document.getElementById("count9"));
  var a10 = checkIfEmpty(document.getElementById("count10"));
  var avg;
  var n;
  var s;
  var b = 1 * a;
  var b2 = 2 * a2;
  var b3 = 3 * a3;
  var b4 = 4 * a4;
  var b5 = 5 * a5;
  var b6 = 6 * a6;
  var b7 = 7 * a7;
  var b8 = 8 * a8;
  var b9 = 9 * a9;
  var b10 = 10 * a10;
  n = a + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10;
  s = b + b2 + b3 + b4 + b5 + b6 + b7 + b8 + b9 + b10;
  avg = s / n;
  s1.innerHTML = "Your Grade: " + Math.round(avg * 100) / 100;
}
