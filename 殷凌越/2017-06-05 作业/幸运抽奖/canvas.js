function Canvas(canvas) {
	this.canvas = canvas;
	this.ctx = this.canvas.getContext("2d");
}

Canvas.prototype = {
	construtor: Canvas,

	//初始化
	init:function() {
		//防止页面刷新定时器延迟显示
		this.dialRotate();
		this.btn();
	},

	//延迟器
	dialspin: function() {
		var this_ = this;
		//随机时间停止1-3秒之间 1000-3000
		var time = Math.random()*2000+1000;
		var timer = setInterval(function(){
			this_.dialRotate()
		},13);
		setTimeout(function(){
			clearInterval(timer);
		},time)
	},

	//随机旋转
	dialRotate: function() {
		this.ctx.save();
		this.ctx.beginPath();
		var img =new Image();//创建图片标签
		var this_=this;
		img.onload = function(){
			this_.ctx.drawImage(img,0,0,500,500,0,0,500,500);
			var x = 250; //画布宽度的一半
            var y =250;//画布高度的一半
            this_.ctx.translate(x,y);//将绘图原点移到画布中点
            this_.ctx.rotate((Math.random()*20)*Math.PI);//旋转角度
            this_.ctx.translate(-x,-y);//将画布原点移动
		}
		//引入图片
		img.src = "backg.png";//引入图片
		this.ctx.restore();
	},

	//点击时旋转
	btn: function() {
		var this_ = this;
		var btns = document.querySelector(".btn");
		btns.onclick = function() {
			this_.dialspin()
		};
	}
}



var canvas = new Canvas(document.getElementById("canvas"));
canvas.init();




