function calculateTip(event) {
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let ServiceQual = document.getElementById('ServiceQual').value;
    let numOfPeople = document.getElementById('people').value;

if(numOfPeople == "" | numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById('each').style.display = "none"
}  else {
    document.getElementById('each').style.display = "block"
}
       
let total = (bill * ServiceQual) / numOfPeople;
total = total.toFixed(2);
document.getElementById('tip').innerHTML = total;
document.getElementById('totalTip').style.display = 'block';

}

document.getElementById('totalTip').style.display = 'none';
document.getElementById('each').style.display= "none";

document.getElementById('tipsform').addEventListener('submit', calculateTip);