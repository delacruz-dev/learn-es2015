/** ES5 example **/
runAnimation(0);
setTimeout(function() {
    runAnimation(1);    
    setTimeout(function() {
        runAnimation(2);
    }, 1000);
}, 1000);