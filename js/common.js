function loadHtml(url, targetId) {
	$.ajax({
			url: url,
			dataType: "html",
			async: false,
			success: function(msg) {
				$("#"+targetId).html(msg);
		}
	})
}

//创建数据对象
var dataShop = {};

dataShop.init = function(){

	//登录注册模块
	dataShop.login();

	//右边栏
	dataShop.rSidebar();

	//其他效果
	dataShop.header();

    //数据请求
    dataShop.dataAjax();
    //获取处理内容
    dataShop.getContent();
}

$(document).ready( dataShop.init );

//右边栏
dataShop.rSidebar =function(){

	$(".sideTop a,.sideBottom a").hover(function(){

		$(this).find("i").removeClass("active").addClass("active").parent().siblings().find("i").removeClass("active");
         $(this).find("div").css("display","block");
	},
	function(){
		$(this).find("div").css("display","none");
		$(this).find("i").removeClass("active");
	});

	$(window).scroll(function(){

   	var oTop = $(document).scrollTop();
   	var sTop = new TimelineMax();

   	if(oTop > 10){

   		$(".sideBottom .rTf").css("display","block");
   	}else{
   		$(".sideBottom .rTf").css("display","none");
   	}

    $(".sideBottom .rTf").click(function(){

    	sTop.to("html,body",1.5,{scrollTop:0});
    })
    
   });

}

//登录注册模块
dataShop.login = function(){

   var oUsername = $.cookie("userName");

   if(oUsername){

      $(".userName").html(oUsername);     

      $("div[login=two]").css("display","block");
      $("div[login=one]").css("display","none");
    }
    else{

      $("div[login=one]").css("display","block");
      $("div[login=two]").css("display","none");

    }
    //退出
    $(".quit").click(function(){

    	$.cookie("userName", "", {expires:-1, path:"/"});

    	$("div[login=one]").css("display","block");
        $("div[login=two]").css("display","none");

    });

}
//其他效果
dataShop.header = function(){
	
	$(".headLi").hover(function(){

      $("#Li").css("display","block");
	});

	$("#webLi").hover(function(){

      $(".webLi").css("display","block");
	});

	$(".topRight ul").mouseleave(function(){

		$(this).css("display","none");

	})
}
//请求获取首页数据
dataShop.dataAjax = function(){
	$.ajax({

		url:"../data/index/shopData.json",
		dataType:"json",
		async:false,

		success:function(data){
            //处理函数
			dataShop.shopData(data);
		},

		error: function(){ 
		//请求失败
		 console.log("数据请求失败!");
		},

		complete: function(){ 
		//请求完成
		 console.log("请求完成!");
		}
	})
}

//处理数据
dataShop.shopData=function(data){

	var shopData = data;
  
  for(var arr in shopData){  

     //数据处理
     dataShop.showData(shopData[arr].data);
  }
}

var sum = 0;
//得到数据进行处理
dataShop.showData = function(data){

    var oneData = data;
	
	for(var arr in oneData){
      
	   var txt = oneData[arr].title;
	   var content = oneData[arr].content;
        //显示头数据
        dataShop.getHead(sum,txt);

         sum++;

         dataShop.traverse(content);

       
	}
}
//获取遍历头数据
dataShop.getHead = function(i,title){

	var obj = $("div[data=tit]").find("span");

    var oTxt = obj.eq(i).text(title);
}

