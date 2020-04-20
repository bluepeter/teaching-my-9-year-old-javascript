{
  document.open();
  document.write("<style>h1 {color: moonlightblue;}</style>");
  let peterJobs = [["Mcdonalds","stinky"], ["fluxguard","great"], ["cybersight","cool"]];
  for (let i = 0; peterJobs.length > i; i++) { 
document.write("<h1>");
    document.write(peterJobs[i][0] + " is " + peterJobs[i][1]); 
    document.write("<p>");
  }
}
