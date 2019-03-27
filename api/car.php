<?php 
    // 连接数据库
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'ygw';

    $connr = new mysqli($servername, $username, $password, $dbname);
    if($connr->connect_error){
    var_dump($connr->connect_error)
    ;}

    // $connr->set_charset('utf8');
    // 接收前端传值
    // $uid = isset($_POST['uid']) ? $_POST['uid'] : '123';
    $id = isset($_POST['id']) ? $_POST['id'] : '';
    $quantity = isset($_POST['quantity']) ? $_POST['quantity'] : '0';
    $fn = isset($_POST['fn']) ? $_POST['fn'] : 'no';
    // var_dump($id);
    if($fn == 'no'){
        // 判断前端是否传数量值
        if($quantity != 0 ){
            $sql = "SELECT * FROM cart WHERE id='$id'";
            $res=$connr->query($sql);
            $rows = $res->num_rows;
            // 判断数据库是否存在数据
            if($rows > 0){
                $rows = $res->fetch_all(MYSQLI_ASSOC);
                $goodsquantity1 = $rows[0]['quantity'];
                $goodsquantity3 = $goodsquantity1 + $quantity;
                $sql3 = "UPDATE cart SET quantity='$goodsquantity3' WHERE id='$id'";
                $res2 = $connr->query($sql3);
                // 数据库若存在数据返回给前端
                if($res2 == true){
                    $sql7 = "SELECT * FROM cart WHERE id='$id'";
                    $res7 = $connr->query($sql7);
                    // $rows2 = $res7->fetch_all(MYSQLI_ASSOC);
                    // $contentarr1 = json_encode($rows2,JSON_UNESCAPED_UNICODE);
                    // echo $contentarr1;
                    $resrd = $connr -> query('select * from cart');
                    $contentr_d = $resrd->fetch_all(MYSQLI_ASSOC);
                    $contentarr_d = json_encode($contentr_d,JSON_UNESCAPED_UNICODE);
                    echo $contentarr_d;
                }else{
                    // echo "发生错误,请稍后尝试！";
                }
            }else{
                // 若数据库存在数据，获取该数据进行修改
                $sql4 = "SELECT * FROM goodslist WHERE id='$id'";
                $res4 = $connr->query($sql4);
                $rows4 = $res4->fetch_all(MYSQLI_ASSOC);

                $gid = $rows4[0]['id'];
                $price = $rows4[0]['Price'];//价格
                $img = $rows4[0]['imgurl'];//图片
                $goodsname = $rows4[0]['name'];//标题
                $goodsquantity2 = $quantity;
                // 进行修改，返回给前端
                $sql5 = "INSERT INTO cart(id,name,price,imgurl,quantity) VALUES('$gid','$goodsname','$price','$img','$goodsquantity2')";
                $res5 = $connr->query($sql5);
                $sql6 = "SELECT * FROM cart WHERE id='$id'";
                $res6 = $connr->query($sql6);
                // $rows6 = $res6->fetch_all(MYSQLI_ASSOC);
                // $contentarr2 = json_encode($rows6,JSON_UNESCAPED_UNICODE);
                // echo $contentarr2;
                $resrd = $connr -> query('select * from cart');
                $contentr_d = $resrd->fetch_all(MYSQLI_ASSOC);
                $contentarr_d = json_encode($contentr_d,JSON_UNESCAPED_UNICODE);
                echo $contentarr_d;
            }
        }else if($quantity == 0 && $id == ''){
            // 若不传数量值，返回所有数据
            $resr = $connr -> query('select * from cart');
            $contentr = $resr->fetch_all(MYSQLI_ASSOC);
            $contentarr_r = json_encode($contentr,JSON_UNESCAPED_UNICODE);
            echo $contentarr_r;
        }
    }else if($fn == 0){
    // 判断是否删除商品,
        $sqldel = "DELETE FROM cart WHERE id='$id';";
        $resd = $connr->query($sqldel);
    // 把数据库剩下数据返回给前端
        
        $resrd = $connr -> query('select * from cart');
        $contentr_d = $resrd->fetch_all(MYSQLI_ASSOC);
        $contentarr_d = json_encode($contentr_d,JSON_UNESCAPED_UNICODE);
        echo $contentarr_d;
    } 
    $connr->close();
 ?>        
