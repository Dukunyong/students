function Canvas() {
	this.canvas = document.getElementById("canvas");
	this.ctx = this.canvas.getContext("2d");
}

Canvas.prototype = {
	constructor: Canvas,
	
	init: function(){
		this.ctx.moveTo(10,20);
		this.ctx.lineTo(100,100);
		this.ctx.stroke();
	
	},
	//矩形
	rect: function(){
		//设置背景
		this.ctx.fillStyle="blue";
		//设置边框
		this.ctx.strokeStyle = "red";
		//this.ctx.moveTo(0,0);
		this.ctx.rect(0,0,200,200);
		this.ctx.stroke();
		//填充矩形
		this.ctx.fill();
	},
	arc: function(){
		  //           起始点       半径
		//this.ctx.arc(250,250,100,0, Math.PI*2);
		//this.ctx.stroke();
		//绘制弧形
		
		//this.ctx.arc(250,250,100,0, Math.PI /2);
		//this.ctx.lineTo(250,250);
		//this.ctx.lineTo(350,250);
		//this.ctx.fillStyle="blue";
		//this.ctx.moveTo(250,150);
		//this.ctx.lineTo(250,350);
		//this.ctx.stroke();
		//this.ctx.fill(); 
	    this.ctx.fillStyle = "white";  
	    this.ctx.lineWidth = 8;
	    this.ctx.beginPath(); 
	    this.ctx.arc(250, 250, 210, 0, Math.PI*2);  
	    this.ctx.stroke();        
		this.ctx.fill();                
		this.ctx.save();       
		this.ctx.restore();   
		// 画里面的黑环白边
		this.ctx.fillStyle = "white";  
	    this.ctx.lineWidth = 170;
		this.ctx.beginPath();
		this.ctx.arc(250, 250, 120, 0, Math.PI*2);          
		this.ctx.stroke();        
		this.ctx.fill();                
		this.ctx.save();       
		this.ctx.restore();         
		
	
		var arc = Math.PI / 2;  
		var colors = [ "#069ffd", "#fff" ]; 
		for(var i = 0; i < 4; i++) {       
			var angle =  i * arc;        
			this.ctx.fillStyle = colors[i%2];                
			this.ctx.beginPath();  
			this.ctx.lineWidth = 0;      
			this.ctx.arc(250, 250, 114, angle, angle + arc);        
			this.ctx.arc(250, 250, 0, angle + arc, angle);          
			this.ctx.fill();                
			this.ctx.save();       
			this.ctx.restore();      
	    } 
	    
	    this.ctx.fillStyle = 'white'; 
		this.ctx.font = "normal 70px 'Arial'";
		this.ctx.textAlign = "center";
		this.ctx.translate(250,250);

		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.rotate(-45*Math.PI/180);
		this.ctx.fillText("B",-20,-140);
		this.ctx.restore();

		this.ctx.beginPath();
		this.ctx.fillText("M",0,-130);

		this.ctx.beginPath();
		this.ctx.rotate(45*Math.PI/180);
		this.ctx.fillText("W",20,-140);
		this.ctx.restore();
	},
	quadraticCurveTo: function(){
		this.ctx.moveTo(250,250);
		this.ctx.quadraticCurveTo(20,100,0,0);
		this.ctx.stroke();
	},
	bezierCurveTo: function(){
		this.ctx.moveTo(0,500);
		this.ctx.bezierCurveTo(100,0, 400,500,500,0);
		this.ctx.stroke();
	},
	closepath: function(){
		this.ctx.arc(250,250,100,0, Math.PI * 3/2);
		//自动找到首尾，做路径闭合
		this.crx.closePath();
		this.ctx.stroke();
	},
	beginPath: function(){
		this.ctx.moveTo(100,100);
		this.ctx.lineTo(250,250);
		this.ctx.moveTo(200,100);
		this.ctx.lineTo(350,250);
		this.ctx.stroke();
		//解决路径相互影响
		this.ctx.beginPath();
		this.ctx.moveTo(100,50);
		this.ctx.lineTo(400,400);
		this.ctx.stroke();
	},
	//设置边宽度
	lineWidth: function(){
		this.ctx.lineWidth = 10;
		this.ctx.moveTo(100,100);
		this.ctx.lineTo(250,250);
		this.ctx.stroke();
	},
	//设置路径的笔头
	lineCap: function(){
		this.ctx.lineCap = "round";
		this.ctx.lineWidth = 10;
		this.ctx.moveTo(100,100);
		this.ctx.lineTo(250,250);
		this.ctx.stroke();
	},
	font: function(){
		this.ctx.font = "40px 宋体";
		this.ctx.fillText("田",100,100);
		this.ctx.strokeText("田", 200,200);
	},
	textAlign: function(){
		this.ctx.moveTo(100,100);
		this.ctx.lineTo(100,200);
		this.ctx.stroke();
		this.ctx.textAlign = "center";
		this.ctx.font = "40px 宋体";
		this.ctx.fillText("田",100,100);
	},
	measureText: function(){
		this.ctx.moveTo(100,100);
		this.ctx.lineTo(100,200);
		this.ctx.stroke();
		this.ctx.font = "40px 宋体";
		//求出“田”的宽度
		var width = this.ctx.measureText("田").width;
		this.ctx.fillText("田",100-width/2,100);
	},
	drawImage: function(){
		var img = new Image();//创建一个图片
			_this = this;
		img.onload = function(){
			_this.ctx.drawImage(img,0,0,200,100,0,0,200,100);
		}
		img.src="../dell_li.jpeg";
		
		var img2 = new Image();//创建一个图片
			_this = this;
		img2.onload = function(){
			_this.ctx.drawImage(img2,0,0,200,200,200,200,200,100);
		}
		img2.src="../dell_li.jpeg";
	},
	shadow: function(){
		this.ctx.shadowColor = "red";
		this.ctx.shadowBlur = 20;
		
		this.ctx.rect(100,100,100,100);
		this.ctx.fill();
	},
	createLinearGradient: function(){
		var grd = this.ctx.createLinearGradient(0,0,500,500);
		grd.addColorStop(0,'red');
		grd.addColorStop(0.5,'black');
		grd.addColorStop(1,'blue');
		this.ctx.fillStyle = grd;
		this.ctx.rect(0,0,500,500);
		this.ctx.fill();
		
	},
	toDataURL: function(){
		this.fillStyle = "blue";
		this.ctx.rect(0,0,100,100);
		this.ctx.fill();
		console.log(this.canvas.toDataURL());
	},
	//基点移动
	translate: function(){
		this.ctx.translate(100,100);
		this.ctx.moveTo(100,100);
		this.ctx.linTo(200,200);
		this.ctx.stroke();
	},
	//旋转画布，
	rotate :function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.arc(250,250,100,0, Math.PI /2);
		this.ctx.lineTo(250,250);
		this.ctx.fillStyle="blue";
		this.ctx.moveTo(250,150);
		this.ctx.stroke();
		this.ctx.fill(); 
		this.ctx.restore();
		
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		this.ctx.rotate(Math.PI);
		this.ctx.arc(0,0,100,0, Math.PI /2);
		this.ctx.lineTo(0,0);
		this.ctx.fillStyle="blue";
		this.ctx.moveTo(0,150);
		this.ctx.stroke();
		this.ctx.fill(); 
		this.ctx.restore();
		
		
	},
	saveAndRestore:function(){
		this.ctx.save();//保存画布状态
		this.ctx.rotate(Math.PI/6);
		this.ctx.rect(300,0,100,100);
		this.ctx.fill();
		this.ctx.restore();//恢复画布状态
		this.ctx.beginPath();
		this.ctx.rotate(Math.PI/6);
		this.ctx.rect(300,0,100,100);
		this.ctx.fill();
	}

}


 var canvas= new Canvas();
 
// canvas.init();
 //canvas.rect();
 //canvas.arc();
//canvas.quadraticCurveTo();
//canvas.bezierCurveTo();//贝塞尔曲线
//canvas.closepath();
//canvas.beginPath();
//canvas.lineWidth();
//canvas.lineCap();
//canvas.font();
//canvas.textAlign();
//canvas.measureText();
//canvas.drawImage();
//canvas.shadow();
//canvas.createLinearGradient();
//canvas.saveAndRestore();
 canvas.rotate();
