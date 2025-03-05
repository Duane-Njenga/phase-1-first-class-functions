function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    const FN = function named(){};
    return FN;
}

function returnsAnAnonymousFunction(){
    () => {};
    return function(){};

}