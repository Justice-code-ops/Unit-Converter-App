let meters = null
let feet = null
let usliter = null
let usgallon = null
let ukliter = null
let ukgallon =null
let kilogram = null
let pounds = null
let unitOne = document.getElementById("unit1")
let unitTwo = document.getElementById("unit2")
let unitThree = document.getElementById("unit3")
let unitFour = document.getElementById("unit4")
let convertButton = document.getElementById("convert-btn")
let inputValue = document.getElementById("number-input")


convertButton.addEventListener("click", function(){
    let convertingNumber = inputValue.value

    meters = convertingNumber * 0.3048
    feet = convertingNumber * 3.28084
    usliter = convertingNumber * 3.78541
    ukliter = convertingNumber * 4.54609
    usgallon = convertingNumber * 0.264172
    ukgallon = convertingNumber * 0.219969
    kilogram = convertingNumber / 2.20462
    pounds = convertingNumber * 2.20462

    unitOne.innerHTML = `${convertingNumber} feets = <strong>${meters.toFixed(3)}</strong> meters | ${convertingNumber} meters = <strong>${feet.toFixed(3)}</strong> feets`

    unitTwo.innerHTML = `${convertingNumber} liters = <strong>${usgallon.toFixed(3)}</strong> gallons | ${convertingNumber} gallons = <strong>${usliter.toFixed(3)}</strong> liters`

    unitThree.innerHTML = `${convertingNumber} liters = <strong>${ukgallon.toFixed(3)}</strong> gallons | ${convertingNumber} gallons = <strong>${ukliter.toFixed(3)}</strong> liters`

    unitFour.innerHTML = `${convertingNumber} kilos = <strong>${pounds.toFixed(3)}</strong> pounds | ${convertingNumber} pounds = <strong>${kilogram.toFixed(3)}</strong> Kilos`
    if (!convertingNumber) {
        alert("Please input a number");
        return;
    }
})