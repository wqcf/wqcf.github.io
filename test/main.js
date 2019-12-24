

function addLoadEvent(func){
	var oldfunc = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	}
	else{
		oldfunc();
		func();
	}
}



function functionlist(){
	
	var Idul = document.getElementById("ull");
	
	//获取img的对象数组
	var numimg = document.getElementsByTagName("img");
	//获取li的对象数组
	var numli = Idul.getElementsByTagName("li");
	
	//分成多少份
	var part = 360/numimg.length;
	
	console.log(part);
	
	//预格式，规划好每个图片的rotateY的位置，以及缩放时间
	for(var i = 0; i < numli.length; i++){
		numli[i].style.transition = 'all 0.5s' + (i * 0.2) + 's';
		
		numli[i].style.WebkitTransform = 'rotateY(' + part * i + 'deg) translateZ(450px)';
		numli[i].style.MozTransform = 'rotateY(' + part * i + 'deg) translateZ(450px)';
	}
	
	var changeX = 0;
	var changeY = 0;
	
	var x_D = 0; y_D = 0;
	var timer = null;
	
	document.onmousedown = function(ev){
		var ev = ev || event;
		
		//鼠标按下时的，页面的坐标
		var downdis_X = ev.clientX;
		var downdis_Y = ev.clientY;
		
		
		document.onmousemove = function(ev){
			var ev = ev || event;
			var movedis_X = ev.clientX;
			var movedis_Y = ev.clientY;
			
			x_D = movedis_X - downdis_X;
			y_D = movedis_Y - downdis_Y;
			
			
			changeY += x_D * 0.1;
			changeX -= y_D * 0.1;
			
			console.log(changeY);
								
			Idul.style.WebkitTransform = 'perspective(800px) rotateX(' + changeX + 'deg) rotateY(' + changeY + 'deg)';
			Idul.style.MozTransform = 'perspective(800px) rotateX(' + changeX + 'deg) rotateY(' + changeY + 'deg)';
			
			downdis_X = ev.clientX;
			downdis_Y = ev.clientY;
		}
		
		document.onmouseup = function(){
			
			//一松开鼠标，就应该把 move 的动作释放掉
			document.onmousemove = null;
			
			//定时器，30毫秒执行一次判断
			timer = setInterval(function(){
				x_D = x_D * 0.99;
				y_D = y_D * 0.99;
				if(Math.abs(x_D) <= 0.5 && Math.abs(y_D) <= 0.5){
					clearInterval(timer);
				}
				changeY += x_D * 0.5;
				changeX -= y_D * 0.5;
				
				Idul.style.WebkitTransform = 'perspective(800px) rotateX(' + changeX + 'deg) rotateY(' + changeY + 'deg)';
				Idul.style.MozTransform = 'perspective(800px) rotateX(' + changeX + 'deg) rotateY(' + changeY + 'deg)';

			}, 30);
		}
	}
	
	
	
	
	
	//禁止拖曳照片
	for(var i = 0; i < numimg.length; i++){
		numimg[i].setAttribute("ondragstart", "return false");
	}
	//禁止拖曳照片
	document.onselectstart = function(){
		return false;
	}
	
	//禁止鼠标右键
	document.oncontextmenu = function(){
		return false;
	}

}












