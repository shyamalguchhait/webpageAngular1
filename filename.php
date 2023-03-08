<?php
$path = './src/assets/lightbox/';
$filename = "5";
$path = $path . $filename;
$file = scandir($path);
// unset($file[0]);
// unset($file[1]);
\array_splice($file, 0, 1);
\array_splice($file, 0, 1);
header('Content-Type: application/json; charset=utf-8');
print_r(json_encode($file));
$fp = fopen($filename . ".json", "w");
fwrite($fp, json_encode($file));
fclose($fp);
