function Canvas() {
	this.canvas = document.getElementById("canvas");
	this.ctx = this.canvas.getContext("2d");
}

Canvas.prototype = {
	constructor:Canvas,
	drawImage: function() {
		this.ctx.save();
		var img = new Image();
		this_ = this;
		img.onload = function() {
			this_.ctx.drawImage(img,0,0,600,600,0,0,500,500)
			// var img = new Image();
			// that = this;
			// img.onload = function() {
			// 	that.ctx.drawImage(img,100,100,300,300,0,0,300,300)
			// }
			// img.src = "img3.jpg"
		}
		img.src = "07.jpg"
		this.ctx.restore();
	}

}

var canvas = new Canvas();
canvas.drawImage();