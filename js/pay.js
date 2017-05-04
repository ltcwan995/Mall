/*购物车数量加减*/
$(function(){
	var num=1;
	var price=$("#price").html();
	var total;
    if($(".num").val()==1){
        $(".reduce").prop("disabled",true);
    }
    $(".reduce").on("click",function(){
        $(".add").prop("disabled",false);
        var num=$(".num").val();
        num--;
        $(".num").val(num);
        total=Math.floor(num*price*100)/100
        $(".num.total").html(total)
        console.log(price)
        if($(".num").val()<=1){
            $(".reduce").prop("disabled",true);
        }
    })
    $(".add").on("click",function(){
        $(".reduce").prop("disabled",false);
        var num=$(".num").val();
        num++;
        $(".num").val(num);
        total=Math.floor(num*price*100)/100
        $(".num.total").html(total)
        console.log(price)
    })
    $(".num").on("blur",function(){
        if($(".num").val()<1){
            $(".reduce").prop("disabled",true);
            $(".num").val(1);
            $(".add").prop("disabled",false);   
        }else{
        	total=Math.floor($(".num").val()*price*100)/100
            $(".num.total").html(total)
        }
    })
})

