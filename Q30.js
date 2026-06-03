function totalCost(...items){
    let total=0;

    for(let price of items){
        total=total+price;
    }

    return total;
}

console.log(totalCost(100,200,300));
console.log(totalCost(50,150));