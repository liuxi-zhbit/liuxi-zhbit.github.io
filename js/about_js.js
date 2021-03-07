var m = document.getElementById("pinglun");
var txt = document.getElementById("com_bnt");
document.getElementById("comment").removeChild(m);

function clear_text(){
	txt.innerHTML="";
}

function change_comment(){
	var t = txt.innerHTML;
	if(t==""){
		alert("请输入内容");
		return
	}
	
	var new_div=m.cloneNode(true);
	
	var li=new_div.childNodes;
	li[5].innerHTML = t;
	document.getElementById("comment").appendChild(new_div);
	alert("评论成功")
	console.log(new_div)
	txt.innerHTML="";
}