document.open();
function s(num) {
 document.write( num * num );
}
for( let i = 0;  i < 101; i++) {
  s(i);
  document.write("<p>");
}

