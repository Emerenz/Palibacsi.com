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
        <?php
        include_once './data.php';
        $q = $_REQUEST["q"];
          
        
        for ($i=0;$i<3;$i++) 
        
        {
            
         $questionnr = $i+1;  
         echo "Question $questionnr <br>";   
         $goodkey = $answers[$i];
      
       $goodanswer = $answertext[$i][$goodkey];    
        if ($q[$i]==$answers[$i]) echo "Good solution.  " . $goodanswer. "<br><br>";
        else {echo "Incorrect solution. The correct solution is:".  $answers[$i]. "<br>" ;
        echo  $goodanswer. "<br><br>";
        }
        }
 
        ?>
    </body>
</html>
