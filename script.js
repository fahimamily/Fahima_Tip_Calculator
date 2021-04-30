let bill = document.getElementById('billAmount');
let percentage = document.getElementById('percentage');
let result = document.getElementById('result');
let calcBtn = document.getElementById('Calculate');

calcBtn.addEventListener('click', calculateTip);

function calculateTip(){
 let tip = billAmount.value * (percentage.value / 100);
 console.log(tip);
 result.innerHTML = "$ " + tip.toFixed(2);
}