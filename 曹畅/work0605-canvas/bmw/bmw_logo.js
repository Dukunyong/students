function Logos(){
	this.canvas = document.getElementById("canvas");
	this.ctx = this.canvas.getContext("2d");
}

Logos.prototype = {
	constructor:Logos,
	init:function(){
		this.createbmwcirout();
		this.createbmwcirin();
	},
	
	createbmwcirout:function(){
		this.ctx.lineWidth = 10;
		this.ctx.strokeStyle = "#e1e4e7";
		this.ctx.fillStyle = "#000";
		this.ctx.arc(250,250,200,0,Math.PI*2);
		this.ctx.stroke();
		this.ctx.fill();
	},
	
	createbmwtri:function(col){
		this.ctx.save();
		this.ctx.lineWidth = 10;
		this.ctx.beginPath();
		this.ctx.fillStyle = col;
		this.ctx.translate(250,250);
		this.ctx.arc(0,0,120,0,Math.PI/2);
		this.ctx.lineTo(0,0);
		this.ctx.lineTo(120,0);
		this.ctx.stroke();
		this.ctx.fill();
		this.ctx.restore();
		alert(2)
	},
		
	createbmwcirin:function(){
		this.createbmwtri("#0c76ac");
		
		this.ctx.translate(250,250);
		this.ctx.rotate(Math.PI/2);
		this.createbmwtri("#fff");
	}
}

var bmwlogo = new Logos();
bmwlogo.init();
