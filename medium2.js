let people = [
  { name: "frank", age: Math.floor(Math.random() * 101), feetSize: 17 },
  { name: "icsnerf", age: 7392546719348, feetSize: 56 },
];
document.open();
for (const item in people) {
  document.write(
    "hi my name is " +
      item.name +
      " I am " +
      item.age +
      " years old my feet size is " +
      Math.round(Math.random() * 1009)
  );
  document.write("<br/>");
}
