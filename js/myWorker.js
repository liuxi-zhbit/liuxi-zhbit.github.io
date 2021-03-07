var t=new Array();
function c(){
	for(var j=0;j<10;j++){
		t[j]=Math.floor(Math.random()*90+10);
	}
	self.postMessage(t.sort());
	setTimeout("c()",1000);
}
c();
//self.addEventListener('message', c(), false);
