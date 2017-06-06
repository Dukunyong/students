function Canvas(){
	this.canvas=document.getElementById("canvas");
	this.ctx = this.canvas.getContext("2d");
}
Canvas.prototype={
	constructor:Canvas,
	drawImage:function(){
		
	
		var img=new Image();
		var this_=this;
		img.onload=function(){
		var x=0;
		var y=0;
		x+=100;
		y+=100;
		this_.ctx.drawImage(img,0,0,224,224);
		}
		img.src="song.jpeg";
		
		var img1=new Image();
		var this_=this;
		img1.onload=function(){
		var x=0;
		var y=0;
		x+=100;
		y+=100;
		this_.ctx.drawImage(img1,224,224,224,224);
		}
		img1.src="13.jpg";
		
	},
	toDataUrl:function(){
//		var img=canvas.toDataUrl("png");
//		var w=window.open('about:blank','image from canvas'); 
//		w.document.write("<img src='"+image+"' alt='from canvas'/>");
		console.log(this.canvas.toDataURL());
	}
}
var canvas=new Canvas();
canvas.drawImage();
canvas.toDataUrl();













