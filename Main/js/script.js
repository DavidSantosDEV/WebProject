//Function to show phone menu (Work in progress)
function showPhoneMenu() {
  var x = document.getElementById("phone_menu");
  if (x.Style.visibility === "hidden") {
    x.Style.display = "flex";
	x.Style.visibility = "visible";
  } else {
    x.Style.display = "none";
	x.Style.visibility = "hidden";
  }
}