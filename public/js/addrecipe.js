function myfunction () {
    var flavorDiv = document.getElementById('flavorList').firstChild;
    var cln = flavorDiv.cloneNode(true);
    cln.style.display = 'block';

    document.getElementById('flavorList').appendChild(cln);
};
