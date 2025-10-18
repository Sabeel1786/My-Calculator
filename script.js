
const displayVal = document.getElementsByTagName("input")[0];
for (let i = 0; i <= 9; i++) {
    const btn = document.getElementById(`btn${i}`)

    btn.addEventListener("click", () => {
        displayVal.value += btn.textContent
    })

}
function AllClear() {
    displayVal.value = "";
}
const btnAc = document.getElementById("btnAC");

btnAc.addEventListener("click", AllClear)

function DeleteVal() {
    displayVal.value = displayVal.value.slice(0, -1)

}
const btnDel = document.getElementById("btnDel")
btnDel.addEventListener("click", DeleteVal)

const btnResult = document.getElementById("btnResult")

function Result() {
    try {
        displayVal.value = eval(displayVal.value);
    } catch {
        displayVal.value = "Error";
    }
}

btnResult.addEventListener("click", Result)

function operator() {
    const operatorId = ["btnAdd", "btnSub", "btnMul", "btnDiv"]
    for (let i = 0; i < operatorId.length; i++) {
        const op = document.getElementById(operatorId[i])
        op.addEventListener("click", () => {
            displayVal.value += op.textContent
        })

    }
}
operator()

