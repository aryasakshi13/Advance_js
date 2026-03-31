const cart = ["Shoes", "Slipper", " jeans","CAr"];

const promise = createOrder(cart);

promise.then(function(orderId){
    console.log(orderId);
    // proceedtoPayment(orderId);
});

//  Producer 
       function createOrder(cart){
       const pr = new Promise(function(resolve, reject){
        //  createOrder
        // validateCart
        // OrderId
        if(!validateCart(cart)){
            const err = new Error("cart is not valid");
            reject(err);
        }  
         
        const orderId = "12345";
        if(orderId){
           resolve(orderId) ;
        }

       });

       return pr;
    }

    function validateCart(cart){
        return true ;
    }
