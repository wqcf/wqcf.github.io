

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
	
	//��ȡimg�Ķ�������
	var numimg = document.getElementsByTagName("img");
	//��ȡli�Ķ�������
	var numli = Idul.getElementsByTagName("li");
	
	//�ֳɶ��ٷ�
	var part = 360/numimg.length;
	
	console.log(part);
	
	//Ԥ��ʽ���滮��ÿ��ͼƬ��rotateY��λ�ã��Լ�����ʱ��
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
		
		//��갴��ʱ�ģ�ҳ�������
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
			
			//һ�ɿ���꣬��Ӧ�ð� move �Ķ����ͷŵ�
			document.onmousemove = null;
			
			//��ʱ����30����ִ��һ���ж�
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
	
	
	
	
	
	//��ֹ��ҷ��Ƭ
	for(var i = 0; i < numimg.length; i++){
		numimg[i].setAttribute("ondragstart", "return false");
	}
	//��ֹ��ҷ��Ƭ
	document.onselectstart = function(){
		return false;
	}
	
	//��ֹ����Ҽ�
	document.oncontextmenu = function(){
		return false;
	}

}












