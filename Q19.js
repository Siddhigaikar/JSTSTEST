class InvalidOrderException extends Error()

function order(amount){
    if(amount <= 0){
        throw new InvalidOrderException("invalid order");
    }
    console.log("order placed");
}

try{
    order(0);
}catch(e){
    console.log(e.name + ": " + e.message);
}