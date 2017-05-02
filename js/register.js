var register = {};

register.init = function(){

   register.formStop();
   //获取数据
	register.useData();

}

$(window).ready( register.init );

//获取数据
register.useData = function(){
	$.ajax({
		url:"../data/login/users.json",
		dataType:"json",
		async:false,
		success:function(data){
            //处理函数
			register.disposeData(data);
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
//阻止提交
register.formStop = function(){
  $("form").submit(function(){return false;});
}
//注册验证
register.disposeData = function(data){

	$('input').focusout(function(ev){

		   	ev = ev || window.event;

		   	var userName = $('input[name=userName]').val();
		   	var passWord = $('input[name=password]').val();
		   	var rePassword = $('input[name=repassword]').val();     

	        var userData = data;

	        for(var arr in userData){

	         	var nameValue = verify(userName,userData[arr].name);

	         	if(nameValue){

	         	  $(".input .txtUser").css("display","inline-block").html("用户已被注册!");

	      	      return;
	         	}
	        }

	         //验证账号
	        register.atName(".txtUser",userName);
	         //验证密码
	        register.atPass(".txtPwd",passWord);

	        //验证两次密码是否一致

	         var yes = verify(passWord,rePassword);

	         if(!yes){

	         	$(".input .txtRpwd").css("display","inline-block").html("*密码不一致!");

	         }else{
	         	
                $(".input .txtRpwd").css("display","inline-block").html("*可以用!");
	         }
	         
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

//验证账号
 register.atName = function(obj,userName){

 	    if(/^\s*$/.test(userName)){

 	    	$(obj).css("display","inline-block").html("*账号不能为空");
			return false;
 	    }
 	    else if(/\s+/.test(userName)){

 	    	$(obj).css("display","inline-block").html("*账号不能包含空格");
	    	return false;
 	    }
 	
 	    else if(!/^[\w\-\.]+@[a-zA-Z\d\-]+(\.[a-zA-Z]+){1,2}$/.test(userName) && !/^1[34578]\d{9}$/.test(userName)){

 	    		$(obj).css("display","inline-block").html("*请输入正确的邮箱或手机号码！");

					return false;
				}
       

 	    else{

 	    	$(obj).css("display","inline-block").html("*用户可以注册");
	        return false;
 	    }
}
  //验证密码
  register.atPass = function(obj,passWord){

      if(/^\s*$/.test(passWord)){

 	    	$(obj).css("display","inline-block").html("*请输入密码");
			return false;
 	    }
       else if(/\s+/.test(passWord)){
			$(obj).css("display","inline-block").html('*密码不能包含空格');
			return false;
		}
		else if(!/^.{1,19}$/.test(passWord)){

			$(obj).css("display","inline-block").html('*密码长度不能大于20个字符');

			return false;
		}else{
			$(obj).css("display","inline-block").html('*可以用!');

			return false;
		}
  }