let button = document.getElementById("calcular-btn");
let contador = 0;

button.addEventListener("click", function(e) {
	// Increment the click count
	
	calculadora();
  contador++;
	// If the click count is equal to 3, disable the button
	if (contador === 3) {
		button.disabled = true;
	}
  e.preventDefault();

});

function calculadora() {
	// Only run the HuellaCarbono function if contador is less than 3
	if (contador < 3) {
		HuellaCarbono();
	} else {
		alert("Has utilizado tus 3 intentos del día");
	}

}

function HuellaCarbono() {
	

	let consumo_electricidad = document.getElementById("kwh").value;
	let consumo_gasnatural = document.getElementById("gas").value;
	let consumo_diesel = document.getElementById("diesel").value;
	let consumo_agua = document.getElementById("agua").value;

	let huelladecarbono =
		consumo_agua * 0.2 +
		consumo_diesel * 2.7 +
		consumo_gasnatural * 1.8 +
		consumo_electricidad * 0.42;

	alert("Tu huella de carbono es " + huelladecarbono);
}

    $('.carousel').carousel()
