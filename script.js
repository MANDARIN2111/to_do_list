document.getElementById("btn").addEventListener("click",newElement); 
//adding element to list
function newElement() {
	let inputVal = document.getElementById("inputVal").value;
	if(inputVal ===""){
		alert("enter value");
	}else{
		let ul = document.getElementById("listTask");
		let li = document.createElement("li");
		let t = document.createTextNode(inputVal);
		li.appendChild(t);
		let butn = document.createElement("button");
		let t2 = document.createTextNode("X");
		butn.appendChild(t2);
		butn.className = "close";
		li.appendChild(butn);	
		document.getElementById("listTask").appendChild(li);
	}
	document.getElementById("inputVal").value ="";
	for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    	}
	}
}


//closing element using 'X' button
let close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
  let div = this.parentElement;
  div.style.display = "none";
  }
}

//clearing the entire list 
document.getElementById("clear").addEventListener("click",delAll);
function delAll(){
	document.getElementById("listTask").innerHTML ="";
}