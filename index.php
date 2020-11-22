<?php
session_start();
//I also include here the php file with may products list
include_once './data.php';
?>


<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        
         <form action="result.php" method="post">
            Quiz about G.W.F. Hegel<br><br>
         
             <?php
            //In this example we use links with ID's of products 
            
             
             foreach ($answertext as $key => $value) {
                
                echo ($value['question']);
                echo "<br>";
                
              
                
                echo  "<input type='radio' name='q[$key]' value='a' >" ;
                echo "a." . $value['a'] ."<br>";
                 echo  "<input type='radio' name='q[$key]' value='b' >" ;
                echo "b." . $value['b'] ."<br>";
                   echo  "<input type='radio' name='q[$key]' value='c' >" ;
                echo "c." . $value['c'] ."<br>";
                   echo  "<input type='radio' name='q[$key]' value='d' >" ;
                echo "d." . $value['d'] ."<br>";
                
                echo "<br>";
                
            }
        ?>
            
            
            
         
            
            
            <input type="submit" value="Send">
        </form>
        
    </body>
</html>
