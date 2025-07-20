//  Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB CONNECTED`)
})();
//          n   ote - make sure to use ;
( function aurcode () {
    //  named ifie
    console.log(`DB CONNECTED TWO`)
})() ;

( (name)=>{
    // unnamed IFIE
    console.log(`DB CONNECTED 3 ${name}`)
})("Pradeep")