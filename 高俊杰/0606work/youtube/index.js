


function Page() {
	this.video = $(".js-video");
//	this.time = $(".video_time");
}

$.extend(Page.prototype,{
	init:function() {
		this.bindEvents();
//		this.handleTimeInner();
	},
	
	bindEvents : function() {
//		var timeText = $(".video_time");
		this.video.on('click',this.handlePlay);
	},
	
	handlePlay : function() {
//		var this_ = this
//		alert(this_.index)
		if(this.paused){
			this.play();
		}else{
			this.pause();
		}
		
	}
});

var lpage = new Page()
lpage.init();

