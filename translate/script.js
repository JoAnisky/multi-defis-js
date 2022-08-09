var selectElem = document.getElementById('country');
var pElem = document.getElementById('hello');

// Quand une nouvelle <option> est selectionnée
selectElem.addEventListener('change', function() {
  var index = selectElem.selectedIndex;
  // Rapporter cette donnée au <p>
  switch (index) {
    case 0:
        pElem.innerText = "Bonjour";
        break;
    case 1:
        pElem.innerText = "Ola";
        break;
    case 2:
        pElem.innerText = "Hello";
        break;
    case 3:
        pElem.innerText = "Buongiorno";
        break;
    case 4:
        pElem.innerText = "Hallo";
        break;
    default:
        break;
  }
});