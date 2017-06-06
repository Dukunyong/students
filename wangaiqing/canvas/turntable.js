function Table(){
	this.table=document.getElementById("table");
	this.ctx=this.table.getContext("2d");
}
Table.prototype={
	constructor:Table,
	init:function(){
		var that=this;
		setInterval(function(){
			that.arc();
			that.hand();
			that.change();
		},1000)
	},
	arc:function(){
			this.ctx.save();
			this.ctx.beginPath();
			this.ctx.translate(250,250);
//			this.ctx.rotate(Math.PI*4);	
			for(var i=0;i<=12;i++){
				this.ctx.fillStyle="pink";
				this.ctx.arc(250,250,200,0,Math.PI/6*i);
				this.ctx.lineTo(250,250);
				this.ctx.lineTo(450,250);
				this.ctx.fill();
				this.ctx.stroke();
			}
		this.ctx.restore();
	},
	change:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(500,500);
		for(var i=1;i<=12;i++){
			this.ctx.font="30px 微软雅黑";
			this.ctx.textBaseline="middle";
			this.ctx.rotate(Math.PI/6);
			this.ctx.fillText(i,100,100);
		}
		this.ctx.restore();
	},
	hand:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.fillStyle="red";
		this.ctx.translate(250,250);
		this.ctx.rect(247,100,6,150);
		this.ctx.fill();
		this.ctx.restore();
	}
}
var table=new Table();
table.init();

