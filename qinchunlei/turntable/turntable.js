function Turntable(){
	this.canvas=document.getElementById('canvas');
	 this.ctx=this.canvas.getContext('2d');
	 this.award=[
	            '一等奖',
	            '200元代金券',
                '20淘金币',
                '100元',
                '50个Q币',
                '二等奖',
                '谢谢参与',
                '20元'   
	        ];

	 
}
Turntable.prototype={
	constructor:Turntable,
	init:function(){
      this.createFanshaped();
      this.createNumber();
      this.createImg();
	},
	createFanshaped:function(){
		this.ctx.save();
		for(let i=0;i<8;i++){
			this.ctx.beginPath();
			if(i%2==0){
				this.ctx.fillStyle='red';	  
			}
			else{
				this.ctx.fillStyle='yellow';	
			}
			 this.ctx.arc(250,250,200,Math.PI/4*i,Math.PI/4*(i+1));
                this.ctx.lineTo(250,250);
			    this.ctx.fill();
			    this.ctx.restore();
			
		}
	},
	createNumber:function(){
		this.ctx.save();
        this.ctx.beginPath();
        this.ctx.translate(250,250);
        for(var i=0;i<=7;i++){
        	var x=Math.sin(Math.PI/4 * i+Math.PI/8) * 120,
        	    y=-Math.cos(Math.PI/4 * i+Math.PI/8) * 120;
        	    this.ctx.fillStyle='#000';
        	    this.ctx.font='14px 微软雅黑';
        	    this.ctx.fillText(this.award[i],x-20,y+5);
        }
        this.ctx.restore();
	},
	createImg:function(){
		this.ctx.save();
		 var img=new Image();
        var _this=this;
        img.onload=function(){
          _this.ctx.drawImage(img,205,180,90,120);
        }
       // console.log(img);
        img.src="1.png";
	}
	
}
var turntable =new Turntable();
turntable.init();