function download(filename, text) {
	let element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}
function info() {
	let x = document.getElementById("info").value;
	document.getElementById("address").innerHTML = x;
}
function save() {
	download("download.txt", check())
}
function check() {
	let txt = "with: ";
	let list = document.getElementsByName('radio');
	alert(list.length);// nezkapēc nestrādā
	for(var i=0;i<list.length;i++){
		if(list[i].type=='radio' && list[i].checked){
			txt+=list[i].value;
			break;
		}
	}
	return txt;
}