function myfunction () {
    var flavorDiv = document.getElementById('flavorList').lastChild;
    alert('did the thing');
    var cln = flavorDiv.cloneNode(true);

    document.getElementById('flavorList').appendChild(cln);
};
