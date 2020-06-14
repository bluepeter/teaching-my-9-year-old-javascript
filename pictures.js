document.open();
document.write(`
<style>
div {
  font-size: 100px;
  background: -webkit-linear-gradient(red, blue);
  text-shadow: 5px 5px #558ABB;
  border: 5px dotted red;
  text-transform: uppercase;
  font-kerning: random;
  padding: 50px 20px 50px 20px;
  margin-bottom: 200px;
}
#imgOne {
  border: 5px solid purple;
  padding: 40px 40px 40px 40px;
  width: 95%;
  filter: grayscale(50%);
  filter: blur(10px);                
}
#imgtwo {

filter: grayscale(100%);

}
</style>

 <img  src="https://images.squarespace-cdn.com/content/v1/560d8c49e4b0c528a4dc0058/1443729937325-SB7C406JN3Q28IOC6SAY/ke17ZwdGBToddI8pDm48kL4WrIntsHuCODFzGytxs8sUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcw31z2cKmL83lZVTgYf1Shcnt0pzT4b-h8WwoQ3rX-86z0Q_QpJgDA4jmv5AtYw-J/image-asset.jpeg?format=500w" id="imgOne">

<img z~ src="https://www.findingtheuniverse.com/wp-content/uploads/2018/08/Aldeyjarfoss-waterfall-Iceland_by_Laurence-Norah-2.jpg" id="imgTwo">
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
