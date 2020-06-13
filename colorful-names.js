document.open();
document.write(
  "<body style=' background-image: linear-gradient(#e6fff9, #ccfff3, #b3ffed, #99ffe7, #80ffe1, #66ffdb, #4dffd5, #33ffcf)'>"
);
let Name = ["peter", "jasmine", "heaton", "aizu"];
let age = [47, 46, 10, 11];
let Tops = [
  "nothing",
  "hansom shirt",
  "short sleves",
  "long sleves colorful shirt",
];
let colors = ["yellow", "red", "midnightblue", "#01FF70", "#260099"];
let pants = ["nothing", "fuzzy pants", "swsh swsh pants", "jeans"];
for (let i = 0; i < 100; i++) {
  document.write(
    "<div style='color: " +
      colors[Math.floor(Math.random() * colors.length)] +
      "'>hi my name is " +
      Name[Math.floor(Math.random() * Name.length)] +
      " i am " +
      age[Math.floor(Math.random() * age.length)] +
      " years old I normally wear " +
      Tops[Math.floor(Math.random() * Tops.length)] +
      " and " +
      pants[Math.floor(Math.random() * pants.length)] +
      "</div>"
  );
}
