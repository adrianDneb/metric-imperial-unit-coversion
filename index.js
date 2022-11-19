/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputNum = document.querySelector("#input_num");
const convertBtn = document.querySelector("#convert_btn");
const lengthConversion = document.querySelector("#length_conversion");
const volumeConversion = document.querySelector("#volume_conversion");
const massConversion = document.querySelector("#mass_conversion");


convertBtn.addEventListener("click", function () {
    let meterResult = inputNum.value / 3.28084;
    let feetResult = inputNum.value * 3.28084;
    let literResult = inputNum.value / 0.264172;
    let gallonResult = inputNum.value * 0.264172;
    let kilogramResult = inputNum.value / 2.20462;
    let poundResult = inputNum.value * 2.20462;

    lengthConversion.innerHTML = `${inputNum.value * 1} meter/s = ${feetResult.toFixed(3)} foot/feet | ${inputNum.value * 1} foot/feet = ${meterResult.toFixed(3)} meter/s`;
    volumeConversion.innerHTML = `${inputNum.value * 1} liter/s = ${gallonResult.toFixed(3)} gallon/s | ${inputNum.value * 1} gallon/s = ${literResult.toFixed(3)} liter/s`;
    massConversion.innerHTML = `${inputNum.value * 1} kilogram/s = ${poundResult.toFixed(3)} pound/s | ${inputNum.value * 1} pound/s = ${kilogramResult.toFixed(3)} kilogram/s`;
}
);
// function renderConversion() {
//     lengthConversion.innerHTML = `${inputNum.value} meter/s = ${feetResult} foot/feet | ${inputNum.value} foot/feet = ${meterResult}`;
//     volumeConversion.innerHTML = `${inputNum.value} liter/s = ${feetResult} gallon/s | ${inputNum.value} foot/feet = ${meterResult}`;
//     massConversion.innerHTML = `${inputNum.value} meter/s = ${feetResult} foot/feet | ${inputNum.value} foot/feet = ${meterResult}`;
// };
