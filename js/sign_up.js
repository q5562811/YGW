$(function(){
    var $userState;
    var $pwdState;
    var $pwd2State;
    var $codeState;
    // 获取验证码
    $('#v_code_sms').on('click',function(){
        console.log($(this));
        $(this).html(getCode());
    })
    //验证码判断
    $('#validcode').on("blur",function(){
        var $code = $(this).val().trim();
        if($code == ""){
            $('#ms_tips').html(`<img src="../images/login_error.png"><b>验证码不能为空</b>`).css("color","red");
            $codeState = false;
        }else  if($code != $('#v_code_sms').html()){
            $('#ms_tips').html(`<img src="../images/login_error.png"><b>请输入正确的验证码</b>`).css("color","red");
            $codeState = false;
        }else if($code == $('#v_code_sms').html()){
            $('#ms_tips').html("验证码正确").css("color","#45F671")
            $codeState = true;
        }
    })
    // 手机判断
    $('#mobile').on("blur",function(){
        var $user = this.value;
        if(!(/^1[34578]\d{9}$/.test($user))){
            $(this).parent().next().html(`<img src="../images/login_error.png"><b>请输入正确的手机号码</b>`);
            $('#p_chk').attr('class','amdin-register-nr-k-dui amdin-register-nr-k-cuo');
            $userState = false;
        }else{
            $.post("../api/login.php",{"user":$user},(data)=>{
                if(data == 'yes'){
                    console.log(666);
                    $('#p_chk').attr('class','amdin-register-nr-k-dui');
                    $(this).parent().next().html('恭喜，该用户可以注册！').css("color","#45F671");
                    $userState = true;
                }else if(data == "该用户名已被注册"){
                    console.log(666);
                    $('#p_chk').attr('class','amdin-register-nr-k-dui amdin-register-nr-k-cuo');
                    $(this).parent().next().html('该用户名已被注册').css("color","red");
                    $userState = false;
                }
            });
        }
    })
    // 密码判断
    $('#txtpwd').on("blur",function(){
        var $pwd = this.value.trim();
        if($pwd.length <6){
            $(this).parent().next().html(`<img src="../images/login_error.png"><b>密码不符合要求</b>`).css("color","red");
            $('#pwdchk').attr('class','amdin-register-nr-k-dui amdin-register-nr-k-cuo');
            $pwdState = false;
        }else{
            $(this).parent().next().html("恭喜，输入正确！").css("color","#45F671");
            $('#pwdchk').attr('class','amdin-register-nr-k-dui');
            $pwdState = true;
        }
    })
    // 重复密码判断
    $('#t_pwd').on("blur",function(){
        var $pwd = this.value.trim();
        if($pwd != $('#txtpwd').val()){
            $(this).parent().next().html(`<img src="../images/login_error.png"><b>密码不一致</b>`).css("color","red");
            $('#t_chk').attr('class','amdin-register-nr-k-dui amdin-register-nr-k-cuo');
            $pwd2State = false;
        }else{
            $(this).parent().next().html("恭喜，输入正确！").css("color","#45F671");
            $('#t_chk').attr('class','amdin-register-nr-k-dui');
            $pwd2State = true;
        }
    })
    $ojbk = true;
    $('#squaredr').on('click',function(){
        if($ojbk == false){
            $('#squaredr').html(`<img src="../images/gou.png" height="24px" width="25px" alt="" />`);
            $ojbk = !$ojbk;
        }else{
            $('#squaredr').html(` `);
            $ojbk = !$ojbk;
        }
    })
    // 条款框
    var $btnT= false;
    $('#button1').on('click',function(){
        if($btnT == false){
            // $('#fade').css('display','block');
            $('#MyDiv').css('display','block');
            $btnT= !$btnT;
        }else{
            // $('#fade').css('display','none');
            $('#MyDiv').css('display','none');
            $btnT= !$btnT;
        }
        
    })
    $('.admin-r-white-guanbi-anniu').on('click',function(){
        if($btnT == true){
            $('#MyDiv').css('display','none');
            $btnT= !$btnT;
        }
    })
    $('#btnsp').on('click',function(){
        if($btnT == true){
            $('#MyDiv').css('display','none');
            $btnT= !$btnT;
        }
    })
    // 注册提交判断
    $('#zcbtn').on("click",function(e){
        var $state = $userState&&$pwdState&&$pwd2State&&$codeState;
        if($state){
            if($ojbk == true){
                var register =true;
                var user = $('#mobile').val();
                var pwd = $('#txtpwd').val();
                $.post("../api/login.php",{"user":user,"pwd":pwd,"register":register},function(data){
                    if(data){
                        location.href = "../index.html";

                    }
                })
            }else{
                alert("请接受服务条款");
            }
        }
    })
    // 注册结束
})