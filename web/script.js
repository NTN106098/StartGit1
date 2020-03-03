function tipCalculation(bill) {
    var percentage;
    if (bill <50) {
        percentage = 0.2;
    }else if (bill >=50 && bill < 200) {
        percentage  = .15;
    }else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills =[49,124,268];
var tips =[tipCalculation(bills[0]),
            tipCalculation(bills)[1],
            tipCalculation(bills[2])];
 var finalValues = [bills[0] + tips[0],
                    bills[1] + tips[1],
                    bills[2] + tips[2]];
console.log(tips, finalValues);