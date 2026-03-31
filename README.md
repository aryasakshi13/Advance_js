# CAllback FUnction 
function which pass as a argument in another function. Callback is a superpower way to handeling async operation in javascript. 

# Issues with  callbacks 
1. Callback Hell
2. Inversion of control

# CAllback Hell 
One callback inside another callback inside another callback is known as callback hell and the code start to grows horizontlly instead of vertically and this structure is known  as pyramid of doom . This type of code very unmaintainable.
 
 # Inverrsion of control 
 Inversion of control means loose the coontrol of code Because here we passing the callback function to another functiong and now here we are giving  the control of the function to some other function  and now we don't know wheather this function is execute or not when we are using callbacks.

# Promises
mdn 
 
 # Solution of inversion Control is promise 

 We cna solve the issue of inversion of control using promise . Here we basically had a promiss object and promiss object will be eventually filled with result of async opertaion that is promise. Here don't pass a function inside other function but we attach a callback function to that object wheneverthe promise is resolved then that callback function willl automaticaly be called by Promises. Promse give the gauratee of transaction completion. because resolve promise just once .

 Promise have 3 state - Either pending , or rejected or fulfill or rejected. We can pas the promise wherever you want to without caring about mutability of it. It is immutable, We can't alter a promise if it is resolved    

 # Promise Chaining

 # Promise Api (Types of promise API)
  promise.all
  Promise.all settle
  Promise.race
  Promise.any

   
