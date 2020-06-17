document.open();
let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  " howdydoo ",
  "i",
  "j",
  "k",
  " ",
  " ",
  " ",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
];
for (let i = 0; i < 5000; i++) {
  document.write(letters[Math.round(Math.random() * letters.length)]);
  if (Math.random() * 1000 > 999) {
    document.write("<p>");
  }
}
