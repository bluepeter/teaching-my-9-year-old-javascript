document.open();
let firstNames = ["odoles", "peter", "quil", "robot", "strange", "vasto", "willicer", "xino", "yoop", "zinloo"];
let lastNames = ["ducku", "prince", "gray"];
for( let i = 0;  i < 50; i++) {
  document.write(firstNames[Math.floor(Math.random() * firstNames.length)] + " " + lastNames[Math.floor(Math.random() * lastNames.length)]);
  document.write("<p>");
}
