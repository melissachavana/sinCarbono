let contador = 0;

function calculadora() {
  if (contador < 3) {
    HuellaCarbono();
    contador++;
  } else {
    alert("Has utilizado tus 3 intentos del día");
  }
}

function HuellaCarbono() {
  alert("valor contador " + contador);

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
