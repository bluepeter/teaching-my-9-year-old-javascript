document.open();
let Name = ["peter", "jasmine", "heaton", "aizu"];
let age = [47, 46, 10, 11];
let Tops = [
  "nothing",
  "hansom shirt",
  "short sleves",
  "long sleves colorful shirt",
];
let pants = ["nothing", "fuzzy pants", "swsh swsh pants", "jeans"];
for (let i = 0; i < 50; i++) {
  document.write(
    " hi my name is " +
      Name[Math.floor(Math.random() * Name.length)] +
      " i am " +
      age[Math.floor(Math.random() * age.length)] +
      " years old I normally wear " +  Tops[Math.floor(Math.random() * Tops.length)] + " and " + pants[Math.floor(Math.random() * pants.length)] + "<br>"
  )
}
