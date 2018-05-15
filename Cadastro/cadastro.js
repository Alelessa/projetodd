function valida(){
    var result = document.getElementById("PF");
    var result2 = document.getElementById("emp");
    var div1 = document.getElementById("fisica");
    var div2 = document.getElementById("empresa");

    if(result.checked == true){
        console.log("deu certo");
        div2.style.display = "none";
    }else{
        div2.style.display = "block";
    }
    if(result2.checked == true){
        div1.style.display = "none";
    }else{
        div1.style.display = "block";
    }

}