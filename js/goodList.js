var goodList = {}

goodList.init= function(){

	//��ȡ����
   goodList.dataAjax();

}

$(window).ready( goodList.init );



goodList.dataAjax = function(){

	$.ajax({

		url:"../data/goodList/goodList.json",
		dataType:"json",
		async:false,

		success:function(data){
            //������
			goodList.shopData(data);
		},

		error: function(){ 
		//����ʧ��
		 console.log("��������ʧ��!");
		},

		complete: function(){ 
		//�������
		 console.log("�������!");
		}
	})
};

//��������
goodList.shopData=function(data){

	var shopData = data;
  
  for(var arr in shopData){  


  	console.log(shopData[arr]);
     //���ݴ���
     dataShop.showData(shopData[arr].data);
  }
}
//�õ����ݽ��д���
dataShop.showData = function(data){

    var oneData = data;
	
	for(var arr2 in oneData){
      
	   var content = oneData[arr2].content;

	   console.log(content);

	   dataShop.getContent(content);

	}
}

dataShop.getContent = function(content){
    
    var data = content;
    	for(var arr in data){
		  var content =  "<li><div class='probox'><a target='_blank' href='./goodDetail.html?id="+data[arr].id+"' class='img289' style='background-image: none;'><dfn></dfn><img  src="+data[arr].img+" style='opacity: 1;'></a><div class='imglist'><span class='prev no'></span><div><ul><li class='current' url='#1' pic="+data[arr].img+"><img src="+data[arr].img+" imgsrc="+data[arr].img+"></li><li url='#2' pic="+data[arr].img+"><img src="+data[arr].img+" imgsrc="+data[arr].img+"></li></ul></div><span class='next'></span></div><div class='info'><span class='oof'>��</span><b>"+data[arr].price+"</b><del class='oof'>��"+data[arr].price+"</del><p class='title'><a target='_blank' href='./goodDetail.html?id="+data[arr].id+"'>"+data[arr].name+"</a><p class='shop'><a href='javascript:void(0)' target='_blank' data-forbid=''>���������콢��</a></p><p class='tag'><span>����</span></p></div></div></li>";
		    $("#js_good").append(content);
		}
}