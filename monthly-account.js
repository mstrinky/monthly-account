const fullIncome = document.getElementById('income');
const incomeNumber = fullIncome.value;
document.getElementById('calculate').addEventListener('click',function(){
// console.log('clicked');
const food = document.getElementById('food');
const foodCost = food.value;
const foodCostAmount = parseInt(foodCost);
// console.log(foodCost);
const rant = document.getElementById('rant');
const rantCost = rant.value;
const rantCostAmount = parseInt(rantCost);
const cloth = document.getElementById('cloth');
const clothCost = cloth.value;
const clothCostAmount = parseInt(clothCost);
const calculate = foodCostAmount + rantCostAmount + clothCostAmount;
console.log(calculate);
})