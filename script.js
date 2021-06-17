// Variables

let bill = document.getElementById("bill_value")
let tip = document.getElementById("tip_value")
let people = document.getElementById("people_value")
let total = document.getElementById("total")
let split = document.getElementById("split")
let totalEur = document.getElementById("total-eur")
let splitEur = document.getElementById("split-eur")
let totalPound = document.getElementById("total-pound")
let splitPound = document.getElementById("split-pound")
let euroCheck = document.getElementById("euro")
let gbpCheck = document.getElementById("gbp")
let euResult = document.getElementById("eu-result")
let gbpResult = document.getElementById("gbp-result")

const calcBtn = document.getElementById("calc-btn")


// Calculate the result
function calcTotal() {
    let totalAmount = (parseFloat(bill.value) + parseFloat(bill.value)*parseFloat(tip.value)/100).toFixed(2)
    let splitAmount = (totalAmount / people.value*1).toFixed(2)
    total.textContent = "$ " + totalAmount
    split.textContent = "$ " + splitAmount
    totalEur.textContent = "€ " + (totalAmount*0.83).toFixed(2)
    splitEur.textContent = "€ " + (splitAmount*0.83).toFixed(2)
    totalPound.textContent = "£ " + (totalAmount*0.71).toFixed(2)
    splitPound.textContent = "£ " + (splitAmount*0.71).toFixed(2)
    checkInput()
    checkEu()
    checkGbp()
}

// Functions for checking input fields and checkboxes

function checkInput() {
    if (bill.value == "") {
        total.textContent = ""
        split.textContent = ""
        totalEur.textContent = ""
        splitEur.textContent = ""
        totalPound.textContent = ""
        splitPound.textContent = ""
        alert("Please enter the total of your bill.")
    }   else if (tip.value == "") {
        total.textContent = ""
        split.textContent = ""
        totalEur.textContent = ""
        splitEur.textContent = ""
        totalPound.textContent = ""
        splitPound.textContent = ""
        alert ("Please enter how much ypou would like to tip(in %).")
    }   else if (people.value == "") {
        total.textContent = ""
        split.textContent = ""
        totalEur.textContent = ""
        splitEur.textContent = ""
        totalPound.textContent = ""
        splitPound.textContent = ""
        alert ("Please enter the amount of people you've shared the meal with.")
    }
}

function checkEu() {
    if (euroCheck.checked) {
        euResult.style.display = "block"
    } else {
        euResult.style.display = "none"
    }
}

function checkGbp() {
    if (gbpCheck.checked) {
        gbpResult.style.display = "block"
    } else {
        gbpResult.style.display = "none"
    }
}

// Add event listeners
calcBtn.addEventListener("click", calcTotal)
document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      calcTotal()
    }
})

