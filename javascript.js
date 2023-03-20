function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }




  function calculadora() {
    
    var consumo_electricidad = document.getElementById("kwh").value;
    var consumo_gasnatural = document.getElementById("gas").value;
    var consumo_diesel = document.getElementById("diesel").value;
    var consumo_agua = document.getElementById("agua").value;


    let huelladecarbono= consumo_agua*0.2+consumo_diesel*2.7+consumo_gasnatural*1.8+consumo_electricidad*0.42;

    alert("Tu huella de carbono es " + huelladecarbono);


    }

    $('.carousel').carousel()
