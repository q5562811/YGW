$(function($){
    // 获取用户名
    var user_name = Cookie.getCookie("user") || null;
    if(user_name){
        $(".denglu_index").eq(0).html(user_name);
        $(".denglu_index").eq(1).html(`<a href="" id="tuichu">退出</a>`);
        $(".denglu_index").eq(1).on('click',function(){
            location.reload();
            Cookie.delCookie("user","/");
        })
    }
    // 商品二级菜单
    $nav_left = $(".nav-left");
    $nav_left.delegate('li','mouseover',function() {
        this.children[1].style.display = "block";
        this.children[0].style.backgroundColor = "rgb(239,239,239)"
    })
    $nav_left.delegate('li','mouseout',function() {
        this.children[1].style.display = "none";
        this.children[0].style.backgroundColor = "transparent";
    })
    // 左侧浮动栏
    $(".fd-menu").css('display','none');
    window.onscroll = function(){
        if(window.scrollY > 600){
            $(".fd-menu").css('display','block');
        }else{
            $(".fd-menu").css('display','none');
        }
    }
    // 左侧购物车栏
    $('.quick_li').mouseover(function(){
        this.children[1].style.visibility= "visible";
        $('.mp_tooltip').stop().animate({'left':-92},500,'linear');
    })
    $('.quick_li').mouseout(function(){
        this.children[1].style.visibility= "hidden";
        $('.mp_tooltip').stop().animate({'left':-121},1,'linear');
    })
    // 右侧购物车-个人中心
    var okj = true;
    $('.mpbtn_recharge').on('click',function(){
        $('#quick_links_pop').html(` <a href="javascript:;" class="ibar_closebtn" title="关闭"></a>
            <div class="ibar_plugin_title"><h3>个人中心</h3></div>
            <div class="pop_panel">
                <div class="i_user">
                    <div class="i_user_p">
                        <img src="images/index_gg_04.jpg">
                    </div>
                <div class="i_user_ti">
                    <p id="uesrname">Hi,谷东</p>
                    <ul>
                        <li><a href="javascript:void(0);" ><img src="images/i_user_c.png"><span><br>个人中心</span></a></li>
                        <li><a href="javascript:void(0);" ><img src="images/i_order_c.png"><span><br>我的订单</span></a></li>
                        <li><a href="javascript:void(0);" ><img src="images/i_address_c.png"><span><br>地址管理</span></a></li>
                    </ul>
                    <ul>
                        <div class="i_user_ti_wz">依谷服务</div>
                        <li><img src="images/i_cart_c.png"><span><br>次日到达</span></li>
                        <li><img src="images/i_wy_c.png"><span><br>货到网银</span></li>
                        <li><img src="images/i_ps_c.png"><span><br>冷链配送</span></li>
                        <li><img src="images/i_tk_c.png"><span><br>极速退款</span></li>
                        <li><img src="images/i_yx_c.png"><span><br>基地优选</span></li>
                    </ul>
                </div>
                </div>
            <div class="i_logo_ti">
                <img src="images/i_logo_c.png">
            </div>

            <!-- </div><div class="arrow"><i></i></div><div class="fix_bg"></div> -->
        </div>`);
        if(okj == true){
            $('.quick_links_wrap').stop().animate({'width':365},600,'linear');
            $('#quick_links_pop').stop().animate({'left':0},600,'linear');
            okj = !okj;
        }else{
            $('.quick_links_wrap').stop().animate({'width':40},600,'linear');
            $('#quick_links_pop').stop().animate({'left':280},600,'linear');
            okj = !okj;
        }
        if(user_name != null){
            $('#uesrname').html(user_name);
        } 
    })
    // 右侧购物车-个人中心结束
    // 进入页面渲染购物车数量
    $.ajax({
            type : 'post',
            url : 'api/car.php',
            success : function(res){
                $goodsArr = JSON.parse(res);
                $('.cart_num').html($goodsArr.length);
                $('#egu-top-cart').html($goodsArr.length);
            }
    })
    // 右侧购物车-购物车
    $('.message_list').on('click',function(){
        $.ajax({
            type : 'post',
            url : 'api/car.php',
            success : function(res){
                $goodsArr = JSON.parse(res);
                $('.cart_num').html($goodsArr.length);
                $('#egu-top-cart').html($goodsArr.length);
            }
        })
         $.ajax({
            type : 'post',
            url : 'api/car.php',
            success : function(res){
                $goodsArr = JSON.parse(res);
                if($goodsArr.length == 0){
                    $('#quick_links_pop').html(`<a href="javascript:;" class="ibar_closebtn" title="关闭"></a>
                                    <div class="ibar_plugin_title"><h3>购物车</h3></div><div class="pop_panel">
                                    <div class="ibar_plugin_content">
                                        <div class="ibar_cart_group ibar_cart_product">
                                        <em class="float-left text-center w10 padding-top"><img src="images/cart_k.png" width="50"></em>
                                        <em class="float-left text-center w10 padding-t-5 text-c">你的购物车空空的，赶紧选购吧！</em>
                                    </div>
                                    <div class="cart_handler">
                                        <div class="cart_handler_header">
                                            <span class="cart_handler_left">共0件商品</span>
                                            <span class="cart_handler_right">合计：￥0.00</span>
                                        </div>
                                        <a href="html/cart.html" class="cart_go_btn" target="_blank">结算</a>
                                    </div>
                                    <div class="i_logo_ti">
                                        <img src="images/i_logo_c.png">
                                    </div>
                                    </div></div><div class="arrow"><i></i></div><div class="fix_bg"></div>`);
                }else{
                    var $goodsArrs ='';
                    var $Tprices = 0;
                    var $Num = 0;
                    for($i=0; $i< $goodsArr.length; $i++){
                        $goodsArrs += `<li class="cart_item">
                                <div class="cart_item_pic">
                                    <a href="html/cart.html"><img src="${$goodsArr[$i].imgurl.slice(3)}"></a>
                                </div>
                                <div class="cart_item_desc">
                                    <a href="html/cart.html" class="cart_item_name">${$goodsArr[$i].name}</a>
                                    <div class="cart_item_sku">
                                        <span>￥${$goodsArr[$i].Price}<em style="margin-left: 15px;">x&nbsp;${$goodsArr[$i].quantity}</em></span>
                                    </div>
                                </div>
                            </li>`;
                        $Tprices +=  $goodsArr[$i].Price * $goodsArr[$i].quantity;
                        $Num += Number($goodsArr[$i].quantity);
                    }
                $('#quick_links_pop').html(`<a href="javascript:;" class="ibar_closebtn" title="关闭"></a>
                                    <div class="ibar_plugin_title"><h3>购物车</h3></div><div class="pop_panel">
                                    <div class="ibar_plugin_content">
                                    <div class="ibar_cart_group ibar_cart_product">
                                        ${$goodsArrs}
                                    </div>
                                    <div class="cart_handler">
                                        <div class="cart_handler_header">
                                            <span class="cart_handler_left">共${$Num}件商品</span>
                                            <span class="cart_handler_right">合计：￥${$Tprices}</span>
                                        </div>
                                        <a href="html/cart.html" class="cart_go_btn" target="_blank">结算</a>
                                    </div>
                                    <div class="i_logo_ti">
                                        <img src="images/i_logo_c.png">
                                    </div>
                                    </div></div><div class="arrow"><i></i></div><div class="fix_bg"></div>`);
                }
            }
        })
        if(okj == true){
            $('.quick_links_wrap').stop().animate({'width':365},600,'linear');
            $('#quick_links_pop').stop().animate({'left':0},600,'linear');
            okj = !okj;
        }else{
            $('.quick_links_wrap').stop().animate({'width':40},600,'linear');
            $('#quick_links_pop').stop().animate({'left':280},600,'linear');
            okj = !okj;
        }
    })
    // 右侧购物车-购物车结束
    $('.erweima').hover(function(){
        $('.mp_qrcode').fadeIn();
    },function(){
        $('.mp_qrcode').fadeOut();
    })
    // 回到顶部
     $(document).ready(function(){
        $('.return_top').click(function(){
            $('html,body').animate({scrollTop:0},'slow');
        });
        $('.icon-bjt a').click(function(){
            $('html,body').animate({scrollTop:0},'slow');
        })
    });
    // 轮播图
    var num = 0;
    var timer = null;
    timer = setInterval(function(){
        $('#index_banner li').eq(num).fadeOut();
        num = ++ num > $('#index_banner li').size()-1 ? 0 : num;
        $('#index_banner li').eq(num).fadeIn();

    },3000)
     // 轮播图-结束
    // 商品渲染-开始
    $.ajax({
        type: 'get',
        url: 'api/index_xinpin.php',
        success: function(res){
            var arr = JSON.parse(res);
            var arrXP = "";
            var arrFruits = "";
            var arrVegetables = "";
            var arrGrain = "";
            var arrSpecialty = "";
            var arrSnacks = "";
            var arrGoodWine = "";
            var arrPresent = "";
            var arrKitchen = "";
            var arrHomeAppliances = "";
            for(var i=0; i<5; i++){
                arrXP += `<li><a href="javascript:void(0);"><i class="img"><img src="${arr[i].imgurl}" width="190px" height="190px"></i><span class="bt">${arr[i].name}</span><span class="jg"><em>￥${arr[i].discounts}</em><i>￥ ${arr[i].Price}</i></span></a></li>`;
            }
            for(var i=5; i<17; i++){
                arrFruits += indexGoods();
            }
            for(var i=17; i<29; i++){
                arrVegetables += indexGoods();
            }
            for(var i=29; i<41; i++){
                arrGrain += indexGoods();
            }
            for(var i=41; i<53; i++){
                arrSpecialty += indexGoods();
            }
            for(var i=53; i<65; i++){
                arrSnacks += indexGoods();
            }
            for(var i=65; i<77; i++){
                arrGoodWine += indexGoods();
            }
            for(var i=77; i<89; i++){
                arrPresent += indexGoods();
            }
            for(var i=89; i<101; i++){
                arrKitchen += indexGoods();
            }
            for(var i=101; i<113; i++){
                arrHomeAppliances += indexGoods();
            }
            function indexGoods(){
                return `<li>
                                <div class="img"><a href="javascript:void(0);"><img src="${arr[i].imgurl}" width="180px" height="180px" title="${arr[i].introduce}"></a>
                                </div>
                                <p><em style="height:30px;"><a href="javascript:void(0);" title="${arr[i].introduce}">${arr[i].name}</a></em><span>￥<i>${arr[i].discounts}</i><i class="ri">￥${arr[i].Price}</i></span></p>
                        </li>`;
            }
            $('#new_product').html(arrXP);
            $('#fruits').html(arrFruits);
            $('#vegetables').html(arrVegetables);
            $('#grain').html(arrGrain);
            $('#specialty').html(arrSpecialty);
            $('#snacks').html(arrSnacks);
            $('#goodWine').html(arrGoodWine);
            $('#present').html(arrPresent);
            $('#kitchen').html(arrKitchen);
            $('#homeAppliances').html(arrHomeAppliances);
        }
    })  
    // 商品渲染-结束
})
    