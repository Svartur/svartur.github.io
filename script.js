var x, xx = 0;

function odoslat() {

	document.getElementById("btnSubmit").style.display = "none";
	document.getElementById("dotaznik").style.display = "none";
	document.getElementById("vysledky").style.display = "block";

	var perce = document.getElementById("perce");
	perce.innerHTML = Math.floor(Math.random() * 20) + 80 + "%";

}

function checkButton() {
	if ( checkRadioGroup(1) && checkRadioGroup(2) && checkRadioGroup(3) && checkRadioGroup(4) && checkRadioGroup(5) && checkRadioGroup(6) && checkRadioGroup(7) ) {
		var butt = document.getElementById("btnSubmit").disabled = false;
	} else {
		var butt = document.getElementById("btnSubmit").disabled = true;
	}
}

function checkRadioGroup(otazka) {
	if ( (document.getElementById(otazka + ".1").checked == true) ||  (document.getElementById(otazka + ".2").checked == true) || (document.getElementById(otazka + ".3").checked == true) || (document.getElementById(otazka + ".4").checked == true) || (document.getElementById(otazka + ".5").checked == true)) {
		return true;
	} else {
		return false;
	}
}


function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function refresh(argument) {
	location.reload();
}