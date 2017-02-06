function getFirstSelector(selector) {
    // return the first element that matches any given selector
    return document.querySelector(selector);
}

function nestedTarget() {
    return document.querySelector('#nested .target');
}

function increaseRankBy(n) {

      var ranked = document.querySelectorAll('.ranked-list li');

      for (var i = 0; i < ranked.length; i++) {
            var current = ranked[i].innerHTML;  
            // console.log(current);  // note 'current' returns a string so convert to integer below
            ranked[i].innerHTML = parseInt(current) + n;
      }
}

function deepestChild() {
    return document.querySelector('div#grand-node div div div div');
}