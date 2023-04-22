const alertX = document.getElementById("alert");
const closeX = document.getElementById("alert-close");

closeX.addEventListener("click", function () {
  alertX.style.display = "none";
});

//Validating the Given Details

function validate() {

  let cno = document.getElementById("cno").value;
  let cvv = document.getElementById("Cvv").value;
  let first =document.getElementById("fname").value + document.getElementById("lname").value;
  let phone = document.getElementById("phone").value;
  let city = document.getElementById("city").value;
  let pin = document.getElementById("pin").value;

  if (!/^\d{12}$/.test(cno)) {
    makeVis();
    document.getElementById("alert-text").innerHTML ="Invalid Card number, Enter without any space.";
  } 
  else if (isNaN(cvv) || cvv.toString().length != 3) {
    makeVis();
    document.getElementById("alert-text").innerHTML ="Invalid Cvv number, Check and please Re-enter.";
  } 
  else if (/\d/.test(first)) {
    makeVis();
    document.getElementById("alert-text").innerHTML ="Enter a valid name, Name can't contain digits and symbols.";
  } 
  else if (!/^\d{10,13}$/.test(phone)) {
    makeVis();
    document.getElementById("alert-text").innerHTML ="Invalid phone number, Enter a valid phone/contact number";
  } 
  else if (/\d/.test(city)) {
    makeVis();
    document.getElementById("alert-text").innerHTML ="Enter a valid city, there is no city in the given name";
  } 
  else if (!/^\d{6}$/.test(pin)) {
    makeVis();
    document.getElementById("alert-text").innerHTML ="Invalid pincode, enter a valid one";
  }
  else {
        window.location.href = "./home.html";
  }
}
function makeVis() {
  document.getElementById("alert-text").innerHTML = "";
  const alertY = document.getElementById("alert");
  alertY.style.display = "block";
}
