
function Novel() {}

$.extend(Novel.prototype, {
	
	init: function() {
		this.restoreUserInfo();
		this.bindEvents();
	},

	bindEvents: function() {
		var handleFontAddBtn = $(".handleFontAddBtn"),
			handleFontMinusBtn = $(".handleFontMinusBtn"),
			handleColorChange = $(".handleColorChange"),
			submitBtn = $(".js-submit"),
			clearBtn = $(".js-clear");

		submitBtn.on("click", $.proxy(this.handleSubmitClick, this));
		clearBtn.on("click", $.proxy(this.handleClearClick, this))
		handleFontAddBtn.on("click", $.proxy(this.handleFontAddClick, this)); 
		handleFontMinusBtn.on("click", $.proxy(this.handleFontMinusClick, this));
		handleColorChange.on("click","li", this.handleColorClick);
	},

	handleFontAddClick: function() { //字体变大
		var size = parseInt($(".pageCount").css("fontSize"));
		size+= 2;
		//字体超过30时 不再增加 
		if (size>=30) {
			size=30;		
		}
		$(".pageCount").css({fontSize:size});
		$(".handleFontRestoreBtn span").html(size);
	},

	handleFontMinusClick: function() { //字体变小
		var size = parseInt($(".pageCount").css("fontSize"));
		size-= 2; 
		//字体小于12时 不再减少 
		if (size<=12) {
			size=12;		
		}
		$(".pageCount").css({fontSize:size});
		$(".handleFontRestoreBtn span").html(size);
	},


	handleColorClick: function() { //切换背景色
		var color= $(this).attr("data-color");
		$(".pageCount").css("background",color)
	},




	restoreUserInfo: function() {//恢复上一次用户信息
		try{
			if (window.localStorage) {
				var userInfo = {};
				if (window.localStorage.userInfo) {
			  		var userInfo = JSON.parse(window.localStorage.userInfo);
			  		$(".pageCount").css("fontSize",window.userInfo.userSize);
  					$(".pageCount").css("background",window.userInfo.userColors);
			  	}
			}
		//catch必须传参
		}catch(e){}
	},

	handleSubmitClick: function() {//提交
		var userInfo = {
			userSize: $(".pageCount").css("fontSize"),
			userColor: $(".pageCount").css("background")
		};
		
		userInfo = JSON.stringify(userInfo);

		//保存用户信息在本地
		try{
			if(window.localStorage) {
				alert("记住大小和颜色了")
			    window.localStorage.userInfo =userInfo;

				var userInfo = {};
				if (window.localStorage.userInfo) {
		  			var userInfo = JSON.parse(window.localStorage.userInfo);
					$(".pageCount").css("fontSize",window.userInfo.userSize);
					$(".pageCount").css("background",window.userInfo.userColor);
		 	 	}
				
				console.log(userInfo)
			}
		//catch必须传参
		}catch(e){}
	},

	handleClearClick: function() {//清空localStotage
		alert("要清除了")
		try{
			if (window.localStorage) {
				window.localStorage.clear();
			}
		//catch必须传参
		}catch(e){}

	},

	deffered: function() {//分页

	}

});

var novel = new Novel();
novel.init();

