function Canvas(canvasEle){
	this.canvas=canvasEle;
	this.ctx=this.canvas.getContext("2d");
}

Canvas.prototype={
	constructor:Canvas,
	init:function(){
		this.picture1();
		this.picture2();
		this.picture3();
	},
	picture1:function(){
		var img1=new Image();
		var this_=this;
		img1.onload=function(){
			this_.ctx.drawImage(img1, 50 ,50);
		}	
		img1.src="images/7a11eeb3632d8f62.jpg";
	},
	picture2:function(){
		var img1=new Image();
		var this_=this;
		img1.onload=function(){
			this_.ctx.drawImage(img1, 320 ,50);
		}	
		img1.src="images/c03e2ea24a01c26b.jpg";
	},
	picture3:function(){
		var img1=new Image();
		var this_=this;
		img1.onload=function(){
			this_.ctx.drawImage(img1, 50 ,320);
		}	
		img1.src="images/f7c4d3d935079015.jpg";
	}
}