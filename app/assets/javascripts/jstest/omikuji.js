function getOmikuji() {
  var omikuji = ["大吉", "中吉", "小吉", "凶", "大凶"];
  // 0-n   Math.floor(Math.random() * (n + 1))
  var result = Math.floor(Math.random() * omikuji.length);
  // alert(omikuji[result]);
  document.getElementById('result').innerHTML = omikuji[result];
}
