function Copy(name, title, picture){
    var myDiv = document.getElementById("copy");
    var divClone = myDiv.cloneNode(true);
    document.body.appendChild(divClone);
    document.getElementById("name1").innerHTML = name;

    document.getElementById("title").innerHTML = title;

    document.getElementById('pic').getElementsByTagName('img')[0].src= picture;
}
