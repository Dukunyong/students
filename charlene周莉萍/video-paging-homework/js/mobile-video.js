function Page() {
	this.video = $(".js-video")[0];	
	this.flag = true;
}
$.extend(Page.prototype, {
	
	init: function() {
		this.bindEvents();
	},
	
	bindEvents: function(){
		var playVideo = $(".js-video");
			
		playVideo.on("click", $.proxy(this.handlePlayVideoClick, this));
		playVideo.on("dblclick", $.proxy(this.handlefullScreenPlayClick, this));
	},
	
	handlePlayVideoClick: function(){		
		if(this.flag){
			this.video.play();
			this.flag = false;
		}else{
			this.video.pause();
			this.flag = true;
		}
	},
	
	handlefullScreenPlayClick: function(){
		this.launchFullscreen(this.video);
	}
	
})
var page = new Page();
page.init();
