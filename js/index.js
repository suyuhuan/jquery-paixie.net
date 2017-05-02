var index = {};

index.init = function(){

   //导航吸顶
   index.ceiling();

   //楼梯
   index.stair();

   //轮播图
   index.banner();
   
   // 当季正在穿
   index.wearImg();

   //其他效果
   index.moveObjects();

   //选项卡
   index.tabAll();

}
$(document).ready( index.init );

 //导航吸顶
index.ceiling  = function(){
   var oTop = 750;

   $(window).scroll(function(){

   	var oScrllTop = $(document).scrollTop();

   	if(oScrllTop > oTop){

   		$("#scrollBg").css("display","block");
   		$("#stairNav").css("display","block");

   	}else{

   		$("#scrollBg").css("display","none");
   		$("#stairNav").css("display","none");
   	}
   });
   $(".navList").hover(function(){
       $(".mainMenu").css("display","block");
   })
}

// 楼梯
index.stair = function(){
	var oStair = new TimelineMax();
	var isMoving = false;

	$("#stairNav li").on("click",function(){

		isMoving = true;

		$(this).find("span").removeClass().addClass("active")

		.parent().siblings().find("span").removeClass("active");

		var index = $(this).index();

		var oTop = $(".stair").eq(index).offset().top;

		oStair.clear();
		oStair.to("html,body",0.6,{scrollTop:oTop});

	})
	
	$(window).scroll(function(){

		if(!isMoving){

			var oScrllTop = $(document).scrollTop();

			$(".stair").each(function(){
				var oTop = $(this).offset().top;
				if(oScrllTop >= oTop){
					var index = $(this).index();
					$("#stairNav li").eq(index).find("span").removeClass().addClass("active")
					.parent().siblings("li").find("span").removeClass("active");
				}
			})
		}
	})

}

//轮播图
index.banner = function(){

	var oBanner = new TimelineMax();
	var oListImg = $(".listImg");
	var oImgLi = $(".listImg li");
	var oPoint = $(".point");
	var oPointLi = $(".point li");

	oImgLi.first().clone().appendTo(oListImg);

	var size = $(".listImg li").size();
	var i = 0;
	var timer = setInterval(function(){
		i++;
		starMove();    
	},2000);


	$(".left").click(function(){
		i--;
		starMove();
	});
	$(".right").click(function(){
		i++;
		starMove();
	});

	oPointLi.hover(function(){
		var index = $(this).index();
		i=index;
		starMove();
	});

	$(".banner").hover(function(){
		clearInterval(timer);
		$(".banner>i").css("display","block");
	},
	function(){
		timer = setInterval(function(){
			i++;
			starMove();
		},2000);
		$(".banner>i").css("display","none");
		
	});
	function starMove(){

		if(i<=-1){
			i = size -2;
			oListImg.css("left",-(size-1)*780);
		}
             
		if(i == size){
			i=1;
			oListImg.css("left",0);
		}
		oBanner.clear();

		oBanner.to(oListImg,0.8,{left:-i*780});

		oPointLi.eq(i).removeClass().addClass("active").siblings().removeClass("active");

		if(size-1 == i){

			oPointLi.eq(0).removeClass().addClass("active").siblings().removeClass("active");
		}
	}
}
//新闻轮播图

//当季正在穿
index.wearImg = function(){

	$(".wearImg a").hover(function(){

		$(this).stop().animate({top: -28}, 300 );

	},function(){

    $(this).stop().animate({top: 0}, 300 );

	});
 
}
//其他效果
index.moveObjects =  function(){
	
 	//菜单列表移动
 	$(".mainMenu li").hover(function(){

        $(this).find(".posit").stop().animate({left:55}, 300 );

 	},function(){

        $(this).find(".posit").stop().animate({left:24}, 300 );

 	});

    //图片移动效果
    $(".mImg").hover(function(){

    	$(this).stop().animate({right:15},200);

    },function(){

    	$(this).stop().animate({right:0},200);
    })

    //图片透明度效果
    $(".opacity").hover(function(){

    	$(this).stop().animate({opacity:0.8},100);

    },function(){

    	$(this).stop().animate({opacity:1},100);
    })

    //百叶窗
    $(".byc li").hover(function(){
    	var oByc = new TimelineMax();
    	oByc.clear();
    	var obj = $(this);
		oByc.to(obj,0.6,{height:120});
    },function(){
    	var oByc = new TimelineMax();
    	oByc.clear();
    	var obj = $(this);
		oByc.to(obj,0.3,{height:50});
    })

      //楼层标题下划线移动
    index.underLine($(".bar span"));
      //推荐店铺下划线移动
    index.underLine($(".head span"));
  

 }
//标题下滑线移动
index.underLine=function(obj){

    obj.hover(function(){

    	var oBar = new TimelineMax();
     
    	var i = $(this).index();

    	var obj = $(this).siblings('i');

    	oBar.clear();

		oBar.to(obj,0.6,{left:i*120});

		$(this).addClass();
    });
}
//选项卡
index.tabAll = function(){

	index.tab('.head',".htab");
	index.tab('.fo',".tabo");
	index.tab('.f1',".tab1");
	index.tab('.f2',".tab2");
	index.tab('.f3',".tab3");
	index.tab('.f4',".tab4");
	index.tab('.f5',".tab5");
}
//选项卡楼层处
index.tab = function(one,two){

	var obj = $(one).find('span');

	var tbObj = $(two).find('ul');

	index.tabHome(obj,tbObj);
}
//选项卡封装函数
index.tabHome = function(obj,tbObj){

	  obj.mouseenter(function(){
		
		obj.attr('class','');

		tbObj.css('display','none');
		
		$(this).attr('class','active');
		
		tbObj.eq( $(this).index() ).css('display','block');
		
	});

}

  console.log( $.cookie("cart") );

