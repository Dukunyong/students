function Page() {

}

$.extend(Page.prototype,{

	init:function(){
		this.bindEvents();
	},

	bindEvents:function() {
		var sizeBig = $(".js-sizebig"),
			sizeNum = $(".js-num"),
			sizeSmall = $(".js-sizesmall"),
			changColor = $(".js-changcolor");
		sizeBig.on("click", $.proxy(this.handleBigClick,this));
		sizeSmall.on("click", $.proxy(this.handleSmallClick,this));
		changColor.on("click", "li",this.handleColorClick);
	},

	handleBigClick:function() {
		
		var size =parseInt($(".js-mainsize").css("fontSize")) ;
		    size += 1;
		    if(size >= 36){
		    	size = 36;
		    }
		    $(".js-mainsize").css("fontSize",size);
		    $(".js-num").html(size);
	},

	handleSmallClick:function() {
		
		var size =parseInt($(".js-mainsize").css("fontSize")) ;
		    size -= 1;
		    if(size <= 12){
		    	size = 12;
		    }
		    $(".js-mainsize").css("fontSize",size);
		    $(".js-num").html(size);
	},

	handleColorClick:function(){
		var mainBgcolor = $(this).css("backgroundColor");
		$(".js-mainsize").css("backgroundColor",mainBgcolor);
	}
})

var page = new Page();
    page.init();
