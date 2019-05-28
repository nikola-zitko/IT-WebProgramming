
function imeProvjera(){
    var x = document.getElementById("ime").value;
    var RegIz1 = /^[A-Z][a-zA-Z]+$/;
    var RegIz2 = /^[a-z]+$/;
    if(RegIz1.test(x) == false && RegIz2.test(x) == true){
        document.getElementById("pIme").innerHTML = "Ime mora započeti velikim slovom.";
    }
    else if(RegIz1.test(x) == true){
        document.getElementById("pIme").innerHTML = "Točno ime!";
    }
    else{
        document.getElementById("pIme").innerHTML = "Ime smije sadržavati samo slova!";
    }
}

function prezimeProvjera(){
    var x = document.getElementById("prezime").value;
    var RegIz1 = /^[A-Z][a-zA-Z]+$/;
    var RegIz2 = /^[a-z]+$/;
    if(RegIz1.test(x) == false && RegIz2.test(x) == true){
        document.getElementById("pPrezime").innerHTML = "Prezime mora započeti velikim slovom!";
    }
    else if(RegIz1.test(x) == true){
        document.getElementById("pPrezime").innerHTML = "Točno prezime!";
    }
    else{
        document.getElementById("pPrezime").innerHTML = "Prezime smije sadržavati samo slova!";
    }
}

function adresaProvjera(){
    var x = document.getElementById("adresa").value;
    var RegIz1 = /^[A-Z][a-zA-Z]+\s?$/;
    var RegIz2 = /^[A-Z][a-zA-Z]+(\s[0-9]{1,3})$/;
    if(RegIz1.test(x) == true && RegIz2.test(x) == false){
        document.getElementById("pAdresa").innerHTML = "Unesite broj adrese!";
    }
    else if(RegIz1.test(x) == false && RegIz2.test(x) == false){
        document.getElementById("pAdresa").innerHTML = "Unesite točnu adresu!";
    }
    else if(RegIz2.test(x) == true){
        document.getElementById("pAdresa").innerHTML = "Točna adresa!";
    }
    else{
        document.getElementById("pAdresa").innerHTML = "Unesite točnu adresu!";
    }
}

function gradProvjera(){
    var x = document.getElementById("grad").value;
    var RegIz1 = /^[A-Z][a-zA-Z]+(\s[a-zA-Z]+)?$/;
    if(RegIz1.test(x) == false){
        document.getElementById("pGrad").innerHTML = "Grad smije sadržavati samo slova!";
    }
    else{
        document.getElementById("pGrad").innerHTML = "Točan grad!";
    }
}



function mailProvjera() {
    var x = document.getElementById("email").value;
    console.log(x);
    var RegIz1 = /^[a-z_]+$/;
    var RegIz2 = /^[a-z_]+@$/;
    var RegIz3 = /^[a-z_]+@([a-z]+\.?)+$/;
    var RegIz4 = /^[a-z_]+@([a-z]+\.)+[a-z]{2,3}$/;
    console.log(RegIz1.test(x))

    if(RegIz1.test(x) == true && RegIz2.test(x) == false){
        document.getElementById("pMail").innerHTML = "@ znak je obavezan nakon naziva.";
    }
    else if(RegIz2.test(x) == true && RegIz3.test(x) == false){
        document.getElementById("pMail").innerHTML = "Pružitelj mail-a smije sadržavati samo slova.";
    }
    else if(RegIz3.test(x) == true && RegIz4.test(x) == false){
        document.getElementById("pMail").innerHTML = "Domena smije sadržavati samo 2 ili 3 slova.";
    }
    else if(RegIz4.test(x) == true){
        document.getElementById("pMail").innerHTML = "Točan mail!";
    }
    else{
        document.getElementById("pMail").innerHTML = "Krivi mail!";
    }

  }

  function provjera() {
      var a, b, c, d, e;
      a = document.getElementById("ime").value;
      b = document.getElementById("prezime").value;
      d = document.getElementById("grad").value;
      c = document.getElementById("adresa").value;
      e = document.getElementById("email").value;
      var RegIz1 = /^[A-Z][a-zA-Z]+$/;
      var RegIz2 = /^[A-Z][a-zA-Z]+(\s[0-9]{1,3})$/;
      var RegIz3 = /^[A-Z][a-zA-Z]+(\s[a-zA-Z]+)?$/;
      var RegIz4 = /^[a-z_]+@([a-z]+\.)+[a-z]{2,3}$/;
      document.getElementById("rez").innerHTML = "";
      if(RegIz1.test(a) == true && RegIz1.test(b) == true && RegIz2.test(c) == true && RegIz3.test(d) == true && RegIz4.test(e) == true){
          document.getElementById("rez").innerHTML = `${a}, ${b}, ${c}, ${d}, ${e}.`;
      }
     
    
      
  }
