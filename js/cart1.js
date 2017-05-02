var cart = {}

cart.init = function(){

	//购物车特效
	cart.defult();

	cart.addSubtract();

	cart.addSubtract2();

	cart.sumNumber();
}

$(document).ready( cart.init );


cart.defult = function(){

    //加减框
	$("#number").Spinner({value:1, min:1, len:3, max:1000});

	// 全选        
	$(".allselect").click(function () {

		$(".tbody input[name=newslist]").each(function () {
			$(this).attr("checked", true);
		    // $(this).next().css({ "background-color": "#3366cc", "color": "#ffffff" });
		});

		cart.getCount();
	});

	//反选
	$("#invert").click(function () {
		$(".tbody input[name=newslist]").each(function () {
			if ($(this).attr("checked")) {
				$(this).attr("checked", false);
				//$(this).next().css({ "background-color": "#ffffff", "color": "#000000" });
			} else {
				$(this).attr("checked", true);
				//$(this).next().css({ "background-color": "#3366cc", "color": "#000000" });
			} 
		});
		cart.getCount();
	});

	//取消
	$("#cancel").click(function () {
		$(".tbody input[name=newslist]").each(function () {
			$(this).attr("checked", false);
			// $(this).next().css({ "background-color": "#ffffff", "color": "#000000" });
		});
		cart.getCount();
	});

	// 所有复选(:checkbox)框点击事件
	$(".tbody input[name=newslist]").click(function () {
		if ($(this).attr("checked")) {
			//$(this).next().css({ "background-color": "#3366cc", "color": "#ffffff" });
		} else {
			// $(this).next().css({ "background-color": "#ffffff", "color": "#000000" });
		}
	});

	// 输出
	$(".tbody input[name=newslist]").click(function () {
		// $("#total2").html() = GetCount($(this));
		cart.getCount();
		//alert(conts);
	});
}

// 商品加减算总数
cart.addSubtract = function(){
	var t = $("#text_box1");
		$("#add1").click(function () {
			t.val(parseInt(t.val()) + 1)
			setTotal(); cart.getCount();
		})
		$("#min1").click(function () {
			t.val(parseInt(t.val()) - 1)
			setTotal(); cart.getCount();
		})
		function setTotal() {

			$("#total1").html((parseInt(t.val()) * 9).toFixed(2));
			$("#newslist-1").val(parseInt(t.val()) * 9);
		}
		setTotal();

}

cart.addSubtract2 = function(){

	var t = $("#text_box2");
		$("#add2").click(function () {
			t.val(parseInt(t.val()) + 1)
			setTotal(); cart.getCount();
		})
		$("#min2").click(function () {
			t.val(parseInt(t.val()) - 1)
			setTotal(); cart.getCount();
		})
		function setTotal() {

			$("#total2").html((parseInt(t.val()) * 8).toFixed(2));
			$("#newslist-2").val(parseInt(t.val()) * 8);
		}
		setTotal();
}

cart.sumNumber = function(){

   $(".quanxun").click(function () {
			setTotal();
			//alert($(lens[0]).text());
		});
		function setTotal() {
			var len = $(".tot");
			var num = 0;
			for (var i = 0; i < len.length; i++) {
				num = parseInt(num) + parseInt($(len[i]).text());

			}
			//alert(len.length);
			$("#zong1").text(parseInt(num).toFixed(2));
			$("#shuliang").text(len.length);
		}
		//setTotal();
}

cart.getCount = function(){
	var conts = 0;
	var aa = 0;
	$(".tbody input[name=newslist]").each(function () {
		if ($(this).attr("checked")) {
			for (var i = 0; i < $(this).length; i++) {
				conts += parseInt($(this).val());
				aa += 1;
			}
		}
	});
	$("#shuliang").text(aa);
	$("#zong1").html((conts).toFixed(2));
	$("#jz1").css("display", "none");
	$("#jz2").css("display", "block");
}
