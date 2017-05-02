var cart = {}

 cart.init = function(){

// 	//购物车特效
	cart.defult();

// 	//获取购物车数据
	cart.getCartData();

// 	// cart.addSubtract();

// 	// cart.addSubtract2();

// 	// cart.sumNumber();
// }

// $(document).ready( cart.init );


// cart.defult = function(){

//     //加减框
// 	$("#number").Spinner({value:1, min:1, len:3, max:1000});

// 	// 全选        
// 	$(".allselect").click(function () {

// 		$(".tbody input[name=newslist]").each(function () {

// 			$(this).attr("checked", true);

// 			$(".tbody tr").addClass("activer");

// 		});

// 		// var a = $(".tbody input[name=newslist]").attr("checked");
 
//   //   console.log(a);

// 	});
	
}


cart.getCartData = function(){

	var cartData = $.cookie("cart");

  
    var data = JSON.parse(cartData);

      console.log(data);


	// for(var arr in data){

	// 	console.log(data[arr]);

	// 	var content = "<tr id='area_goods'><td class='checkbox'><input class='check-one check' type='checkbox'/></td><td class='goods'><img src='"+data[arr].img+"' alt=""/><span>"+data[arr].name+"</span></td><td align='center'>"+data[arr].price+"</td><td class='count'><span class='reduce'></span><input class='count-input' type='text' value='"+data[arr].num+"'/><span class='add'>+</span></td><td class='price'>"+data[arr].price+"</td><td class='operation'><span class='delete'>删除</span></td></tr>";

	// 	 //var content = "<tr><td class='Done'><input type='checkbox'  name='newslist' id='newslist' /></td><td class='Dtwo'><a href='./goodDetail.html?id"+data[arr].id+"'><img src='"+data[arr].img+"'/></a></td><td class='Dthree'><a href='./goodDetail.html?"+data[arr].id+"'>"+data[arr].name+"</a></td><td class='Dfour'>"+data[arr].price+"</td><td class='Dfive'><div id='number' class='Spinner'></div></td><td class='Dsix'><label id='total1' class='tot'></label></td><td class='Dseven'><a href='#'>删除</a></td></tr>";
  
 //         $("#cartTable").append(content);

 //       // console.log($(".Dseven").html());

	// }	
}
