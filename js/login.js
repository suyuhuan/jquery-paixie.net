var login = {}

login.init = function(){

  //阻止表单上传
  login.formStop();

	//获取数据
	login.useData();

}
$(window).ready( login.init );

//获取数据
login.useData = function(){
	$.ajax({
		url:"../data/login/users.json",
		dataType:"json",
		async:false,
		success:function(data){
            //处理函数
			login.disposeData(data);
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
 //阻止表单上传
login.formStop = function(){

  $("form").submit(function(){return false;});
}
//数据处理函数
login.disposeData = function(data){

 
   var userData = data;

   $("input").focusout(function(){

     var userName = $("input[name='userName']").val();
     var passWord = $("input[name='passWord']").val();
    
   	for(var arr in userData){

       var nameValue = verify(userName,userData[arr].name);

       //判断是否是注册用户
      if(nameValue){

      	  var pwdValue = verify(passWord,userData[arr].pwd);

      	  var passTxt = $(".input .pwdTxt").css("display","block");

      	  if(pwdValue){
      	  	//将用户名存入cookie
      	    $(".login").click(function(){
      	    	$.cookie("userName", userData[arr].name, {expires:7, path:"/"});
      	    	window.location.href='index.html';
      	    });

      	  }
          //判断密码是否正确
      	   pwdValue?passTxt.html("密码正确"):passTxt.html("密码不正确");

      	  $(".input .userTxt").css("display","block").html("可以登录");
      	  
      	return;
      }

   	}

    $(".input .userTxt").css("display","block").html("不是注册用户");

   });
    //失去焦点以后消失
    $("input[name='userName']").focus(function(){

    	$(".input .userTxt").css("display","none");
    });
 //判断信息是否相等
  function verify(userName,DataName){

  	if(DataName === userName){

       return true; 

  	}else{
  	   return false;
  	}
  }
}
