// var x = 6;
function compare(x) { //função
    // alert("-" + x + "-");
    if (x === '') {
        alert('O campo está vazio');
        return false;
    }

    if (x < 5) {
        if(x<0){
             alert(x+" é menor que 5 e negativo");
        }else{
            alert(x+" é menor que 5 e positivo");
        }
       
    } else if (x == 5) {
        alert("igual a 5");
    } else {
        alert("maior que 5");
    }
}
