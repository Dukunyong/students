function Ggl(){
	this.canvas = document.querySelector('#canvas');
	this.ctx = this.canvas.getContext('2d');
	this.arr = ["1.png","2.png","3.png"];
	this.btn = document.querySelector('.btn');
}Ggl.prototype = {
	constructor: Ggl,
	btnClick:function(){
		var _this= this;
		this.btn.onclick = function(){
			_this.init();
		}
	},
	init:function(){
		//this.creatFont();
		this.creatshnow();
		this.creatKj();
		var i = parseInt(Math.random()*this.arr.length);
		this.canvas.style.background = 'url('+this.arr[i]+')';
	},
	/*creatFont:function(){
		//this.ctx.globalCompositeOperation = "destination-over";  
		this.ctx.fillStyle = 'white'
		this.ctx.font = '40px 微软雅黑';
		var i = parseInt(Math.random()*this.arr.length);
		this.ctx.fillText(this.arr[i],190,210);
		this.ctx.beginPath();
	},*/
	creatshnow:function(){
		this.ctx.fillStyle = '#ccc';
		//this.ctx.globalCompositeOperation = "destination-over";  
		this.ctx.rect(0,0,500,500);
		this.ctx.fill();

	},
	creatKj:function(){
		var _this = this;
		this.canvas.onmousemove = function(e) {   

			var x = e.pageX - canvas.offsetLeft;  
			var y = e.pageY - canvas.offsetTop;  
			_this.ctx.globalCompositeOperation = "destination-out";  
			_this.ctx.beginPath(); 
			_this.ctx.fillStyle = "pink";  
			_this.ctx.arc(x,y,10,0,2*Math.PI,true);  

			_this.ctx.fill();  
			_this.ctx.closePath();  
		}  
	}

}
var ggl = new Ggl();
ggl.btnClick();
ggl.init();