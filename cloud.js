var selected_id=0,al=0;
var s_id=0;

 function addR(){
	
	var e=1;
	//-------------//
	if(selected_id == 0){
		//adding the alert message
	var x = document.getElementById("alertmsg");
	
	if (x.style.display === "none") {
    x.style.display = "block";
	e=0;
  }
	}
	
	else{
		//remove the alert message
		
		var alertm = document.getElementById("alertmsg");
		if(e = 1 ){alertm.style.display = "block";}
		else if(e==0){
			alertm.style.display = "none";
		}
	if (alertm.style.display === "block") {
			alertm.style.display = "none";
  }
		
	var checkAttr = document.getElementById(selected_id).hasAttribute("selected");
	var x = document.createElement("LI");
	var newR=document.getElementById(selected_id).innerText;
	var t = document.createTextNode(newR);
	x.setAttribute("id",selected_id);
	x.setAttribute("class","list-group-item");
	x.className +=" text-center";
	x.onmousedown= function() {
			changeColor(x.getAttribute("id"))}
	x.appendChild(t);
	document.getElementById("second").appendChild(x);
	var item = document.getElementById(selected_id);
	item.parentNode.removeChild(item);
	selected_id=0;
	
	}
  }
  
  function removeR(){
	  
	  //----------//
	var e=1;
	if(selected_id == 0){
		//adding the alert message
	var x = document.getElementById("alertmsgR");
	if (x.style.display === "none") {
    x.style.display = "block";
	e=0;
  }
	}
	
	else{
		//remove the alert message
		var alertm = document.getElementById("alertmsgR");
		if(e = 1 ){alertm.style.display = "block";}
		else if(e==0){
			alertm.style.display = "none";
		}
	if (alertm.style.display === "block") {
			alertm.style.display = "none";
  }
	}
	//-----// 
	
	var checkAttr = document.getElementById(selected_id).hasAttribute("selected");
	var x = document.createElement("LI");
	var newR=document.getElementById(selected_id).innerText;
	var t = document.createTextNode(newR);
	x.setAttribute("id",selected_id);
	x.setAttribute("class","list-group-item");
	x.className +=" text-center";
	x.onmousedown= function() {
			changeColor(x.getAttribute("id"))}
	x.appendChild(t);
	var item = document.getElementById(selected_id);
	document.getElementById("second").removeChild(item);
	document.getElementById("first").appendChild(x);
	
	selected_id=0;
  }	  
  
function changeColor(id) {
	// remove the alertmsg after selection
	var alertm = document.getElementById("alertmsg");
	var alertr =  document.getElementById("alertmsgR");
	if(al==0){
	alertm.style.display = "block";
	alertr.style.display = "block";	
	}
	if (alertr.style.display === "block" ) {
			alertr.style.display = "none";
	}
	if (alertm.style.display === "block" ) {
			alertm.style.display = "none";
	}
	var check_Selected_id = document.getElementById(id).hasAttribute("selected");
	var listitem = document.getElementById(id);
	var selected_listitem=document.getElementById(selected_id);
	if(!check_Selected_id){
		if(selected_listitem != null)
		{
			selected_listitem.removeAttribute("style");
			selected_listitem.removeAttribute("selected");
		}
	listitem.style.backgroundColor = "#d3d3d3";
	listitem.setAttribute("selected","selected");
	
	selected_id=id;
	}
	else{
		s_id=id;
		listitem.removeAttribute("style");
		listitem.removeAttribute("selected");
		}
}
