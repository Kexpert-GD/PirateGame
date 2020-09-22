collision = function(arrayA, arrayB){

    if (!arrayA.length || !arrayB.length) return;
  
    for (let a of arrayA) {
  
      for (let b of arrayB) {
  
        if (
          b.offsetLeft < a.offsetLeft   + a.offsetWidth  &&
          b.offsetLeft + b.offsetWidth  > a.offsetLeft   &&
          b.offsetTop  < a.offsetTop    + a.offsetHeight &&
          b.offsetTop  + b.offsetHeight > a.offsetTop
        )  {
          return a;
        }
    
      }
    }
  };