<?php

$config = [
    'api' => 'api.yoursynergycp.com',
    'key' => '',
];

$url = sprintf(
    'https://%s/server?available=true&key=%s&per_page=500',
    $config['api'],
    $config['key']
);
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

$output = curl_exec($ch);

curl_close($ch);

echo $output;
