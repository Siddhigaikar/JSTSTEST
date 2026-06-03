function checkOrderAmount(amount){
    if(amount > 50000){
        throw "Order Amount Exceeds Payment Limit";
    }
}

try{
    checkOrderAmount(60000);
}catch(e){
    console.log(e);
}