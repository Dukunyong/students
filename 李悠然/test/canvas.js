function Canvas(){
	this.canvas = document.getElementById('canvas');
	this.ctx = this.canvas.getContext("2d");

}

Canvas.prototype = {
	constructor: Canvas,
	init: function(){
		this.ctx.fillStyle = "#3366cc";
		this.moveto(10,20);
		this.lineto(100,400);
		this.stroke();
	},
	rect: function(){
		this.ctx.fillStyle = '#ff0';
		this.ctx.strokeStyle = "#ff0"
		this.ctx.rect(10,30,200,300);
		this.ctx.stroke();
		this.ctx.fill();

	},
	arc: function(){
		this.ctx.arc(50,50,100,0,Math.PI * 2);
		this.ctx.stroke();
	},
	bmw: function(){
		//绘制圆
		this.circle("#cedcdf","#acb7bb",137);
		this.circle("#585858","#000",130);
		this.circle("#787d80","#787d80",86);
		//绘制1/4圆
		this.quadrant('#4a9ede', 0, Math.PI*1/2);
		this.quadrant('#fff', Math.PI*1/2, Math.PI);
		this.quadrant('#4a9ede', Math.PI, Math.PI*3/2);
		this.quadrant('#fff', Math.PI*3/2, 0);

		this.write();
	},
	//绘制正圆
	circle: function(fillcolor,strokecolor,radius){
		this.ctx.beginPath();
		this.ctx.fillStyle = fillcolor;
		this.strokeStyle = strokecolor;
		this.ctx.arc(300, 300, radius, 0, Math.PI * 2);
		this.ctx.stroke();
		this.ctx.fill();
	},
	//绘制1/4圆	
	quadrant: function(fillcolor, startAngle, endAngle){
		//this.ctx.closePath();
		this.ctx.beginPath();
		this.ctx.fillStyle = fillcolor;
		this.strokeStyle = "#000";
		this.ctx.arc(300, 300, 82, startAngle, endAngle );
		this.ctx.lineTo(300,300);
		this.ctx.closePath();
		this.ctx.stroke();
		this.ctx.fill();
	},
	write: function(){
		this.ctx.beginPath();
		this.ctx.fillStyle = "#f1f0f5";
		this.strokeStyle = "#b6b5ba";
		var txt="M";
		this.ctx.font="40px Arial";
		this.ctx.fillText(txt, 282.5, 208); 
		this.ctx.textAlign = "center";
		//ctx.fillText(txt, endX, endY);
		 
		// this.ctx.save();
		// this.ctx.translate(282.5, 208);
		// this.ctx.rotate(Math.PI/2);

		//context.strokeText(txt,0,100);

        /*this.ctx.fillStyle = "#00f";
        this.ctx.font = "italic 30px sans-serif";
        this.ctx.textBaseline = 'top';
        //填充字符串
        var txt="M"
        this.ctx.fillText(txt, 0, 0); 
        var length=this.ctx.measureText(txt);
        context.strokeText(txt,0,100);*/
	}
}

var canvas = new Canvas();
//canvas.init();
canvas.bmw();