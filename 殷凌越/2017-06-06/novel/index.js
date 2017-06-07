
function Novel() {}

$.extend(Novel.prototype, {
	
	init: function() {
		this.restoreUserInfo();
		this.bindEvents();
	},

	bindEvents: function() {
		var handleFontAddBtn = $(".js-handleFontAddBtn"),
			handleFontMinusBtn = $(".js-handleFontMinusBtn"),
			handleColorChangeBtn = $(".js-handleColorChangeBtn");	
		handleFontAddBtn.on("click", $.proxy(this.handleFontAddClick, this)); 
		handleFontMinusBtn.on("click", $.proxy(this.handleFontMinusClick, this));
		handleColorChangeBtn.on("click", $.proxy(this.handleColorChangeClick, this));
	},

	handleFontAddClick: function() { //字体变大
		var size = parseInt($(".js-pageCount").css("fontSize"));
		size+= 2;
		//字体超过30时 不再增加 
		if (size>=30) {
			size=30;		
		}
		$(".js-pageCount").css({fontSize:size});
		$(".js-handleFontRestoreBtn span").html(size);
		this.handlestoreInformation();

	},

	handleFontMinusClick: function() { //字体变小
		var size = parseInt($(".js-pageCount").css("fontSize"));
		size-= 2; 
		//字体小于12时 不再减少 
		if (size<=12) {
			size=12;		
		}
		$(".js-pageCount").css({fontSize:size});
		$(".js-handleFontRestoreBtn span").html(size);
		this.handlestoreInformation();
	},


	handleColorChangeClick: function(e) { //切换背景色	
		var color= $(e.target).attr("data-color");
		$(".js-pageCount").css("background",color)
		this.handlestoreInformation();
	},



	handlestoreInformation: function(size, color) {//储存信息
		var userInfo = {
			userSize: $(".js-pageCount").css("fontSize"),
			userColor: $(".js-pageCount").css("backgroundColor")
		};

		userInfo = JSON.stringify(userInfo);

		//保存用户信息在本地
		try{
			if(window.localStorage) {
			    window.localStorage.userInfo =userInfo;
			}
		//catch必须传参
		}catch(e){}
	},

	restoreUserInfo: function() {//赋予用户储存的信息
		try{
			if (window.localStorage) {
				var userInfo = {};
				if (window.localStorage.userInfo) {
			  		var userInfo = JSON.parse(window.localStorage.userInfo);
			  		$(".js-pageCount").css("fontSize", userInfo.userSize);
  					$(".js-pageCount").css("background", userInfo.userColor);
			  	}
			}
		//catch必须传参
		}catch(e){}
	},
	

	// handleClearClick: function() {//清空localStotage
	// 	alert("要清除了")
	// 	try{
	// 		if (window.localStorage) {
	// 			window.localStorage.clear();
	// 		}
	// 	//catch必须传参
	// 	}catch(e){}

	// },

	// deffered: function() {//分页

	// }

});

var novel = new Novel();
novel.init();

