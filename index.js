function calculateMarks() {
  const tmaMark = document.getElementById("tma").value;
  const midMark = document.getElementById("mid").value;
  const finalMark = document.getElementById("final").value;

  const result =
    parseFloat(tmaMark) + parseFloat(midMark) + parseFloat(finalMark);

  document.getElementById("result").innerHTML = result;
  let Result = document.getElementById("result").innerHTML;

  if (isNaN(Result)) {
    document.getElementById("result").style = "display:none";
    document.getElementById("state").innerHTML = "أدخل قيمة صحيحة";
    document.getElementById("state").style.color = "red";
  } else if (Result < 50) {
    document.getElementById("result").style = "display: block; color:red";
    document.getElementById("state").innerHTML = "راسب";
    document.getElementById("state").style.color = "red";
  } else if (Result >= 50) {
    document.getElementById("result").style = "display: block; color:green";
    document.getElementById("state").innerHTML = "ناجح";
    document.getElementById("state").style.color = "green";
  }
}

function borderColorTMA() {
  if (isNaN(document.getElementById("tma").value)) {
    document.getElementById("tma").style = "border: solid red 2px";
    alert("أدخل قيمة صحيحة");
  } else {
    document.getElementById("tma").style = "border: solid green 2px";
  }
}
function borderColorMID() {
  if (isNaN(document.getElementById("mid").value)) {
    document.getElementById("mid").style = "border: solid red 2px";
    alert("أدخل قيمة صحيحة");
  } else {
    document.getElementById("mid").style = "border: solid green 2px";
  }
}
function borderColorFinal() {
  if (isNaN(document.getElementById("final").value)) {
    document.getElementById("final").style = "border: solid red 2px";
    alert("أدخل قيمة صحيحة");
  } else {
    document.getElementById("final").style = "border: solid green 2px";
  }
}
