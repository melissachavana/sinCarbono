let button = document.getElementById("calcular-btn");
let contador = 0;


const listaEmpresas = [];

class empresa {
  constructor(nombre, electricidad, gas, diesel, agua, huella) {
    this.nombre = nombre.toUpperCase();
    this.electricidad = Number(electricidad);
    this.gas = Number(gas);
    this.diesel = Number(diesel);
    this.agua = Number(agua);
    this.huella = Number(huella);
  }
};


function HuellaCarbono() {
	
	let nombre_empresa = document.getElementById("usr").value;
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
		listaEmpresas.push(new empresa(nombre_empresa,consumo_electricidad, consumo_gasnatural, consumo_diesel, consumo_agua, huelladecarbono));
	
}



button.addEventListener("click", function(e) {
	// Increment the click count
	
	calculadora();
  alert("Se ha registrado la información de la siguiente empresa " + listaEmpresas[contador].nombre + " y " + listaEmpresas[contador].compensar + " desea compensar emisiones.");
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
		let compensar = prompt("¿Te gustaría compensar emisiones? (sí/no)");
		listaEmpresas[contador]['compensar']=compensar;

		
	} else {
		alert("Has utilizado tus 3 intentos del día");
	}

}

    $('.carousel').carousel()
