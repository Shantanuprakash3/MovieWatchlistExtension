
function addNewMovie(list, itemText){
	var listItem = document.createElement("li");
	listItem.innerText = itemText;

	list.appendChild(listItem);
}

	var inItemText = document.getElementById("inItemText");
	inItemText.focus();

var btnNew = document.getElementById("btnAdd");
btnNew.onclick = function(){

	var itemText = inItemText.value;
	if (!itemText || itemText=="") {return false;};
	addNewMovie(document.getElementById("movieList"), itemText);
};

var btsearch =document.getElementById("btnSearch");
btsearch.onclick =function(){
        var Searchtxt = document.getElementById("inItemText").value;
        window.open ("http://www.imdb.com/find?" + encodeURIComponent(Searchtxt));
    };