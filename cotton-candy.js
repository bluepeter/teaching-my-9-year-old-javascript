document.open();
1;
document.write(`
<style>
div {
  font-size: 100px;
  background: -webkit-linear-gradient(#eee, #333);
  text-shadow: 5px 5px #558ABB;
  border: 5px dotted red;
  text-transform: uppercase;
  font-kerning: random;
  padding: 50px 20px 50px 20px;
  margin-bottom: 200px;
</style>
`);
document.write(
  "<body style='background-image: linear-gradient(to right, red, orange, yellow)'>"
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
