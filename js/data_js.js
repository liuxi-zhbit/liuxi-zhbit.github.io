//登录事件对象
var username;
var password;

var root = document.getElementById("root");

var jiben = document.getElementById("jiben");
var pro = document.getElementById("pro");
var mima = document.getElementById("mima");
var other = document.getElementById("other");

//图片管理对象
var img_upload = document.getElementById("img_input");
var img_show = document.getElementById("show");
var img_info = document.getElementById("img_info");
var img_box = document.getElementById("img_box");
var img_change_btn= document.getElementById("img_change_btn");
var src = img_box.src;
console.log(src)

//改密码对象
var inputPassword1 = document.getElementById("inputPassword1");
var inputPassword2 = document.getElementById("inputPassword2");
var inputPassword3 = document.getElementById("inputPassword3");
//修改信息对象
var check_list=document.getElementsByName("sex");
var text_list=document.getElementsByClassName("write");

function user_insert(){
	localStorage.setItem("fdk", "fdksb");
	localStorage.setItem("admin", "123456");
	localStorage.setItem("zhangsan", "123");
}

function questions_insert(){
	localStorage.setItem("1", "√|input标记的required属性规定必须在提交之前填写输入域（不能为空)");
	localStorage.setItem("2", "×|input标记的autofocus属性，用来规定输入域中可选择多个值。");
	localStorage.setItem("3", "√|input标记的list属性规定输入域的datalist。datalist标记是输入域的选项列表。");
	localStorage.setItem("4", "√|细节details标记是一个开关式、交互式控件，用来定义用户可见的或者隐藏的需求补充细节，任何形式的内容都能被放在该标记中。");
	localStorage.setItem("5", "√|进度progress标记用来定义运行中的任务进度（进程）。该标记有两个属性：max表示规定需要完成的值；value规定进程的当前值	");
	localStorage.setItem("6", "2|HTML 指的是？|超文本标记语言（Hyper Text Markup Language)|家庭工具标记语言（Home Tool Markup Language）|超链接和文本标记语言（Hyperlinks and Text Markup Language）|寂寞");
	localStorage.setItem("7", "5|在 HTML 文档中，引用外部样式表的正确位置是？|文档的末尾|文档的顶部|body部分|head部分");
	localStorage.setItem("8", "3|以下哪个是列表元素|li|ul|div|h1");
	
	
	localStorage.setItem("9", "下列属性中，表示过渡的属性是");
	localStorage.setItem("10", "5|下列属性中，表示过渡的属性是|animation|transform|box-shadow|transition");
	localStorage.setItem("11", "4|下列选项中，定义动画animation的关键帧的是|keyfrmaes|@keyframe|@keyframes|@import url( )");
	localStorage.setItem("12", "3|CSS 指的是？Computer Style Sheets|Cascading Style Sheets|Creative Style Sheets|Colorful Style Sheets");
	localStorage.setItem("13", "×|border-radius属性，用于给元素加边框阴影。");
	localStorage.setItem("14", "√|旋转rotate(deg)，可以对元素旋转给定的角度，正值为顺时针，负值为逆时针。");
	localStorage.setItem("15", "√|scale(x,y)方法的作用是缩放指定的元素，参数x 表示元素宽度的缩放倍数，参数y 表示元素高度的缩放倍数。");
	
	localStorage.setItem("16", "5|JavaScript中，用于声明变量的关键字是|if|while|int|var");
	localStorage.setItem("17", "4|下列定义函数fun( ),正确的是|@function fun( ){ }|function: fun( ){ }|function fun( ){ }|fun(){ }");
	localStorage.setItem("18", '3|要引用外部show.js文件，正确的是|<script href="show.js">|<script src="show.js">|<script name="show.js">|<script source="show.js">');
	localStorage.setItem("19", "×|confirm( )方法用于提示用户输入某个值，例如成绩");
	localStorage.setItem("20", "√|JavaScript代码可以放置在主体中。");
	localStorage.setItem("21", "×|定义    var s=new Array(5);  那么， s.length=1");
	localStorage.setItem("22", "×|var num=Math.round(Math.random( )* n+m) 用于产生[m,n]区间的随机数");
	localStorage.setItem("23", '×|var b=Boolean("false");  \ndocument.write(b);\n会输出false');
	localStorage.setItem("24", "√|createElement(tagname)  创建标记名为tagname的节点。");
	localStorage.setItem("25", "√|按照指定的周期（以毫秒计）来调用函数或计算表达式。");
	
}


