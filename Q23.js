function filterHighValueOrders(arr,amount){
    return arr.filter(function(order){
        return order > amount;
    });
}

console.log(filterHighValueOrders([100,500,1000,2000],600));