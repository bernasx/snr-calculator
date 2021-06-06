document.getElementById("calculateBtn").addEventListener("click", function(){
    let frequency = parseInt(document.getElementById("frequency").value);
    let signalnoise = parseInt(document.getElementById("signalnoise").value);

    //calculate result
    let result = frequency * Math.log2(1+Math.pow(10,signalnoise/10));

    //print out result
    document.getElementById("result").innerHTML = "Resultado: " + result;
    
  });

  document.getElementById("clearBtn").addEventListener("click", function(){
    document.getElementById("frequency").value = "";
    document.getElementById("signalnoise").value = "";
  });