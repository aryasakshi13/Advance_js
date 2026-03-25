//  normal callback  function
// setTimeout( function (){
//     console.log("callback is running")
// },5000)

// const cart = []

//  Callback Hell 
 const cart = ["shoes","paints", "kurta"];

 api.createOrder(cart, function (){
    api.addCart(function (){
        api.proceedTopayment(function (){
            api.showOrderSummary(function (){

            })
        })
    })
 })

