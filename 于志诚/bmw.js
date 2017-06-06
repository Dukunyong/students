function Bmw(){
	this.canvas = document.querySelector('#canvas');
	this.ctx = this.canvas.getContext('2d');
}
Bmw.prototype = {
	constructor: Bmw,
	init:function(){
		this.closePath();
	},
	closePath:function(){
		this.firstTep();

		this.wticeTep();

		this.threeTep();
		


		/*this.ctx.lineCap = 'round';
		this.ctx.strokeStyle = '#666'
		this.ctx.lineWidth = 1;
		this.ctx.arc(250,250,66,0,Math.PI*2);
		this.ctx.closePath();
		this.ctx.stroke();
		this.ctx.beginPath();
		this.ctx.fillStyle = 'pink';*/
		// this.ctx.strokeStylr = 'red'
		this.ctx.fillStyle = '#017cc2';
		this.ctx.arc(250,250,66,0,Math.PI/2);
		this.ctx.strokeStyle = '#ccc'
		this.ctx.lineWidth = 5;
		this.ctx.lineCap = "butt";
		this.ctx.lineTo(250,250)
		this.ctx.lineTo(250+66,250)
		this.ctx.stroke();
		this.ctx.fill();
		this.ctx.beginPath();



		this.ctx.fillStyle = 'white';
		this.ctx.arc(250,250,66,Math.PI/2,Math.PI);
		this.ctx.strokeStyle = '#ccc'
		this.ctx.lineWidth = 5;
		this.ctx.lineCap = "butt";
		this.ctx.lineTo(250,250)
		this.ctx.lineTo(250,250+66)
		this.ctx.stroke();
		this.ctx.fill();
		this.ctx.beginPath();



		this.ctx.fillStyle = '#017cc2';
		this.ctx.arc(250,250,66,Math.PI,Math.PI*3/2);
		this.ctx.strokeStyle = '#ccc'
		this.ctx.lineWidth = 5;
		this.ctx.lineCap = "butt";
		this.ctx.lineTo(250,250)
		this.ctx.lineTo(250-66,250)
		this.ctx.stroke();
		this.ctx.fill();
		this.ctx.beginPath();



		this.ctx.fillStyle = 'white';
		this.ctx.arc(250,250,66,Math.PI*3/2,Math.PI*2);
		this.ctx.strokeStyle = '#ccc'
		this.ctx.lineWidth = 5;
		this.ctx.lineCap = "butt";
		this.ctx.lineTo(250,250)
		this.ctx.lineTo(250,250-66)
		this.ctx.stroke();
		this.ctx.fill();
		// this.ctx.beginPath();
		
	},

	firstTep: function() {
		this.ctx.fillStyle = '#000';
		this.ctx.strokeStyle = '#ccc'
		this.ctx.lineCap = 'round';
		this.ctx.lineWidth = 10;
		this.ctx.arc(250,250,120,0,Math.PI*2);
		this.ctx.closePath();
		this.ctx.stroke();
		this.ctx.fill();
		this.ctx.beginPath()
	},
	
	wticeTep: function(){
		this.ctx.lineCap = 'round';
		this.ctx.strokeStyle = '#fff'
		this.ctx.lineWidth = 2;
		this.ctx.arc(250,250,70,0,Math.PI*2);
		this.ctx.closePath();
		this.ctx.stroke();
		this.ctx.beginPath();
	},

	threeTep: function(){
		this.ctx.fillStyle = 'white'
		this.ctx.font = '40px 微软雅黑';
		this.ctx.fillText('M',230,170);
		this.ctx.fillText('B',165,200);
		this.ctx.fillText('W',295,200);
		this.ctx.beginPath();
	},

	lineCap:function(){
		// square =>buff  线会变短
		this.ctx.lineCap = 'round'
		this.ctx.lineWidth = 10;
		this.ctx.moveTo(100,100);
		this.ctx.lineTo(200,200);
		this.ctx.stroke()

	}

}
var bmw = new Bmw();
bmw.init();