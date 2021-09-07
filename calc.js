const _5 = document.getElementById('5');
const _10 = document.getElementById('10');
const _15 = document.getElementById('15');
const _25 = document.getElementById('25');
const _50 = document.getElementById('50');
const custom = document.getElementById('custom');
var bill = document.getElementById("bill");
const people = document.getElementById('people');
const ans = document.getElementById('ans');
// const main = document.getElementById('main');
// const tipValue = 0;



// function tipAmount_5() {
//     const amount = bill * _5;
//     console.log(amount)
// }

// function kira() {

// console.log(bill);
// }
// function lima() {


//     return bill * 0.05;
// }

// switch (operator) {
//     case addEventListener('click', _5):
//         tipValue = 0.05 * bill;
//         console.log('${tipValue}');
//         break;

//     case addEventListener('click', _10):
//         tipValue = 0.10 * bill;
//         console.log('${tipValue}');
//         break;


// }

function _reset() {
    location.reload();
}


// yang jadi hok bawah ni???

_5.addEventListener('click', function() {
    var tipValue = 0.05 * bill.value / people.value;
    ans.innerHTML = tipValue.toFixed(2);
    var sq = (bill.value / people.value) + tipValue;
    total.innerHTML = sq.toFixed(2);
});
_10.addEventListener('click', function() {

    var tipValue = 0.10 * bill.value / people.value;
    ans.innerHTML = tipValue.toFixed(2);
    var sq = (bill.value / people.value) + tipValue;
    total.innerHTML = sq.toFixed(2);

});
_15.addEventListener('click', function() {

    var tipValue = 0.15 * bill.value / people.value;
    ans.innerHTML = tipValue.toFixed(2);
    var sq = (bill.value / people.value) + tipValue;
    total.innerHTML = sq.toFixed(2);

});
_25.addEventListener('click', function() {

    var tipValue = 0.25 * bill.value / people.value;
    ans.innerHTML = tipValue.toFixed(2);
    var sq = (bill.value / people.value) + tipValue;
    total.innerHTML = sq.toFixed(2);

});
_50.addEventListener('click', function() {

    var tipValue = 0.50 * bill.value / people.value;
    ans.innerHTML = tipValue.toFixed(2);
    var sq = (bill.value / people.value) + tipValue;
    total.innerHTML = sq.toFixed(2);

});
custom.addEventListener('click', function() {

    var tipValue = custom.value / 100 * bill.value / people.value;
    ans.innerHTML = tipValue.toFixed(2);
    var sq = (bill.value / people.value) + tipValue;
    total.innerHTML = sq.toFixed(2);

});


















// var x = 0 

// switch (x) {
//     case 0:
//         let tipValue = 0.05 * bill;
//         console.log('${');
//         break;

//     case 1:
//         tipValue = 0.10 * bill;
//         console.log('${tipValue}');
//         break;


// }