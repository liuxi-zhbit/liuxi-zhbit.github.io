// document.ready(function(){
	window.onscroll = function(){
		console.log(this.scrollY);
		console.log($("nav"));
		if(this.scrollY > 350)
		$("nav").className= "navbar sticky" ;
		else
		$("nav").className= "navbar" ;
	};
// });
function $(id){
	return document.getElementById(id);
}