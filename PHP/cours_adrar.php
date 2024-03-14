<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EXOS PHP</title>
</head>
<body>
    <?php
        // Exo fonctions 
        echo "Exo fonctions : ";
        echo "<br>";
        // exo 1 : 
        echo "exo 1 : ";
        function soustrait($a, $b){
            return $a - $b;
        }
        echo soustrait(10, 5);
        echo "<br>";
        

        // exo 2 :
        echo "exo 2 : ";
        function floor_number($number){
            return floor($number);
        }

        echo floor_number(9.5);
        echo "<br>";


        // exo 3 :
        echo "exo 3 : ";
        function sommes($a, $b, $c){
            return $a + $b + $c;
        }

        echo sommes(10, 5, 3);

        echo "<br>";
        echo "exo 4 :";
        function moyenne($a, $b, $c){
            return ($a + $b + $c) / 3;
        }
        echo moyenne(10, 5, 3);


        // Exo conditions
        echo "<br>";
        echo  "<br>";
        echo "Exo conditions : ";
        echo "<br>";
        // exo 1 :
        echo "exo 1 : ";
        function even_or_odd($number){
            if($number % 2 == 0){
                return "pair";
            }else{
                return "impair";
            }
        }
        echo even_or_odd(10);
        echo "<br>";

        // exo 2 :
        echo "exo 2 : ";
        function highest_number($a, $b, $c){
            if($a > $b && $a > $c){
                return $a;
            }elseif($b > $a && $b > $c){
                return $b;
            }else{
                return $c;
            }
        }
        echo highest_number(10, 5, 3);

        // exo 3 :
        echo "<br>";
        echo "exo 3 : ";
        function lowest_number($a, $b, $c){
            if($a < $b && $a < $c){
                return $a;
            }elseif($b < $a && $b < $c){
                return $b;
            }else{
                return $c;
            }
        }

        echo lowest_number(10, 5, 3);

        echo "<br>";
        echo "exo 4 : ";
        function age_case($age){
            if($age >= 6 && $age <= 7){
                return "poussin";
            }elseif($age >= 8 && $age < 9){
                return "pupille";
            }elseif($age >= 10 && $age < 12){
                return "minime";
            }else{
                return "cadet";
            }
        }
        echo age_case(7);
        echo "<br>";
        echo "exo 4 bonus : ";
        function age_switch_case($number){
            switch($number){
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    return "trop jeune";
                    break;
                case 6:
                case 7:
                    return "poussin";
                    break;
                case 8:
                case 9:
                    return "pupille";
                    break;
                case 10:
                case 11:
                    return "minime";
                    break;
                default:
                    return "cadet";
                    break;
            }
        }
        echo age_switch_case(10);

        // Exo boucles
        echo "<br>";
        echo "Exo boucles : ";
        echo "<br>";
        // exo 1 :
        echo "exo 1 : ";
        echo "<br>";
        echo "boucle while : ";
        $i = 1;
        while($i <= 5){
            echo "<br>";
            echo $i;
            $i++;
        }
        echo "<br>";
        echo "boucle for : ";
        for($i = 1; $i <= 5; $i++){
            echo "<br>";
            echo $i;
        }

        // exo 2 :
        echo "<br>";
        echo "exo 2 : ";
        function echo_plus_10($number){
            for($i = 1; $i <= 10; $i++){
                echo "<br>";
                echo ++$number;

            }
        }
        echo_plus_10(5);


        // Exo tableaux
        echo "<br>";
        echo "<br>";
        echo "Exo tableaux : ";
        echo "<br>";
        // exo 1 :
        echo "exo 1 : ";
        echo "<br>";
        $test_array = [1, 2, 3, 4, 5];
        function get_max($array){
            $max = 0;
            for($i = 0; $i < count($array); $i++){
                if($array[$i] > $max){
                    $max = $array[$i];
                }
            }
            return $max;
        }
        echo get_max($test_array);

        // exo 2 :
        echo "<br>";
        echo "exo 2 : ";
        echo "<br>";
        $test_array = [1, 2, 3, 4, 5];
        function get_average($array){
            $sum = 0;
            for($i = 0; $i < count($array); $i++){
                $sum += $array[$i];
            }
            return $sum / count($array);
        }
        echo get_average($test_array);

        // exo 3 :
        echo "<br>";
        echo "exo 3 : ";
        echo "<br>";
        $test_array = [5, 4, 3, 2, 1];
        function get_min($array){
            $min = $array[0];
            for($i = 0; $i < count($array); $i++){
                if($array[$i] < $min){
                    $min = $array[$i];
                }
            }
            return $min;
        }
        echo get_min($test_array);

    ?>
</body>
</html>