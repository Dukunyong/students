function Page() {
	this.video = $(".video");
	this.videoD = this.video[0];
}
$.extend(Page.prototype, {
	init: function() {
		this.bindEvents();
	},
	
	bindEvents: function() {
		this.video.on("click",this.handleVideoClick);
		this.video.on("canplay",$.proxy(this.handleCanplayTriggerd,this));
	},
	
	handleVideoClick: function() {
		if(this.paused){
			this.play();
		}else{
			this.pause();
		}
	},
	
	handleCanplayTriggerd: function() {
		$(".time").text((this.videoD.duration).toFixed(2));
	}
	
	
});

var page = new Page();
page.init();
