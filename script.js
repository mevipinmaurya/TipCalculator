const amt = document.querySelector(".amount input")
const calTip = document.getElementById("calTip")
const btn = document.querySelectorAll(".buttons")
const selTip = document.getElementById("selected-tip")
const billSplit = document.querySelector(".bill-split input")
const tipAmt = document.getElementById("tipPerPerson")
const totalTipAmount = document.getElementById("totalTipAmount")
const totalAmountPerPerson = document.getElementById("totalAmountPerPerson")
const totalPayableAmount = document.getElementById("totalPayableAmount")
const resetBtn = document.getElementById("reset")


Array.from(btn).forEach((button)=>{
    button.addEventListener("click",()=>{
        // console.log(button.innerText)
        selTip.innerText = button.innerText
    })
})


calTip.addEventListener("click", () => {
    // console.log("clicked")
    let amtVal = amt.value
    console.log(amtVal)
    // console.log(tipPer)
    console.log(selTip.innerText)

    displayTipAmount()
    displayTotalAmout()
})

const displayTipAmount = () => {
    let tipVal = Math.abs((amt.value * selTip.innerText) / 100)
    let totalTip = billSplit.value * tipVal
    tipAmt.innerText = `${tipVal} ₹`
    totalTipAmount.innerText = `${totalTip} ₹`
}

const displayTotalAmout = () => {
    let tipVal = Math.abs((amt.value * selTip.innerText) / 100)
    let amtPerPerson = Math.abs(tipVal + (amt.value / 2))
    let totalAmount = Math.abs(billSplit.value * amtPerPerson)
    totalAmountPerPerson.innerText = `${amtPerPerson} ₹`
    totalPayableAmount.innerText = `${totalAmount} ₹`
}


resetBtn.addEventListener("click", ()=>{
    // console.log("clicked")
    amt.value = "0.00"
    selTip.innerText = "10"
    billSplit.value = "0"
    // tipAmt.innerText = "0.00 ₹"
    // totalTipAmount.innerText = "0.00 ₹"
    // totalAmountPerPerson.innerText = "0.00 ₹"
    // totalPayableAmount.innerText = "0.00 ₹"
    displayTipAmount()
    displayTotalAmout()
})
