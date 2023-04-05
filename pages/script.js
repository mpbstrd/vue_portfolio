var greetings = ["Hello!", "Hola!", "Bonjour!", "Ciao!", "Hallo!", "Hej!",
"你好！","こんにちは！","안녕하세요!","สวัสดี!","नमस्ते!","नमस्कार!",
"Здравствуйте!", "Здраво!",];
var i = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 1000);
function change() {
  elem.innerHTML = greetings[i];
  i++;
  if (i >= greetings.length) {
    i = 0;
  }
}
