jQuery(function($){
     // 获取用户名
    var user_name = Cookie.getCookie("user") || null;
    if(user_name){
        $(".denglu_index").eq(0).html(user_name);
        $(".denglu_index").eq(1).html(`<a href="" id="tuichu">退出</a>`);
        $('#gooduesr').html(`<a href="javascript:void(0);">${user_name}</a>`);
        $(".denglu_index").eq(1).on('click',function(){
            location.reload();
            Cookie.delCookie("user","/");
        })
    }
    // 导航二级菜单
    $('.menu-all').on('mouseover','.all-sort',function(event){
        $('.wrap').css('display','block');
        event.stopPropagation();
        
    })
    $('.wrap').on('mouseover',function(event){
        $('.wrap').css('display','block');
        event.stopPropagation();
            $(this).find('.item').on('mouseover',function(){
                $(this).find('.clearfix').css('display','block');
            })
            $(this).find('.item').on('mouseout',function(){
                $(this).find('.clearfix').css('display','none');
            })
    })
    $(document).on('mouseover',function(){
        $('.wrap').hide();
    })    // 搜索吸顶
    window.onscroll = function() {
        var $scrollTop = window.scrollY;
        if($scrollTop >= 250){
            $('.head1').attr('class','head1 head1_f');
        }else{
            $('.head1').attr('class','head1 head1_t');
        }
    }
    // 顶部购物车
    $.ajax({
            type : 'post',
            url : '../api/car.php',
            success : function(res){
                $goodsArr = JSON.parse(res);
                if($goodsArr.length == 0){
                    $('#tCart_ul').html('&nbsp;&nbsp;&nbsp;&nbsp; 没有商品！');
                }else{
                    var $cartHtml= '';
                    var $cartNum = 0;
                    var $cartPrice1 = 0;
                    for(var $i=0 ;$i < $goodsArr.length; $i++){
                        $cartHtml += `<li class="t-c" g-id="${$goodsArr[$i].id}"><a href="../html/details.html?id=${$goodsArr[$i].id}"><img src="${$goodsArr[$i].imgurl}"></a><em class="top_cart_xia_wz"><a href="../html/details.html?id=${$goodsArr[$i].id}">${$goodsArr[$i].name}</a></em> <em class="top_cart_xia_ri"><em class="float-left w10 text-right">￥${$goodsArr[$i].Price}&nbsp;x&nbsp;${$goodsArr[$i].quantity}</em><em class="float-left w10 text-right tCartdel"><a href="javascript:location.reload();" >删除</a></em> </em></li>`
                        $cartNum += Number($goodsArr[$i].quantity);
                        $cartPrice1 += $goodsArr[$i].Price * $goodsArr[$i].quantity;
                    }
                    var $cartPrice = $cartPrice1.toFixed(2);
                    $('#tCart_ul').html($cartHtml);
                    $('#cartNam').html(`共${$cartNum}件商品&nbsp;&nbsp;共计<strong>￥${$cartPrice}</strong>`);
                    $('#egu-top-cart').html($cartNum);
                    $('#tCart_ul').on('click','.tCartdel',function (){
                        var $gid = $(this).parent().parent().attr('g-id');
                        console.log($gid);
                        $.ajax({
                            type : 'post',
                            url : '../api/car.php',
                            data : {
                                fn : 0,
                                id : $gid,
                            },
                            success : function(res){
                                $carArr = JSON.parse(res);
                                console.log($carArr);
                                if($carArr.length == 0){
                                    $('#tCart_ul').html('&nbsp;&nbsp;&nbsp;&nbsp; 没有商品！');
                                    $('#egu-top-cart').html('0');
                                }else{
                                    var $cartHtml= '';
                                    var $cartNum = 0;
                                    var $cartPrice1 = 0;
                                    for(var $i=0 ;$i < $carArr.length; $i++){
                                        $cartHtml += `<li class="t-c" g-id="${$carArr[$i].id}"><a href="../html/details.html?id=${$carArr[$i].id}"><img src="${$carArr[$i].imgurl}"></a><em class="top_cart_xia_wz"><a href="../html/details.html?id=${$carArr[$i].id}">${$carArr[$i].name}</a></em> <em class="top_cart_xia_ri"><em class="float-left w10 text-right">￥${$carArr[$i].Price}&nbsp;x&nbsp;${$carArr[$i].quantity}</em><em class="float-left w10 text-right tCartdel"><a href="javascript:location.reload();" >删除</a></em> </em></li>`
                                        $cartNum += Number($carArr[$i].quantity);
                                        $cartPrice1 += $carArr[$i].Price * $carArr[$i].quantity;
                                    }
                                    var $cartPrice = $cartPrice1.toFixed(2);
                                    $('#tCart_ul').html($cartHtml);
                                    $('#cartNam').html(`共${$cartNum}件商品&nbsp;&nbsp;共计<strong>￥${$cartPrice}</strong>`);
                                    $('#egu-top-cart').html($cartNum);
                                }
                            }
                        })
                    })
                }
            }
    })
    $.ajax({
        type : 'post',
        url : '../api/car.php',
        success : function(res){
            $cartArr = JSON.parse(res);
            if($cartArr.length != 0 ){
                var $cartHtml = '';
                var $cartPrice = 0;
                var $cartshuliang = 0;
                for(var $i=0; $i<$cartArr.length; $i++){
                    var $all = $cartArr[$i].quantity * $cartArr[$i].Price;
                    var $allPrice = $all.toFixed(2);
                    $cartHtml += `<li g-id="${$cartArr[$i].id}">
                                    <div class="cart-x">
                                        <input name="chk_goods" type="checkbox" checked="checked" value="P2V8O1G26p8aw6c2WE3O" class="cart-checkbox-x fl"></div>
                                    <div class="cart-nr-li-line">
                                        <div class="cart-nr-li">
                                            <div class="cart-nr-li-img">
                                                <img src="${$cartArr[$i].imgurl}" title="${$cartArr[$i].name}"></div>
                                            <div class="cart-nr-li-wz">
                                                <a href="javascript:void(0);">${$cartArr[$i].name}</a></div>
                                        </div>
                                    </div>
                                    <div class="li-price red">￥${$cartArr[$i].Price}</div>
                                    <div class="li-num">
                                        <div class="cart-li-num">
                                            <em>
                                                <input type="button" class="cart-li-num-lf"></em>
                                            <em class="cart-li-num-c">${$cartArr[$i].quantity}</em>
                                            <em>
                                                <input type="button" class="cart-li-num-ri"></em>
                                        </div>
                                    </div>
                                    <div class="li-sub red">￥${$allPrice}</div>
                                    <div class="li-w"> - </div>
                                    <div class="cart-nr-li-hd-sc">
                                        <a href="javascript:void(0);">移入收藏</a></div>
                                    <div class="cart-nr-li-hd-de">
                                        <a href="javascript:location.reload();">删除</a></div>
                                </li>`;
                    $cartPrice += $cartArr[$i].Price * $cartArr[$i].quantity;
                    $cartshuliang += Number($cartArr[$i].quantity);
                }
                var $allPrice2 = $cartPrice.toFixed(2);
                $('#zongsu').html($cartshuliang);
                $('.cart-nr-zj-js').html(`￥${$allPrice2}`);
                $('#zongjia').html($allPrice2);
                $('.cart-nr-right').html($cartHtml);
            }
            $('.cart-nr-li-hd-de').children().on('click',function(){
            var $gid = $(this).parent().parent().attr('g-id');
            console.log($gid);
                $.ajax({
                    type : 'post',
                    data : {
                        fn : 0,
                        id : $gid
                    },
                    url : '../api/car.php',
                    success : function(){}
                })
            })
            $('.cart-nr-right').on('click','.cart-li-num-ri',function (){
                $Num = $('.cart-li-num-c').html();
                $Num++;
                $('.cart-li-num-c').html($Num);
                var $gid = $(this).parent().parent().parent().parent().attr('g-id');
                $.ajax({
                    type : 'post',
                    data : {
                        quantity : 1,
                        id : $gid
                    },
                    url : '../api/car.php',
                    success : function(res){
                       var $cartArr = JSON.parse(res);
                       // location.reload();
                       if($cartArr.length != 0 ){
                            var $cartHtml = '';
                            var $cartPrice = 0;
                            var $cartshuliang = 0;
                            for(var $i=0; $i<$cartArr.length; $i++){
                                var $allPrice = $cartArr[$i].quantity * $cartArr[$i].Price;
                                var $allPrice2 = $allPrice.toFixed(2);
                                $cartHtml += `<li g-id="${$cartArr[$i].id}">
                                                <div class="cart-x">
                                                    <input name="chk_goods" type="checkbox" checked="checked" value="P2V8O1G26p8aw6c2WE3O" class="cart-checkbox-x fl"></div>
                                                <div class="cart-nr-li-line">
                                                    <div class="cart-nr-li">
                                                        <div class="cart-nr-li-img">
                                                            <img src="${$cartArr[$i].imgurl}" title="${$cartArr[$i].name}"></div>
                                                        <div class="cart-nr-li-wz">
                                                            <a href="javascript:void(0);">${$cartArr[$i].name}</a></div>
                                                    </div>
                                                </div>
                                                <div class="li-price red">￥${$cartArr[$i].Price}</div>
                                                <div class="li-num">
                                                    <div class="cart-li-num">
                                                        <em>
                                                            <input type="button" class="cart-li-num-lf"></em>
                                                        <em class="cart-li-num-c">${$cartArr[$i].quantity}</em>
                                                        <em>
                                                            <input type="button" class="cart-li-num-ri"></em>
                                                    </div>
                                                </div>
                                                <div class="li-sub red">￥${$allPrice2}</div>
                                                <div class="li-w"> - </div>
                                                <div class="cart-nr-li-hd-sc">
                                                    <a href="javascript:void(0);">移入收藏</a></div>
                                                <div class="cart-nr-li-hd-de">
                                                    <a href="javascript:location.reload();">删除</a></div>
                                            </li>`;
                                $cartPrice += $cartArr[$i].Price * $cartArr[$i].quantity;
                                $cartshuliang += Number($cartArr[$i].quantity);
                            }
                            var $all = $cartPrice.toFixed(2);
                            $('#zongsu').html($cartshuliang);
                            $('.cart-nr-zj-js').html(`￥${$all}`);
                            $('#zongjia').html($all);
                            $('.cart-nr-right').html($cartHtml);
                        }
                    $('.cart-nr-li-hd-de').children().on('click',function(){
                        var $gid = $(this).parent().parent().attr('g-id');
                        console.log($gid);
                            $.ajax({
                                type : 'post',
                                data : {
                                    fn : 0,
                                    id : $gid
                                },
                                url : '../api/car.php',
                                success : function(){}
                            })
                        })
                    }
                })
            })
            $('.cart-nr-right').on('click','.cart-li-num-lf',function (){
                if($('.cart-li-num-c').html() > 1){
                    $Num = $('.cart-li-num-c').html();
                    $Num--;
                    $('.cart-li-num-c').html($Num);
                    var $gid = $(this).parent().parent().parent().parent().attr('g-id');
                    $.ajax({
                    type : 'post',
                    data : {
                        quantity : -1,
                        id : $gid
                    },
                    url : '../api/car.php',
                    success : function(res){
                       var $cartArr = JSON.parse(res);
                       console.log($cartArr);
                       // location.reload();
                       if($cartArr.length != 0 ){
                            var $cartHtml = '';
                            var $cartPrice = 0;
                            var $cartshuliang = 0;
                            for(var $i=0; $i<$cartArr.length; $i++){
                                var $all = $cartArr[$i].quantity * $cartArr[$i].Price;
                                var $allPrice = $all.toFixed(2);
                                $cartHtml += `<li g-id="${$cartArr[$i].id}">
                                                <div class="cart-x">
                                                    <input name="chk_goods" type="checkbox" checked="checked" value="P2V8O1G26p8aw6c2WE3O" class="cart-checkbox-x fl"></div>
                                                <div class="cart-nr-li-line">
                                                    <div class="cart-nr-li">
                                                        <div class="cart-nr-li-img">
                                                            <img src="${$cartArr[$i].imgurl}" title="${$cartArr[$i].name}"></div>
                                                        <div class="cart-nr-li-wz">
                                                            <a href="javascript:void(0);">${$cartArr[$i].name}</a></div>
                                                    </div>
                                                </div>
                                                <div class="li-price red">￥${$cartArr[$i].Price}</div>
                                                <div class="li-num">
                                                    <div class="cart-li-num">
                                                        <em>
                                                            <input type="button" class="cart-li-num-lf"></em>
                                                        <em class="cart-li-num-c">${$cartArr[$i].quantity}</em>
                                                        <em>
                                                            <input type="button" class="cart-li-num-ri"></em>
                                                    </div>
                                                </div>
                                                <div class="li-sub red">￥${$allPrice}</div>
                                                <div class="li-w"> - </div>
                                                <div class="cart-nr-li-hd-sc">
                                                    <a href="javascript:void(0);">移入收藏</a></div>
                                                <div class="cart-nr-li-hd-de">
                                                    <a href="javascript:location.reload();">删除</a></div>
                                            </li>`;
                                $cartPrice += $cartArr[$i].Price * $cartArr[$i].quantity;
                                $cartshuliang += Number($cartArr[$i].quantity);
                            }
                            var $zongjia = $cartPrice.toFixed(2);
                            $('#zongsu').html($cartshuliang);
                            $('.cart-nr-zj-js').html(`￥${$zongjia}`);
                            $('#zongjia').html($zongjia);
                            $('.cart-nr-right').html($cartHtml);
                        }
                        $('.cart-nr-li-hd-de').children().on('click',function(){
                            var $gid = $(this).parent().parent().attr('g-id');
                            console.log($gid);
                                $.ajax({
                                    type : 'post',
                                    data : {
                                        fn : 0,
                                        id : $gid
                                    },
                                    url : '../api/car.php',
                                    success : function(){}
                                })
                            })
                    }
                })
                }else{
                    $('.cart-li-num-c').html('1');
                }
                
            })
        }
        
    })
    
});