function getNumber(num) {

    var Result = document.getElementById("Result");
    Result.value += num;



}

function Clear() {

    var Result = document.getElementById("Result");
    Result.value = "";

}

function getResult() {

    var Result = document.getElementById("Result");
    Result.value += eval(Result.value);



}