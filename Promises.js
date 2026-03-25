const cart= ['shoes', "pant", "kurta"];

createOrder(cart, function(orderId){
    proceedTopayment(orderId, function(paymentInfo){
        showOrderSummary(paymentInfo, function(){
            updateWalletBalance();
        })
    });
});





// const promise = createOrder(orderId); 
// promise.then(function(orderId){
//     proceedTopayment(orderId);
// });


// or we can write like this 
createOrder(cart)
.then(function(orderId){
   return proceedTopayment(orderId);
})
.then(function(paymentInfo){
   return  showOrderSummary(paymentInfo);
})
.then(function(paymentInfo){
   return updateWalletBalance(paymentInfo);
});
