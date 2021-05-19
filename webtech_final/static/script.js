document.getElementById("confidence").onload = function() {myfunc()};

function myfunc() {
    var decimal = parseFloat(document.getElementById("confidence").innerHTML).toFixed(4); 
    decimal = decimal * 100;
    document.getElementById("confidence").innerHTML = decimal + "%"
    console.log(decimal);
    console.log("ASDSADASDSAD");
}
