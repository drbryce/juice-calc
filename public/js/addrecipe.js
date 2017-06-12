//var addFlavorButton = document.getElementById('addFlavorButton');

var myfunction = function() {
    var flavorDiv = document.getElemenyById('flavorDiv');
    var cln = flavorDiv.cloneNode(true);

    document.getElementById('individualFlav').appendChild(cln);
};

//addFlavorButton.onclick = myfunction();