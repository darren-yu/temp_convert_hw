document.addEventListener("DOMContentLoaded",function() {
	// alert("page loaded");
	document.querySelector("#btn1").addEventListener("click",function(){
		var tempF = parseInt(document.querySelector(".form-control").value);
		var tempC = Math.round((tempF * (9 / 5)) + 32);
	
		// alert("something working");
		if (isNaN(tempF)) {
			alert("Your entry is not a number.");
		}
		else {
			// tempC;
			document.querySelector(".converted").innerText = "The converted temperature is " + tempC + "\u00B0" + "C";
		}
		if (tempC <= 0) {
			document.querySelector(".container-fluid").style.backgroundColor = "deepskyblue";
		}
		else if ((tempC >= 1) && (tempC <= 30)) {
			document.querySelector(".container-fluid").style.backgroundColor = "blue";
		}
		else if ((tempC >= 31) && (tempC <= 99)) {
			document.querySelector(".container-fluid").style.backgroundColor = "crimson";
		}
		else if (tempC >= 100) {
			document.querySelector(".container-fluid").style.backgroundColor = "red";
		}
	});

	// reset button
	document.querySelector("#btn2").addEventListener("click",function(){
		document.querySelector(".form-control").value = "";
		document.querySelector(".converted").innerText = "Converted Value is:";
		document.querySelector(".container-fluid").style.backgroundColor = "white";
		// alert("im working!");
	});

});