var z = 0;
//遍历数据
dataShop.traverse = function(content){

	var data = content;

	for(var arr in data){

    dataShop.getContent(z,data[arr]);

       z++;

	    //数据判断
		if(z<=10){

	        var content = $("<li><a href=\'./goodDetail.html?id="+data[arr].id+"\'><img src="+data[arr].img+" alt=\'\'></a><span><a href=''>"+data[arr].name+"</a></span><span>"+data[arr].price+".00</span></li>"); 	
		    $("ul[data=dataA]").append(content);
		   	 // console.log(data[arr]);
		   }
		   if(z>10 && z<=20){
	        //console.log(data[arr]);
	        var content = $("<li><a href=\'./goodDetail.html?id="+data[arr].id+"\'><img src="+data[arr].img+" alt=\'\'></a><span><a href=''>"+data[arr].name+"</a></span><span>"+data[arr].price+".00</span></li>"); 	
		    $("ul[data=dataB]").append(content);

		   }
		   if(z>20 && z<=30){
	        var content = $("<li><a href=\'./goodDetail.html?id="+data[arr].id+"\'><img src="+data[arr].img+" alt=\'\'></a><span><a href=''>"+data[arr].name+"</a></span><span>"+data[arr].price+".00</span></li>"); 	
		    $("ul[data=dataC]").append(content);
		   	
		   }
		   if(z>30 && z<=40){
	        var content = $("<li><a href=\'./goodDetail.html?id="+data[arr].id+"\'><img src="+data[arr].img+" alt=\'\'></a><span><a href=''>"+data[arr].name+"</a></span><span>"+data[arr].price+".00</span></li>"); 	
		    $("ul[data=dataD]").append(content);
		   	
		   }
		   if(z>40 && z<=50){
	        var content = $("<li><a href=\'./goodDetail.html?id="+data[arr].id+"\'><img src="+data[arr].img+" alt=\'\'></a><span><a href=''>"+data[arr].name+"</a></span><span>"+data[arr].price+".00</span></li>"); 	
		    $("ul[data=dataE]").append(content);
		   	
		   }
		   if(z>50 && z<=60){
	        var content = $("<li><a href=\'./goodDetail.html?id="+data[arr].id+"\'><img src="+data[arr].img+" alt=\'\'></a><span><a href=''>"+data[arr].name+"</a></span><span>"+data[arr].price+".00</span></li>"); 	
		    $("ul[data=dataF]").append(content);
		   	
		   }
		   if(z>60 && z<=70){
	        var content = $("<li><a href=\'./goodDetail.html?id="+data[arr].id+"\'><img src="+data[arr].img+" alt=\'\'></a><span><a href=''>"+data[arr].name+"</a></span><span>"+data[arr].price+".00</span></li>"); 	
		    $("ul[data=dataG]").append(content);
		   	
		   }
		   if(z>70 && z<=80){
	        var content = $("<li><a href=\'./goodDetail.html?id="+data[arr].id+"\'><img src="+data[arr].img+" alt=\'\'></a><span><a href=''>"+data[arr].name+"</a></span><span>"+data[arr].price+".00</span></li>"); 	
		    $("ul[data=dataH]").append(content);
		   	
		   }
		   if(z>80 && z<=90){
	        var content = $("<li><a href=\'./goodDetail.html?id="+data[arr].id+"\'><img src="+data[arr].img+" alt=\'\'></a><span><a href=''>"+data[arr].name+"</a></span><span>"+data[arr].price+".00</span></li>"); 	
		    $("ul[data=dataI]").append(content);
		   	
		   }
		   if(z>90 && z<=100){
	        var content = $("<li><a href=\'./goodDetail.html?id="+data[arr].id+"\'><img src="+data[arr].img+" alt=\'\'></a><span><a href=''>"+data[arr].name+"</a></span><span>"+data[arr].price+".00</span></li>"); 	
		    $("ul[data=dataJ]").append(content);
		   	
		   }
		   if(z>100 && z<=110){
	        var content = $("<li><a href=\'./goodDetail.html?id="+data[arr].id+"\'><img src="+data[arr].img+" alt=\'\'></a><span><a href=''>"+data[arr].name+"</a></span><span>"+data[arr].price+".00</span></li>"); 	
		    $("ul[data=dataK]").append(content);
		   	
		   }
		   if(z>110 && z<=120){
	        var content = $("<li><a href=\'./goodDetail.html?id="+data[arr].id+"\'><img src="+data[arr].img+" alt=\'\'></a><span><a href=''>"+data[arr].name+"</a></span><span>"+data[arr].price+".00</span></li>"); 	
		    $("ul[data=dataL]").append(content);
		   	
		   }
		   if(z>120 && z<=130){
	        var content = $("<li><a href=\'./goodDetail.html?id="+data[arr].id+"\'><img src="+data[arr].img+" alt=\'\'></a><span><a href=''>"+data[arr].name+"</a></span><span>"+data[arr].price+".00</span></li>"); 	
		    $("ul[data=dataM]").append(content);  	
		}
	}

}
//获取遍历楼层数据
dataShop.getContent = function(z,data){

	var objCont = $(".storeyTab").find("ul");

	var oTxt = objCont.eq(0).text();

}

//获取地址栏的封装
dataShop.getUrl = function(paras){

	var url = location.href;

　　var paraString = url.substring(url.indexOf("?")+1,url.length).split("&");

　　var paraObj = {}

　　for (i=0; j=paraString[i]; i++){

　　paraObj[j.substring(0,j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=")+1,j.length);

　　}

　　var returnValue = paraObj[paras.toLowerCase()];

　　if(typeof(returnValue)=="undefined"){

　　return "";

　　}else{

　　return returnValue;

　　}
}
