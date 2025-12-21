// Immediately Invoked Function Expressions (IIFE)
//->a JavaScript function that runs as soon as it is defined. 
//   It's a common pattern used primarily to create a local scope for variables to prevent them from polluting the global namespace. 

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();  //-> ";" -> used to stop.

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('SPINO')

