let people = [{name: "frank", age: Math.floor(Math.random() * 101), feetSize: 17}, {name: "icsnerf", age: 7392546719348, feetSize: 56}];
document.open();
for(let i = 0; i < people.length; i++) {
  document.write("hi my name is " + people[i].name + " I am " + people[i].age + " years old my feet size is " + people[i].feetSize);
  document.write("<br/>");
}
