document.open();
function myFunction(adj) {
  document.write("<style>h1 {color: moonlightblue;}</style>");
  let peterJobs = [["Mcdonalds","stinky"], ["fluxguard","great"], ["cybersight","cool"]];
  for (let i = 0; peterJobs.length > i; i++) { 
    document.write("<h1>");
    document.write(peterJobs[i][0] + " is " + adj); 
    document.write("</h1>");
  }
}

myFunction("stinky");
myFunction("coooooooooooooooooooooooooooooooooollllllllll");
myFunction("Greeeeeeeeeaat");
