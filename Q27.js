function checkDeliveryStatus(status){
    return new Promise(function(resolve,reject){

        if(status){
            resolve("Order Delivered Successfully");
        }else{
            reject("Order Not Delivered");
        }

    });
}

checkDeliveryStatus(true)
.then(function(msg){
    console.log(msg);
})
.catch(function(err){
    console.log(err);
});