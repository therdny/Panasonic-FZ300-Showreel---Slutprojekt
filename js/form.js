//function checkFunction() {

//	if ($("input[name="bag"]").is(":checked")) {
//	document.getElementById("orderedbag");
//	orderedbag.innerHTML = "Och du har beställt en väska för 500:- till den.";
//	}

//	else {
//	document.getElementById("orderedbag");
//	orderedbag.innerHTML = "Du valde att inte beställa en väska till den.";
//	};

var form = document.getElementById("order-form");
	form.onsubmit = function(e) {
		e.preventDefault();
		var confirmation = document.getElementById("confirmation");
		confirmation.innerHTML = "<h4>Orderbekräftelse</h4>" + "Hej " + form.yourName.value + ". <br />" + "Du har beställt en Panasonic FZ300. <br />" + "Den kommer att skickas till " + form.yourAdress.value + " i " + form.yourCity.value + ". <br />" + "Totalpriset blir 4995:-.";
		this.reset();
	};

