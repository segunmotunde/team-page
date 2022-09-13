let crew = document.getElementsByClassName('crew')
function myFunction(x) {
    if (x.matches) { // If media query matches
        for (let i = 1; i < crew.length; i += 2) {
            crew[i].style.marginTop = '20px';
            console.log(i);
            
        }
      }
     else if(y.matches) {
         for (let i = 1; i < crew.length; i += 2) {
            crew[i].style.marginTop = '20px';
            
        }
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction)
  var y = window.matchMedia("(min-width: 699px)")
  myFunction(y) // Call listener function at run time
  y.addListener(myFunction)