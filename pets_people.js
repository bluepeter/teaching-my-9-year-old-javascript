
{
  document.open();

  const peopler = (bff, pet) => {
    let people = [
      { name: "frank", age: Math.floor(Math.random() * 101), feetSize: 17 },
      { name: "icsnerf", age: 7392546719348, feetSize: 56 },
    ];
    for (const item of people) {
      document.write(
        "hi my name is " +
          item.name +
          " I am " +
          item.age +
          " years old my best friend is " +
          bff +
          " my pet is a " +
          pet() +
          " feet size is " +
          Math.round(Math.random() * 1009)
      );
      document.write("<br/>");
    }
  };

  const myPet = () => Math.random() > 0.5 ? "dog" : "cat";
  ;

  peopler("heaton", myPet);
  peopler("jasmine", myPet);
  peopler("peter", myPet);
}





