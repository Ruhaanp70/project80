function getpara1() {
    var inputs = [];
    for (var i = 1; i <= 6; i++) {
        inputs.push(document.getElementById("para1_input_" + i).value);
    }
    var joinedstring = inputs.join(". ");
    document.getElementById("showpara1").innerHTML = joinedstring;

}

function getpara2() {
    var inputs = [];
    for (var x = 1; x <= 6; x++) {
        inputs.push(document.getElementById("para2_input_" + x).value);
    }
    var joinedstring = inputs.join(". ");
    document.getElementById("showpara2").innerHTML = joinedstring;
}


function joinpara() {
var para1_text=document.getElementById("showpara1").innerHTML;
var para2_text=document.getElementById("showpara2").innerHTML;
var  output= para1_text +"<br/>"+" " +" " + para2_text;
document.getElementById("showoutput").innerHTML=output;
}
