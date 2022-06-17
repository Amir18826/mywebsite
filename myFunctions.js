var code;

// start captcha:
function createCaptcha() {
  //clear the contents of captcha div first
  document.getElementById("captcha").innerHTML = "";
  var charsArray =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
  var lengthOtp = 6;
  var captcha = [];
  for (var i = 0; i < lengthOtp; i++) {
    //below code will not allow Repetition of Characters
    var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
    if (captcha.indexOf(charsArray[index]) == -1)
      captcha.push(charsArray[index]);
    else i--;
  }
  var canv = document.createElement("canvas");
  canv.id = "captcha";
  canv.width = 100;
  canv.height = 50;
  var ctx = canv.getContext("2d");
  ctx.font = "25px Georgia";
  ctx.strokeText(captcha.join(""), 0, 30);
  //storing captcha so that can validate you can save it somewhere else according to your specific requirements
  code = captcha.join("");
  document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
}
function validateCaptcha() {
  event.preventDefault();
  debugger;
  if (document.getElementById("cpatchaTextBox").value == code) {
    var b = document.getElementById("fullname").value,
      c = document.getElementById("nationalnumber").value,
      d = document.getElementById("date").value,
      e = document.getElementById("mobilenumber").value,
      f = document.getElementById("email").value,
      g = document.getElementById("amount").value,
      h = document.getElementById("loantype").value,
      i = document.getElementById("years").value,
      j = document.getElementById("paymethod").value,
      url =
        "http://127.0.0.1:5500/html/result.html?fullname=" +
        encodeURIComponent(b) +
        "&nationalnumber=" +
        encodeURIComponent(c) +
        "&date=" +
        encodeURIComponent(d) +
        "&mobilenumber=" +
        encodeURIComponent(e) +
        "&email=" +
        encodeURIComponent(f) +
        "&amount=" +
        encodeURIComponent(g) +
        "&loantype=" +
        encodeURIComponent(h) +
        "&years=" +
        encodeURIComponent(i) +
        "&paymethod=" +
        encodeURIComponent(j);
    document.location.href = url;
  } else {
    alert("Invalid Captcha. try Again");
    createCaptcha();
  }
}
// End captcha
function onLoad() {
  var url = document.location.href,
    params = url.split("?")[1].split("&"),
    data = {},
    tmp;
  for (var i = 0, l = params.length; i < l; i++) {
    tmp = params[i].split("=");
    data[tmp[0]] = tmp[1];
  }
  document.getElementById("resfullname").innerHTML = decodeURI(data.fullname);
  document.getElementById("resnationalnumber").innerHTML = decodeURI(
    data.nationalnumber
  );
  document.getElementById("resdate").innerHTML = decodeURI(data.date);
  document.getElementById("resmobilenumber").innerHTML = decodeURI(
    data.mobilenumber
  );
  document.getElementById("resemail").innerHTML = decodeURI(data.email);
  document.getElementById("resamount").innerHTML = decodeURI(data.amount);
  document.getElementById("resloantype").innerHTML = decodeURI(data.loantype);
  document.getElementById("resyears").innerHTML = decodeURI(data.years);
  document.getElementById("respaymethod").innerHTML = decodeURI(data.paymethod);
}

window.onload = onLoad;
//overlay when (more info..) Button is ckicked in the products page
function on1() {
  document.getElementById("overlay1").style.display = "block";
}
function off1() {
  document.getElementById("overlay1").style.display = "none";
}
function on2() {
  document.getElementById("overlay2").style.display = "block";
}
function off2() {
  document.getElementById("overlay2").style.display = "none";
}
function on3() {
  document.getElementById("overlay3").style.display = "block";
}
function off3() {
  document.getElementById("overlay3").style.display = "none";
}
function on4() {
  document.getElementById("overlay4").style.display = "block";
}
function off4() {
  document.getElementById("overlay4").style.display = "none";
}
function on5() {
  document.getElementById("overlay5").style.display = "block";
}
function off5() {
  document.getElementById("overlay5").style.display = "none";
}
function on6() {
  document.getElementById("overlay6").style.display = "block";
}
function off6() {
  document.getElementById("overlay6").style.display = "none";
}
function on7() {
  document.getElementById("overlay7").style.display = "block";
}
function off7() {
  document.getElementById("overlay7").style.display = "none";
}
function on8() {
  document.getElementById("overlay8").style.display = "block";
}
function off8() {
  document.getElementById("overlay8").style.display = "none";
}
