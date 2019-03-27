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
                $goodsArr = JSON.parse(res);
                $('.cart_num').html($goodsArr.length);
                $('#egu-top-cart').html($goodsArr.length);
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
                                        <a href="cart.html" class="cart_go_btn" target="_blank">结算</a>
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
    // 回到顶部-开始
     $(document).ready(function(){
        $('.return_top').click(function(){
            $('html,body').animate({scrollTop:0},'slow');
        });
        $('.icon-bjt a').click(function(){
            $('html,body').animate({scrollTop:0},'slow');
        })
    });
    // 回到顶部-结束
    // 商品渲染-开始
    $opt = decodeURI(location.search).slice(1).split('=')[1];
    $.ajax({
        type : 'get',
        url : '../api/goodslist.php',
        success : function(res){
            $goodsArr = JSON.parse(res);
            for($i=0; $i<$goodsArr.length; $i++){
                if($goodsArr[$i].id == $opt){
                    if($goodsArr[$i].id == 6){
                        $('.c').html('22枚');
                    }else{
                        $('.small-img').html(`<img src="${$goodsArr[$i].imgurl}">`)
                        $('#goodsimg').html(`<img src="${$goodsArr[$i].imgurl}" width="452" height="452" alt=""><i class="fdj"></i>`);
                        $('#goodsName').html(`${$goodsArr[$i].name}`)
                        $('.jg').html(`<em>￥<font>${$goodsArr[$i].Price}</font></em>[￥<i>${$goodsArr[$i].Price}</i>]`)
                        $('#recommend').html(`<li><div class="img"><a href="javascript:void(0);"><img src="${$goodsArr[$i].imgurl}" alt="${$goodsArr[$i].name}"></a></div><em>￥${$goodsArr[$i].Price}</em></li>`)
                        $('#defParam').html(`<dl>
                                            <dt>名&nbsp;&nbsp;&nbsp;称：</dt><dd>${$goodsArr[$i].name}</dd>
                                            <dt>产&nbsp;&nbsp;&nbsp;地：</dt><dd></dd>
                                            <dt>存&nbsp;&nbsp;&nbsp;储：</dt><dd></dd> 
                                            <dt>保质期：</dt><dd></dd>
                                            <dt>毛&nbsp;&nbsp;&nbsp;重：</dt><dd></dd>
                                        </dl>`);
                        $('#listParam').html(` <dl><dt style="width: 15%;line-height: 35px;">名&nbsp;&nbsp;&nbsp;称：</dt><dd style="width: 85%">${$goodsArr[$i].name}</dd></dl>
                                            <dl><dt style="width: 15%;line-height: 35px;">产&nbsp;&nbsp;&nbsp;地：</dt><dd style="width: 85%"></dd></dl>
                                            <dl><dt style="width: 15%;line-height: 35px;">存&nbsp;&nbsp;&nbsp;储：</dt><dd style="width: 85%"></dd></dl>
                                            <dl><dt style="width: 15%;line-height: 35px;">保质期：</dt><dd style="width: 85%"></dd></dl>
                                            <dl><dt style="width: 15%;line-height: 35px;">毛&nbsp;&nbsp;&nbsp;重：</dt><dd style="width: 85%"></dd></dl>`);
                        $('#descInfo').html(`<img src="${$goodsArr[$i].imgurl}" alt="">
                                             <img src="${$goodsArr[$i].imgurl}" alt="">
                                             <img src="${$goodsArr[$i].imgurl}" alt="">
                                             <img src="${$goodsArr[$i].imgurl}" alt="">
                                             <img src="${$goodsArr[$i].imgurl}" alt="">`);
                    }

                }
            }
        }
    })
    // 商品渲染-结束
    // 详情选项卡-开始
    $('#desc_1').on('click',function(){
        $('#desc_1').attr('class','cur');
        $('#desc_2').attr('class','');
        $('#desc_3').attr('class','');
        $('#defParam').css('display','block');
        $('#listParam').css('display','none');
        $('#serveDesc').css('display','none');
        $('#goodsDesc').css('display','block');
    })
    $('#desc_2').on('click',function(){
        $('#desc_2').attr('class','cur');
        $('#desc_1').attr('class','');
        $('#desc_3').attr('class','');
        $('#defParam').css('display','none');
        $('#listParam').css('display','block');
        $('#serveDesc').css('display','none');
        $('#goodsDesc').css('display','none');
    })
    $('#desc_3').on('click',function(){
        $('#desc_3').attr('class','cur');
        $('#desc_2').attr('class','');
        $('#desc_1').attr('class','');
        $('#defParam').css('display','none');
        $('#listParam').css('display','none');
        $('#serveDesc').css('display','block');
        $('#goodsDesc').css('display','none');
    })
    
    // 详情选项卡-结束
    // 添加选择数量-开始
    $('.jia').on('click',function(){
        $Num = $('#P2V8O1G26p8aw6c2WE3O').val();
        $Num++;
        $('#P2V8O1G26p8aw6c2WE3O').val($Num);
    })
    $('.jian').on('click',function(){
        if($Num >1){
            $Num = $('#P2V8O1G26p8aw6c2WE3O').val();
            $Num--;
            $('#P2V8O1G26p8aw6c2WE3O').val($Num);  
        }else if($Num <= 0){
            $('#P2V8O1G26p8aw6c2WE3O').val(1);
        }
    })
    // 添加选择数量-结束
    // 加入购物车-开始
    $('.btn-gwc').on('click',function(){
        var $Namgoods = $('.inp_t').children().val();
        $.ajax({
            type : 'post',
            data : {
                id : $opt,
                quantity : $Namgoods
            },
            url : '../api/car.php',
            success : function(res){
                $.ajax({
                    type : 'post',
                    url : '../api/car.php',
                    success : function(res){
                        $goodsArr = JSON.parse(res);
                        $('.cart_num').html($goodsArr.length);
                        $('#egu-top-cart').html($goodsArr.length);
                        alert("加入购物车成功！");
                    }
                })
                // $goodsarr = JSON.parse(res);

            }
        })
    })
    // 购物车-结束
    // 放大镜-开始
    
    // $.ajax({
    //     type : 'get',
    //     url : '../api/goodslist.php',
    //     success : function(res){
    //         $goodsArr = JSON.parse(res);
    //         for(var $i=0; $i < $goodsArr.length; $i++){
    //             if($goodsArr[$i].id == $opt){
    //                 var $img = $goodsArr[$i].imgurl;
    //             }
    //         }
    //         var $imgurl = '';
    //         for(var $j=0 ; $j < 6; $j++){
    //             $imgurl += `<li class="">
    //                             <div class="small-img">
    //                                 <img src="${$img}">
    //                             </div>
    //                         </li>`;
    //         }
    //         $('.animation03').html($imgurl);
            // for(var $i=0; $i<6; $i++){
            //     var $allimg += `<li class="">
            //                     <div class="small-img">
            //                         <img src="../images/20190108193584020.jpg">
            //                     </div>
            //                 </li>`;
            // } 
            // $('.animation03').
        // }
    // })
    
    // 放大镜-结束
})