jQuery(function($){
    var $codeState;
    // 获取验证码
    $('#v_code_sms').on('click',function(){
        $(this).html(getCode());
    })
    //验证码判断
    $('#r_code').on("blur",function(){
        var $code = $(this).val().trim();
        if($code == ""){
            $('#r_code').attr('class','amdin-login-nr-k-x-cuo');
            $codeState = false;
        }else  if($code != $('#v_code_sms').html()){
            $('#r_code').attr('class','amdin-login-nr-k-x-cuo');
            $codeState = false;
        }else if($code == $('#v_code_sms').html()){
            $('#r_code').attr('class','amdin-login-nr-k-x-dui');
            $codeState = true;
        }
    })
    $('#signBtn').on('click',function(){
       var user = $('#name').val();
       var pwd = $('#pwd').val();
       if(user.length ==""){
            $('#name_tips').html(`<img src="../images/login_error.png"><b>请输入您的手机号码或用户名</b>`);
        }
        if(pwd.length ==""){
            $('#pwd_tips').html(`<img src="../images/login_error.png"><b>请输入您的密码</b>`);
        }
        if($('#r_code').val() == $('#v_code_sms').html()){
            
            $.post("../api/login.php",{"user":user,"pwd":pwd,"type":"登陆"},function(data){
                console.log(data);
                if(data){
                    Cookie.setCookie("user",JSON.parse(data)[0].username,"","/");
                    location.href = "../index.html";
                }else{
                    $('#layui-layer8').css('display','block');
                    $('#xuanran').html(` <i class="layui-layer-ico layui-layer-ico0"><img src="../images/login_error.png" alt="" /></i>用户名或密码输入错误，请您重新输入！`)
                    setTimeout(function(){
                        $('#layui-layer8').css('display','none');
                        $('#name').val('');
                        $('#pwd').val('');
                        $('#r_code').val('');
                        $('#v_code_sms').html(getCode());
                    },2500)
                    // alert("用户名或密码输入错误，请您重新输入");
                }
            })
        }else{
            $('#layui-layer8').css('display','block');
            $('#xuanran').html(` <i class="layui-layer-ico layui-layer-ico0"><img src="../images/login_error.png" alt="" /></i>验证码输入错误，请您重新输入！`)
                    setTimeout(function(){
                        $('#layui-layer8').css('display','none');
                        $('#r_code').val('');
                        $('#v_code_sms').html(getCode());
                    },2500)
            // alert("验证码输入错误");
        }
        if($('#r_code').val().length ==""){
            $('#layui-layer8').css('display','block');
            $('#xuanran').html(` <i class="layui-layer-ico layui-layer-ico0"><img src="../images/login_error.png" alt="" /></i>请输入验证码！`)
                    setTimeout(function(){
                        $('#layui-layer8').css('display','none');
                        $('#r_code').val('');
                        $('#v_code_sms').html(getCode());
                    },2500)
            alert("请输入验证码");
            // $('body').append(` <!-- <div class="layui-layer layui-layer-dialog layui-layer-border layer-ext-moon layer-anim" id="layui-layer8" type="dialog" times="8" showtime="3000" contype="string" style="z-index: 19891022; top: 139px; left: 630.5px;"><div id="" class="layui-layer-content layui-layer-padding"><i class="layui-layer-ico layui-layer-ico0"></i>验证码不能为空！</div><span class="layui-layer-setwin"></span></div> -->`)
        }
        // $GetCode.html(getCode());
    })
    // 登陆结束
})