root.removeChild(pro);
root.removeChild(mima);
root.removeChild(other);

var now = jiben;

if(typeof(Storage)!=="undefined"){
	chakan();
}else{
	alert("不支持数据存储功能");
	login_hidden();
}

function chakan(){
	if(localStorage.length>0){
		for(var i = 0;i<localStorage.length;i++){
			var key = localStorage.key(i);
			var pwd = localStorage.getItem(key);
			console.log(key+"   "+pwd+"  ")
		}
	}
}

function login(){
	username = document.getElementById("username_input").value;
	password = document.getElementById("password_input").value;
	if(username==""||password==""){
		alert("用户名或密码为空!")
		
	}
	else{
		if(localStorage.getItem(username)==password){
			login_hidden();
		}
		else alert("用户不存在或密码错误！")
	}
	
}

function login_hidden(){
	document.getElementById('login_bg').className="hidden";
	document.getElementById('context').className="";
	console.log(password);
}






img_upload.addEventListener('change', function() {
	// 检查文件是否选择:
	if(!img_upload.value) {
		info.innerHTML = '没有选择文件';
		return;
	}	
	// 获取File引用:
	var file = img_upload.files[0];
	//判断文件大小
	var size = file.size;
	if(size >= 1*1024*1024){
		alert('文件大于1兆!');
		return false;
	}
	img_info.innerHTML = '文件: ' + file.name + '<br>' +
						 '大小: ' + file.size + '<br>' +
						 '';

	img_change_btn.dis
	var file_path = img_upload.value;
	img_change_btn.className="btn btn-primary";
	src = window.URL.createObjectURL(file);
	img_show.src=src;
});

function change_pro(){
	if(img_change_btn.className == "btn btn-primary disabled"){
		return;
	}
	img_box.src=src;
	alert("修改成功");
	img_change_btn.className = "btn btn-primary disabled"
}


function change_mima(){
	var password1 = inputPassword1.value;
	var password2 = inputPassword2.value;
	var password3 = inputPassword3.value;
	if(password==undefined){
		alert("游客登录，没有密码");
	}
	else if(password1=="" || password2=="" || password3==""){
		alert("密码不能为空");
	}
	else if(password1 != password){
		alert("密码错误，修改失败");
	}else{
		if(password2 != password3){
			alert("两次输入的新密码不同，请检查！")
		}else{
			localStorage.setItem(username, password3);
			alert("修改成功")
		}
	}
	qingkonng()
	return;
}


function qingkonng(){
	inputPassword1.value="";
	inputPassword2.value="";
	inputPassword3.value="";
}



function change(str){
	root.removeChild(now);
	if(str=="jiben")now = jiben;
	if(str=="pro")now = pro;
	if(str=="mima")now = mima;
	if(str=="other")now = other;
	root.appendChild(now)
}

function change_info(e){
	if(e.className=="btn btn-primary"){
		e.className=e.className="btn btn-success";
		e.innerHTML="确认"
		check_list[0].removeAttribute("disabled")
		check_list[1].removeAttribute("disabled")
		check_list[0].className="";
		check_list[1].className="";
		text_list[0].setAttribute("contenteditable","true");
		text_list[1].setAttribute("contenteditable","true");
		text_list[2].setAttribute("contenteditable","true");
	}else{
		e.className=e.className="btn btn-primary";
		e.innerHTML="修改信息"
		check_list[0].setAttribute("disabled", "disabled")
		check_list[1].setAttribute("disabled", "disabled")
		check_list[0].className="disabled";
		check_list[1].className="disabled";
		text_list[0].setAttribute("contenteditable","false");
		text_list[1].setAttribute("contenteditable","false");
		text_list[2].setAttribute("contenteditable","false");
	}
}