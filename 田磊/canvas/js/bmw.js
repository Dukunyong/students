function Bmw(canvasElem){
	this.canvas = canvasElem;
	this.ctx = this.canvas.getContext("2d");
}

Bmw.prototype = {
	//162 - 200
	constructor: Bmw,
	init: function(){
		this.arc();
	},
	arc:function(){
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
	}
}