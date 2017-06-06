class Page{
	constructor(){
		this.showFlag = false;
		this.menuFlag = true;
	};
	init(){
		this.bindEvents();
	};
	
	bindEvents(){
		$(".set input").on("click",this.addBorder.bind(this));
		$(".set .bg_color>div").on("click",this.addBorder.bind(this));
		$(".set>.font>input").on("click",this.handleFontBtn.bind(this));
		$(".set>.space>input").on("click",this.handleSpaceBtn.bind(this));
		$(".set>.mode>input").on("click",this.handleModeBtn.bind(this));
		$(".set .bgbox").on("click",this.handleBgColorBtn.bind(this));
		$(".main").on("click",this.handleMenuShow.bind(this));
		$(".js-set").on("click",this.handleSetMenu.bind(this));
		$(document).on("scroll",this.addPage.bind(this));
		$(".marker").on("click",this.markPage.bind(this));
		this.loadPage();
	};
	
	addBorder(e){
		$(e.target).addClass("active")
					.siblings().removeClass("active");
	};
	
	handleFontBtn(e){
		var size = e.target.value,
			fontSize=parseInt($(".main").css("fontSize"));
		if(size=="A+"){
			fontSize += 2;
		}else{
			fontSize -= 2;
		};
		$(".main").css("fontSize",fontSize);
	};
	
	handleSpaceBtn(e){
		var space = e.target.value,
			lineHight=null;
		if(space == "大"){
			lineHight = "0.2rem";
		}else if(space == "中"){
			lineHight = "0.16rem";
		}else if(space == "小"){
			lineHight = "0.12rem";
		}
		$(".main").css("lineHeight",lineHight);
	};
	
	handleModeBtn(e){
		var mode = e.target.value;
		if(mode == "白天"){
			$(".main").css("background-color","white").css("color","black");
			$(".wraper").css("background","white").css("color","black");
		}else if(mode == "夜间"){
			$(".main").css("background-color","#17191f").css("color","#4e5d6f");
			$(".wraper").css("background","#17191f").css("color","#4e5d6f");
		}
	};
	
	handleBgColorBtn(e){
		var bgColor = $(e.target).css("background-color");
		$(".main").css("background-color",bgColor).css("color","black");
			$(".wraper").css("background",bgColor).css("color","black");
		if(bgColor == "rgb(0, 0, 0)"){
			$(".main").css("color","#4e5d6f");
			$(".wraper").css("color","#4e5d6f");
		}
	};
	
	handleMenuShow(){
		if(this.showFlag){
			$("header").show(200);
			$("footer").show(200);
		}else{
			$(".main").css("padding-top",0)
			$("header").hide(200);
			$("footer").hide(200);
			$(".set").hide(200);
			this.menuFlag = true;
		}
		this.showFlag = !this.showFlag	
	};
	
	handleSetMenu(){
		if(this.menuFlag){
			$(".set").show(200);
		}else{
			$(".set").hide(200);
		}
		this.menuFlag = !this.menuFlag;
	};
	
	addPage(){
		var y=$(document).scrollTop() + $(window).innerHeight(),
			pageY=$(document).height();
		if((pageY - y) < 40){
			var page=$(".page").eq(0).clone(true);
			$(".main").append(page)
		}
	};
	
	markPage(){
		var y=$(document).scrollTop();
		window.localStorage.setItem("top",y);
		$(".alerm").show();
		setTimeout(() => {
			$(".alerm").fadeOut(1000);
		},500)
	};
	
	loadPage(){
		try{
		var top=parseInt(localStorage.getItem("top"));
			$("body").animate({"scrollTop":top},1000)	
		}catch(err){
			alert(err)
		}
	}
	
}

var page = new Page();
page.init()