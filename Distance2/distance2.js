var input = document.getElementById('input');
var result = document.getElementById('result');

var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue, resultTypeValue;



input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;


function myResult() {
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    // meter to kilimetr
    if (inputTypeValue === "meter" && resultTypeValue === "kilometer") {
        result.value = Number(input.value) * 0.001;

        // meter to ft
    } else if (inputTypeValue === "meter" && resultTypeValue === "centimeter") {
        result.value = Number(input.value) * 3.28083;
        // meter to meter
    } else if (inputTypeValue === "meter" && resultTypeValue === "meter") {
        result.value = input.value
    }


    // kilometer to metr
    if (inputTypeValue === "kilometer" && resultTypeValue === "meter") {
        result.value = Number(input.value) * 1000;

        // kilometer to ft
    } else if (inputTypeValue === "kilometer" && resultTypeValue === "centimeter") {
        result.value = Number(input.value) * 3280;
        // kilometer to kilometer
    } else if (inputTypeValue === "kilometer" && resultTypeValue === "kilometer") {
        result.value = input.value
    }

    // ft to kilometer
    if (inputTypeValue === "centimeter" && resultTypeValue === "kilometer") {
        result.value = Number(input.value) * 0.0003048;

        // ft to kilometer
    } else if (inputTypeValue === "centimeter" && resultTypeValue === "meter") {
        result.value = Number(input.value) * 0.3048;
        // ft to ft
    } else if (inputTypeValue === "centimeter" && resultTypeValue === "centimeter") {
        result.value = input.value
    }



}