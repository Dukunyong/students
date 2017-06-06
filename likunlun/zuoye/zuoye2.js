function BMW(canvasElem){
	this.canvas = canvasElem;
	this.ctx = this.canvas.getContext("2d");
}

BMW.prototype = {
	constructor:BMW,
	init:function(){
		this.clearRect();
		this.createOutArc();
		this.createWhiteCir();
		this.createSector();
		this.createText();
	},
	clearRect:function(){
		this.ctx.clearRect(0,0,500,500);
	},
	createOutArc:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.arc(250,250,240,0,Math.PI*2);
		this.ctx.fill();
		this.ctx.beginPath();
		this.ctx.arc(250,250,232,0,Math.PI*2);
		this.ctx.lineWidth = 5;
		this.ctx.strokeStyle = "white";
		this.ctx.stroke();
	},
	createWhiteCir:function(){
		this.ctx.save();
		this.ctx.beginPath()
		this.ctx.arc(250,250,150,0,Math.PI*2);
		this.ctx.lineWidth = 5;
		this.ctx.strokeStyle = "white";
		this.ctx.stroke();
	},
	createSector:function(){
		this.ctx.save();
		this.ctx.beginPath()
		var colors = [ "#069ffd", "#fff" ]; 
		var startAngle = 0;
		var arc = Math.PI / 2;
		var insideRadius = 150;
		for(var i = 0; i < 4; i++) {       
			var angle = startAngle + i * arc;        
			this.ctx.fillStyle = colors[i%2];                
			this.ctx.beginPath();  
			this.ctx.lineWidth = 0;
			this.ctx.arc(250, 250, insideRadius, angle, angle + arc, false);        
			this.ctx.arc(250, 250, 0, angle + arc, angle, true);          
			this.ctx.fill();                
			this.ctx.save();       
	    }   
		this.ctx.restore();      
	},
	createText:function(){
		this.ctx.fillStyle = 'white'; 
		this.ctx.font = "normal 70px 'Arial'";
		this.ctx.textAlign = "center";
		this.ctx.translate(250,250);

		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.rotate(-45*Math.PI/180);
		this.ctx.fillText("B",-20,-165);
		this.ctx.restore();

		this.ctx.beginPath();
		this.ctx.fillText("M",0,-165);

		this.ctx.beginPath();
		this.ctx.rotate(45*Math.PI/180);
		this.ctx.fillText("W",20,-165);
		this.ctx.restore();
	}
}
