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
    // 头部二级菜单-结束
    $('.list-tmenu li').hover(function(){
        $(this).stop().children('div').slideDown(200);
    },function(){
        $(this).stop().children('div').slideUp(200);
    })
    // 头部二级菜单-结束
    // 左侧二级菜单-开始
    $('.li-ul-h').on('click',function(){
        console.log();
        if($(this).hasClass('menu_open') == true){
            $(this).next().slideToggle("slow");
            $(this).attr('class','li-ul-h menu_close');
        }else{
            $(this).next().slideToggle("slow");
            $(this).attr('class','li-ul-h menu_open');
        }
    })
    // 左侧二级菜单-结束
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
                        <img src="../images/index_gg_04.jpg">
                    </div>
                <div class="i_user_ti">
                    <p id="uesrname">Hi,谷东</p>
                    <ul>
                        <li><a href="javascript:void(0);" ><img src="../images/i_user_c.png"><span><br>个人中心</span></a></li>
                        <li><a href="javascript:void(0);" ><img src="../images/i_order_c.png"><span><br>我的订单</span></a></li>
                        <li><a href="javascript:void(0);" ><img src="../images/i_address_c.png"><span><br>地址管理</span></a></li>
                    </ul>
                    <ul>
                        <div class="i_user_ti_wz">依谷服务</div>
                        <li><img src="../images/i_cart_c.png"><span><br>次日到达</span></li>
                        <li><img src="../images/i_wy_c.png"><span><br>货到网银</span></li>
                        <li><img src="../images/i_ps_c.png"><span><br>冷链配送</span></li>
                        <li><img src="../images/i_tk_c.png"><span><br>极速退款</span></li>
                        <li><img src="../images/i_yx_c.png"><span><br>基地优选</span></li>
                    </ul>
                </div>
                </div>
            <div class="i_logo_ti">
                <img src="../images/i_logo_c.png">
            </div>
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
            url : '../api/car.php',
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
            url : '../api/car.php',
            success : function(res){
                $goodsArr2 = JSON.parse(res);
                console.log($goodsArr2);
                $('.cart_num').html($goodsArr2.length);
                $('#egu-top-cart').html($goodsArr2.length);
            }
        })
         $.ajax({
            type : 'post',
            url : '../api/car.php',
            success : function(res){
                $goodsArr = JSON.parse(res);
                if($goodsArr.length == 0){
                    $('#quick_links_pop').html(`<a href="javascript:;" class="ibar_closebtn" title="关闭"></a>
                                    <div class="ibar_plugin_title"><h3>购物车</h3></div><div class="pop_panel">
                                    <div class="ibar_plugin_content">
                                        <div class="ibar_cart_group ibar_cart_product">
                                        <em class="float-left text-center w10 padding-top"><img src="../images/cart_k.png" width="50"></em>
                                        <em class="float-left text-center w10 padding-t-5 text-c">你的购物车空空的，赶紧选购吧！</em>
                                    </div>
                                    <div class="cart_handler">
                                        <div class="cart_handler_header">
                                            <span class="cart_handler_left">共0件商品</span>
                                            <span class="cart_handler_right">合计：￥0.00</span>
                                        </div>
                                        <a href="../html/cart.html" class="cart_go_btn" target="_blank">结算</a>
                                    </div>
                                    <div class="i_logo_ti">
                                        <img src="../images/i_logo_c.png">
                                    </div>
                                    </div></div><div class="arrow"><i></i></div><div class="fix_bg"></div>`);
                }else{
                    var $goodsArrs ='';
                    var $Tprices = 0;
                    var $Num = 0;
                    for($i=0; $i< $goodsArr.length; $i++){
                        $goodsArrs += `<li class="cart_item">
                                <div class="cart_item_pic">
                                    <a href="../html/cart.html"><img src="${$goodsArr[$i].imgurl}"></a>
                                </div>
                                <div class="cart_item_desc">
                                    <a href="../html/cart.html" class="cart_item_name">${$goodsArr[$i].name}</a>
                                    <div class="cart_item_sku">
                                        <span>￥${$goodsArr[$i].Price}<em style="margin-left: 15px;">x&nbsp;${$goodsArr[$i].quantity}</em></span>
                                    </div>
                                </div>
                            </li>`;
                        $Tprices +=  $goodsArr[$i].Price * $goodsArr[$i].quantity;
                        $Num += Number($goodsArr[$i].quantity);
                    }
                console.log($Tprices);
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
                                        <a href="../html/cart.html" class="cart_go_btn" target="_blank">结算</a>
                                    </div>
                                    <div class="i_logo_ti">
                                        <img src="../images/i_logo_c.png">
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
    // 商品渲染-开始
    $.ajax({
        type : 'get',
        url : '../api/goodslist.php',
        success : function(res){
            $goodsArr = JSON.parse(res);
            $('.goodsSum').html(`共${$goodsArr.length}个商品`);
            $Num = 0;
            $Nums = 20;
            $obj = "";
            $goods = commodity($Num,$Nums);
            $('#goods_list').html($goods);
            $('.more-sp').on('click',function(){
                if($Nums < $goodsArr.length){
                    $Num = $Num + 20;
                    $Nums = $Nums + 20;
                    $goods += commodity($Num,$Nums);
                    $('#goods_list').html($goods); 
                }else{
                    $('.more-sp1').slideUp(600);
                    $('.more-sp2').slideDown(600);
                }
                
            })
            $('.goodsPX').on('click',function(){
                $.ajax({
                    type : 'get',
                    url : '../api/goodslist.php',
                    success : (res) =>{
                        $goodsArr = JSON.parse(res);
                        if(this.innerHTML == "默认"){
                            $('.goodsSum').html(`共${$goodsArr.length}个商品`);
                            console.log(this);
                            $Num = 0;
                            $Nums = 20;
                            $obj = "";
                            $goods = commodity($Num,$Nums);
                            $('#goods_list').html($goods);
                        }else if(this.innerHTML == "新品"){
                            goodsFL("新品");
                        }else if(this.innerHTML == "进口"){
                            goodsFL("进口");
                        }else if(this.innerHTML == "促销"){
                            goodsFL("促销");
                        }else{
                            goodsFL("扶贫");
                        }
                    }
                })
            })
            function goodsFL(con) {
                $arr = [];
                for($i=0; $i<$goodsArr.length; $i++){
                if($goodsArr[$i].special == con){
                    $arr.push($goodsArr[$i]);
                }
                }
                $maArr = $arr.map((item)=>{
                    return mapArr(item);
                            })
                $('#goods_list').html($maArr);
                $('.goodsSum').html(`共${$arr.length}个商品`);
                $('.more-sp1').slideUp(600);
            }
            function mapArr(item){
                $mArr = `<li class="">
                            <span class="img"><a href="../html/details.html?id=${item.id}" target="_blank"><img src="${item.imgurl}" alt="" title="" width="250px"></a></span>
                            <span class="price"><em>￥${item.Price}</em><i class="jk">${item.special}</i></span>
                            <span class="t"><a href="../html/details.html?id=${item.id}" target="_blank" title="${item.name}">${item.name}</a><i>${item.particulars}</i></span>
                            <p>
                                <font>自  营</font>
                                <em>深圳平湖仓</em>
                                <em>同城速递</em>
                            </p>
                        <div class="">
                            <div class="Spinner">
                                <a class="DisDe" ><i>-</i></a>
                                <input class="Amount" id="P2V8O1G26p8aw6c2WE3O" value="1" goodsid="P2V8O1G26p8aw6c2WE3O" autocomplete="off" maxlength="4">
                                <a class="Increase" ><i>+</i></a>
                            </div>
                                <a class="bth-jrshop" href="javascript:void(0);" >加入购物车</a>
                            </div>
                        </li>`;
                return $mArr;
            }
            function commodity(Num,Nums) {
                for($i=Num; $i<Nums; $i++){
                if($goodsArr[$i].special != ""){
                    $obj += `<li class="">
                            <span class="img"><a href="../html/details.html?id=${$goodsArr[$i].id}" target="_blank"><img src="${$goodsArr[$i].imgurl}" alt="" title="" width="250px"></a></span>
                            <span class="price"><em>￥${$goodsArr[$i].Price}</em><i class="jk">${$goodsArr[$i].special}</i></span>
                            <span class="t"><a href="../html/details.html?id=${$goodsArr[$i].id}" target="_blank" title="${$goodsArr[$i].name}">${$goodsArr[$i].name}</a><i>${$goodsArr[$i].particulars}</i></span>
                            <p>
                                <font>自  营</font>
                                <em>深圳平湖仓</em>
                                <em>同城速递</em>
                            </p>
                        <div class="">
                            <div class="Spinner">
                                <a class="DisDe" ><i>-</i></a>
                                <input class="Amount" id="P2V8O1G26p8aw6c2WE3O" value="1" goodsid="P2V8O1G26p8aw6c2WE3O" autocomplete="off" maxlength="4">
                                <a class="Increase" ><i>+</i></a>
                            </div>
                                <a class="bth-jrshop" href="javascript:void(0);" >加入购物车</a>
                            </div>
                        </li>`;
                }else{
                    $obj += `<li class="">
                            <span class="img"><a href="../html/details.html?id=${$goodsArr[$i].id}" target="_blank"><img src="${$goodsArr[$i].imgurl}" alt="" title="" width="250px"></a></span>
                            <span class="price"><em>￥${$goodsArr[$i].Price}</em><i></i></span>
                            <span class="t"><a href="javascript:void(0);" target="_blank" title="${$goodsArr[$i].name}">${$goodsArr[$i].name}</a><i>${$goodsArr[$i].particulars}</i></span>
                            <p>
                                <font>自  营</font>
                                        <em>深圳平湖仓</em>
                                        <em>同城速递</em>
                            </p>
                            <div class="">
                                <div class="Spinner">
                                    <a class="DisDe" ><i>-</i></a>
                                    <input class="Amount" id="P2V8O1G26p8aw6c2WE3O" value="1" goodsid="P2V8O1G26p8aw6c2WE3O" autocomplete="off" maxlength="4">
                                    <a class="Increase" ><i>+</i></a>
                                 </div>
                                    <a class="bth-jrshop" href="javascript:void(0);" >加入购物车</a>                </div>
                            </li>`;
                }
                }
                return $obj;
            }
        }

    })
    // 商品渲染-结束
})