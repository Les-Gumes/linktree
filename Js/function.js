var b = false;
function myFunction() {
  if (b==false) {
    document.getElementById("demo").style.backgroundColor = "yellow";
    b = true;
  }
  else {
    document.getElementById("demo").style.backgroundColor = "red";
    b = false;
  }
}
