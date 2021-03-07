var qu = document.getElementById("qu")//大盒子
var root = document.getElementById("qu_root")
var qu_box = document.getElementById("qu_box")
var ne=document.getElementById("ne");
var be=document.getElementById("be");

var s = new Array(),answer = new Array();
var len,now;

exit_qu()


function exit_qu(){
	root.removeChild(qu_box);
	qu.className+=" hidden";
}

function befo(e){
	if(--now){
		var qu_now=s[now];
		if(isNaN(qu_now[0])){
			change_quA(qu_now)
		}else{
			change_quB(qu_now)
		}
	}
	if(now==len){
		ne.className="close_bnt btn btn-primary";
		ne.innerHTML="下一题"
	}
	if(now==1){
		e.setAttribute("disabled", "disabled");
	}
}

function next(e){
	// console.log(now+"  "+len);
	var qu_now=s[now];
	// console.log(qu_now);
	if(now==1){
		be.setAttribute("disabled", "disabled");
		ne.className="close_bnt btn btn-primary";
		ne.innerHTML="下一题"
	}
	if(now==len){
		
		e.className="close_bnt btn btn-success";
		e.innerHTML="提交"
	}else if(now==len+1){
		var rt=confirm("确定提交？");
		if(rt){
			//处理提交
			console.log(answer)
			while(qu_box.hasChildNodes())qu_box.removeChild(qu_box.firstChild);
			var sc=0;
			var rt_str="";
			for(var i=1;i<=len;i++){
				t_ans=s[i];
				
				rt_str+=i+"、正确答案：&nbsp;"+check_ans(t_ans[0])+"&nbsp;&nbsp;我的答案：&nbsp;"+check_ans(answer[i+1]=="-"?"未作答":answer[i+1])+"<br />";
				console.log(answer[i+1])
				if(answer[i]==t_ans[0]){
					sc++;
				}
			}
			var p1 = document.createElement("div");
			p1.innerHTML=rt_str+"得分："+Math.floor(sc/len*100);
			qu_box.appendChild(p1);
			root.appendChild(qu_box);
			be.setAttribute("disabled", "disabled");
			ne.setAttribute("disabled", "disabled");
		}
		return;
	}
	else if(now>1){
		be.removeAttribute("disabled");
	}
	if(isNaN(qu_now[0])){
		change_quA(qu_now)
	}else{
		change_quB(qu_now)
	}
	now++;
}

function check_ans(an){
	if(isNaN(an)){
		return an;
		
	}else{
		if(an=="2")return "A"
		if(an=="3")return "B"
		if(an=="4")return "C"
		if(an=="5")return "D"
	}
}


function change_quA(str){
	while(qu_box.hasChildNodes())qu_box.removeChild(qu_box.firstChild);
	var ques=document.createTextNode(str[1]);
	
	var p1 = document.createElement("div");
	var p2 = document.createElement("div");
	
	p1.innerHTML="正确";
	p2.innerHTML="错误";
	
	
	qu_box.appendChild(ques);
	qu_box.appendChild(p1);
	qu_box.appendChild(p2);
	root.appendChild(qu_box);
	
	p1.onclick = function(){
		answer[now]="√";
		p1.className="check";
		p2.className="";
	}
	p2.onclick = function(){
		answer[now]="×";
		p2.className="check";
		p1.className="";
	}
	
}



function change_quB(str){
	
	while(qu_box.hasChildNodes())qu_box.removeChild(qu_box.firstChild);
	var ques=document.createTextNode(str[1]);
	
	var p1 = document.createElement("div");
	var p2 = document.createElement("div");
	var p3 = document.createElement("div");
	var p4 = document.createElement("div");

	p1.innerHTML="A、"+str[2];
	p2.innerHTML="B、"+str[3];
	p3.innerHTML="C、"+str[4];
	p4.innerHTML="D、"+str[5];
	
	qu_box.appendChild(ques);
	qu_box.appendChild(p1);
	qu_box.appendChild(p2);
	qu_box.appendChild(p3);
	qu_box.appendChild(p4);
	root.appendChild(qu_box);
	p1.onclick = function(){
		answer[now]="2";
		p1.className="check";
		p2.className="";
		p3.className="";
		p4.className="";
	}
	p2.onclick = function(){
		answer[now]="3";
		p1.className="";
		p2.className="check";
		p3.className="";
		p4.className="";
	}
	p3.onclick = function(){
		answer[now]="4";
		p1.className="";
		p2.className="";
		p3.className="check";
		p4.className="";
	}
	p4.onclick = function(){
		answer[now]="5";
		p1.className="";
		p2.className="";
		p3.className="";
		p4.className="check";
	}
}


function html_testing(e){
	for(var i = 1;i<=8;i++){
		s[i] = (localStorage.getItem(i).split("|"));
	}
	
	switch(e.id){
		case "html_seq":
			len=8;
			break;
		case "html_ran":
			len=5;
			
			var temp = new Array();
			
			for(var i=1;i<=5;i++){
				// console.log("\n"+s.length);
				var ran_num=Math.floor(Math.random() * (s.length-1))+1;//根据长度生成随机数
				// console.log(ran_num)
				var t=s.splice(ran_num,1);//从
				// console.log(t)
				temp[i]=t[0];
				console.log(ran_num)
				console.log(s)
				console.log(t)
				console.log(temp)
			}
			s = temp;
			// console.log(s)
			// console.log(temp);
			//s[1,2,3,5,7,8]
			//t[6]
			//temp[4,5,1,2,8]
	}
	init();
	next(ne);
}

function css_testing(e){
	for(var i = 1;i<=6;i++){
		s[i] = (localStorage.getItem(i+9).split("|"));
	}
	
	switch(e.id){
		case "css_seq":
			len=6;
			break;
		case "css_ran":
			len=5;
			
			var temp = new Array();
			
			for(var i=1;i<=5;i++){
				// console.log("\n"+s.length);
				var ran_num=Math.floor(Math.random() * (s.length-1))+1;
				// console.log(ran_num)
				var t=s.splice(ran_num,1);
				// console.log(t)
				temp[i]=t[0];
			}
			s = temp;
			// console.log(s)
			// console.log(temp);
	}
	init();
	next(ne);
}


function js_testing(e){
	for(var i = 1;i<=10;i++){
		s[i] = (localStorage.getItem(i+15).split("|"));
	}
	
	switch(e.id){
		case "js_seq":
			len=10;
			break;
		case "js_ran":
			len=5;
			
			var temp = new Array();
			
			for(var i=1;i<=5;i++){
				// console.log("\n"+s.length);
				var ran_num=Math.floor(Math.random() * (s.length-1))+1;
				// console.log(ran_num)
				var t=s.splice(ran_num,1);
				// console.log(t)
				temp[i]=t[0];
			}
			s = temp;
			// console.log(s)
			// console.log(temp);
	}
	init();
	next(ne);
}



function init(){
	now=1;
	ne.removeAttribute("disabled");
	for(var i = 1;i<=len+10;i++)
	answer[i]="-";
	qu.className-=" hidden";
}