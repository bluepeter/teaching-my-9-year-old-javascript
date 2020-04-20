{
  document.open();
  document.write("<style>h1 {color: moonlightblue;}</style>");
  let peterJobs = [["Mcdonalds","stinky"], ["fluxguard","great"], ["cybersight","cool"]];
  // for (let i = 0; peterJobs.length > i; i++) { 
  for (let i = 1; 100 >= i; i++) {
    //document.write(peterJobs[i][0] + " is " + peterJobs[i][1]); 
    document.write("<span style='font-size: " + i * 10 + "px'>" + i + "</span><p>");
  }
}
