function Clock(canvasElem){
	this.canvas = canvasElem ;
	this.ctx = this.canvas.getContext("2d");
}

Clock.prototype = {
	
	constructor:Clock,
	
	init:function(){
		var that = this ;
		setInterval(function(){
			that.getTime();
			that.clearRect();
			that.createClockPannel();
			that.createCenterDot();
			that.createScale();
			that.createHourPointer();
			that.createMinutePointer();
			that.createSecondPointer();
			that.createNumber();			
		},1000)
	},
	
	getTime:function(){
		this.date = new Date() ;
		this.minutes = this.date.getMinutes();
		this.hours = this.date.getHours()%12 + (this.minutes/60).toFixed(2);//计算时针
		this.seconds = this.date.getSeconds();
		console.log(this.hours +"&"+this.minutes+"&"+this.seconds);
	},
	
	
	clearRect:function(){ // 创建清除画布的方法
		this.ctx.clearRect(0,0,500,500)
	},
	
	createClockPannel:function(){//创建画布
		this.ctx.fillStyle = "#eee";//填充颜色
		this.ctx.strokeStyle = "#333";//笔触颜色
		this.ctx.arc(250,250,100,0,Math.PI*2);//画圆
		this.ctx.stroke();  //绘制已定义的画布
		this.ctx.fill();    //填充画布
	},
	
	createCenterDot:function(){ // 创建中心原点
		this.ctx.beginPath(); //起始一条路径，或重置当前路径
		this.ctx.fillStyle = "lightblue"; //填充颜色
		this.ctx.strokeStyle = "red"; //笔触颜色
		this.ctx.arc(250,250,4,0,Math.PI*2); //绘制圆心
		this.ctx.stroke();
		this.ctx.fill();   // 填充圆心
	},
	
	createScale:function(){ //创建时钟刻度
		this.ctx.save();  //保存当前环境的状态
		this.ctx.beginPath();//起始一条路径，或重置当前路径
		
		this.ctx.translate(250,250);//重新映射画布上的 (0,0) 位置
		this.ctx.fillStyle = "#000";//刻度填充颜色为黑色
		for(var i=0 ; i<60 ; i++){ //循环加载指针刻度
			(i%5==0) ? this.ctx.rect(-1,-100,2,10) : this.ctx.rect(-1,-100,2,4);
			this.ctx.rotate(Math.PI/30);
		}
		this.ctx.fill();
		this.ctx.restore();//保存当前环境的状态
	},
	
	createHourPointer:function(){//创建时针
		this.ctx.save();  //保存当前环境的状态
		this.ctx.beginPath();//起始一条路径，或重置当前路径
		this.ctx.translate(250,250);//重新映射画布上的 (0,0) 位置
		
		this.ctx.rotate( (this.hours/12)*Math.PI*2 ); //当前时间时针运动位置
		
		this.ctx.fillStyle = "#000";//填充黑色
		this.ctx.rect(-3,-50,6,50);//绘制矩形时针
		this.ctx.fill();
		this.ctx.restore();//保存当前环境的状态
	},
	
	createMinutePointer:function(){
		this.ctx.save();  //保存当前环境的状态
		this.ctx.beginPath();//起始一条路径，或重置当前路径
		this.ctx.translate(250,250);//重新映射画布上的 (0,0) 位置
		
		this.ctx.rotate( (this.minutes/60)*Math.PI*2 ); //当前时间分针运动位置
		
		this.ctx.fillStyle = "green";//填充黑色
		this.ctx.rect(-2,-70,4,70);//绘制矩形分针
		this.ctx.fill();
		this.ctx.restore();//保存当前环境的状态
	},
	
	createSecondPointer:function(){
		this.ctx.save();  //保存当前环境的状态
		this.ctx.beginPath();//起始一条路径，或重置当前路径
		this.ctx.translate(250,250);//重新映射画布上的 (0,0) 位置
		
		this.ctx.rotate( (this.seconds/60)*Math.PI*2 );//当前时间秒针运动位置
		
		this.ctx.fillStyle = "red";//填充黑色
		this.ctx.rect(-1,-90,2,90);//绘制矩形分针
		this.ctx.fill();
		this.ctx.restore();//保存当前环境的状态
	},
	
	createNumber:function(){
		this.ctx.save();  //保存当前环境的状态
		this.ctx.beginPath();//起始一条路径，或重置当前路径
		this.ctx.translate(250,250);//重新映射画布上的 (0,0) 位置
		
		for (var i=1;i<=12;i++) {//循环添加数字
			var x=Math.sin( Math.PI / 6 * i )*80; //计算每一个数字的x坐标  和半径
			var y=-Math.cos( Math.PI / 6 * i )*80; //计算每一个数字的y坐标
			this.ctx.fillStyle="#000";            //字体填充颜色
			this.ctx.fillText( i , x-4 , y+2);    //字体及位置
		}
		
		this.ctx.fill();
		this.ctx.restore();//保存当前环境的状态
	}
}
