var goodDetail = {};

goodDetail.init = function(){
	//图片组件
	goodDetail.Magnifier();

	//商品详情效果
	goodDetail.descriptions();

	//获取详情数据
	goodDetail.dataAjax();

	//加入购物车
	goodDetail.cart();



}

$(window).ready( goodDetail.init );

//图片组件
goodDetail.Magnifier = function(){

	$(".imgBox li").bind("mouseover",function(){

		  $(this).siblings().removeClass();

		  $(this).addClass("active");

		  var smallSrc = $(this).find("img").attr("src");

		  $(".bigImg img").attr("src",smallSrc);

	});
    
    $("#sum").Spinner({value:1, min:1, len:3, max:1000});


    goodDetail.shopAttr($(".color li"));

    goodDetail.shopAttr($(".size li"));

}
//商品属性组件
goodDetail.shopAttr = function(obj){

	obj.click(function(){

        $(this).removeClass().addClass("active").siblings().removeClass("active");
        $(this).siblings().find('i').removeClass("cor");
        $(this).find('i').addClass("cor");

	});
}
//商品详情特性
goodDetail.descriptions = function(){

	var descriptions = new TimelineMax();

	$(".desList li").click(function(){

		$(this).siblings('li').removeClass();

        $(this).addClass("active");

        var oDiv = $(".rightCont>div").eq($(this).index());

        $(".rightCont>div").css("display","none");

        descriptions.clear().to(oDiv,0.4,{opacity:1});

        $(".rightCont>div").eq($(this).index()).css("display","block");
     
	});

}
//获取商品id
var ID = dataShop.getUrl("id");

var shopTit = $("h1[data=title]");
var market =$("del[data=price]");
var shopPrice =$("b[data=price]");
var shopImg = $("a[data=img]");
var Img = "";

//获取传过来的数据
dataShop.traverse= function(data){

	var  detailData = data;

	for(var arr in detailData){

		var oId = detailData[arr].id;

		if(oId==ID){

         shopTit.html(detailData[arr].name);

          market.html(detailData[arr].price);

          shopPrice.html(detailData[arr].price);

          Img = detailData[arr].img;

          shopImg.html("<img src="+detailData[arr].img+" alt='' data='img'>");
		}
	}
}

//获取详情数据
goodDetail.dataAjax = function(){

	$.ajax({

		url:"../data/goodDetail/goodDetail.json",
		dataType:"json",
		async:false,

		success:function(data){
            //处理函数
			goodDetail.detailData(data);
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
//获取想对应的小图
var i = 1;
goodDetail.detailData =function(data){

	var minImg = data;

	for(var arr in data){

		var oId = minImg[arr].id;
         
		if(oId==ID){

			var smallImg = minImg[arr].imgSmall;
            
			goodDetail.smallImg(smallImg);

		   // console.log(smallImg);
		}
	}
};
//遍历小图
goodDetail.smallImg = function(data){

  var imgData = data;
  console.log(imgData.length);     

  for(var arr in imgData){
  	//console.log(imgData[arr].length);
  	  // var content = $("<li><img src="+imgData[arr].img+i+" alt=\'\'></li>");
     // $("ul[data=smallImg]").append(content);
  }
  
}
//加入购物车
goodDetail.cart = function(){
  
  $(".add").click(function(){
    var goodsId  = ID;
  	var goodsName = shopTit.html();
	var goodsImg = shopImg.html();
	var goodsPrice = shopPrice.html();

	var goodsList = $.cookie("cart") ? JSON.parse($.cookie("cart")):[];

	var isExist = false;

	for(var i=0;i<goodsList.length;i++){

		var cartGoodsId = goodsList[i].id;

		if(goodsId == cartGoodsId){

			goodsList[i].num++;

			isExist = true;
		}
	}

	if(!isExist){
		var goods = {
			id:goodsId,
			name:goodsName,
			price:goodsPrice,
			img:Img,
			num:1
		}
		goodsList.push(goods);
	}

	$.cookie("cart",JSON.stringify(goodsList),{expires:7,path:"/"});

  });

  $(".imBuy").click(function(){
		location.href = "./cart.html"; 
	})

//清除cooking

 //  $(".imBuy").click(function(){
	// 	$.cookie("cart", "", {expires:0, path:"/"});
	// })


}
