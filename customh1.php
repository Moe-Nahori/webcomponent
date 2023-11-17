<?php
$headers = include('headers-config.php');
$page = $_GET['page'] ?? '';
$defaultHeader = 'Welcome to Our Site!';
$headerText = $headers[$page] ?? $defaultHeader;
echo $headerText;
