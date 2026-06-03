const orders=[100,200,300,400,500];

const withDelivery=orders.map(function(amount){
    return amount+50;
});
console.log(withDelivery);

const highValue=orders.filter(function(amount){
    return amount>250;
});
console.log(highValue);


const totalRevenue=orders.reduce(function(total,amount){
    return total+amount;
},0);

console.log(totalRevenue);